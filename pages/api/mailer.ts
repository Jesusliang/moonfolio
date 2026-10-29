import type { NextApiRequest, NextApiResponse } from 'next'

const LIMITS = { name: 100, email: 254, message: 5000 }
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Best-effort per-IP rate limit. It lives in this server instance's memory, so on serverless
// hosting each instance counts separately; it still stops a single client from flooding the inbox.
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const recentSends = new Map<string, number[]>()

const isRateLimited = (ip: string) => {
  const now = Date.now()
  const sends = (recentSends.get(ip) ?? []).filter((time) => now - time < WINDOW_MS)
  if (sends.length >= MAX_PER_WINDOW) {
    recentSends.set(ip, sends)
    return true
  }
  sends.push(now)
  recentSends.set(ip, sends)
  return false
}

const clientIp = (req: NextApiRequest) => {
  const forwarded = req.headers['x-forwarded-for']
  const first = Array.isArray(forwarded) ? forwarded[0] : forwarded?.split(',')[0]
  return first?.trim() || req.socket.remoteAddress || 'unknown'
}

const field = (value: unknown, max: number) =>
  typeof value === 'string' && value.trim().length > 0 && value.length <= max ? value.trim() : null

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'method_not_allowed' })
  }

  const body = req.body ?? {}

  // Honeypot: the field is hidden from people, so only bots fill it. Pretend it worked.
  if (body.website) {
    return res.status(200).json({ ok: true })
  }

  const name = field(body.name, LIMITS.name)
  if (!name) return res.status(422).json({ error: 'invalid', key: 'name' })
  const email = field(body.email, LIMITS.email)
  if (!email || !EMAIL_PATTERN.test(email))
    return res.status(422).json({ error: 'invalid', key: 'email' })
  const message = field(body.message, LIMITS.message)
  if (!message) return res.status(422).json({ error: 'invalid', key: 'message' })

  if (isRateLimited(clientIp(req))) {
    return res.status(429).json({ error: 'too_many_requests' })
  }

  try {
    const nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PWD
      }
    })
    await transporter.sendMail({
      from: 'contact@jesusliang.com',
      to: 'jesusliang96@gmail.com, contact@jesusliang.com',
      subject: 'portfolio contact email',
      text: `from: ${name} - ${email} \n ${message}`
    })
    return res.status(200).json({ ok: true })
  } catch (error) {
    // Keep SMTP details in the server logs, never in the response
    console.error('mailer: failed to send contact email', error)
    return res.status(500).json({ error: 'send_failed' })
  }
}

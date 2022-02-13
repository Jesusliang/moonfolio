// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

// export const config = {
//   api: {
//     bodyParser: {
//       sizeLimit: "1mb"
//     }
//   }
// };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    if (!req.body.name) {
      return res.status(422).json({
        error: "required",
        key: "name"
      });
    }
    if (!req.body.email) {
      return res.status(422).json({ error: "required", key: "email" });
    }
    if (!req.body.message) {
      return res.status(422).json({ error: "required", key: "message" });
    }
    const nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "no-reply@jesusliang.com",
        pass: "S{5&VMRyt{Pe'2@W"
      }
    });
    const info = await transporter.sendMail({
      from: "no-reply@jesusliang.com",
      to: "jesusliang96@gmail.com, contact@jesusliang.com",
      subject: "portfolio contact email",
      text: `from: ${req.body.name} - ${req.body.email} \n ${req.body.message}`
    });
  }
}
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next/pages'
import { FiAlertCircle, FiCheck, FiCheckCircle, FiCopy } from 'react-icons/fi'
import Reveal from '../ui/Reveal'
import { resumeFor, site } from '../../data/site'
import styles from './Core.module.scss'

interface FormValues {
  name: string
  email: string
  message: string
  /** Honeypot: hidden from people, filled in by bots */
  website: string
}

type Status = 'idle' | 'sending' | 'sent' | 'error'

const Core: React.FC = () => {
  const { t } = useTranslation()
  const { locale } = useRouter()
  const { handleSubmit, register } = useForm<FormValues>()
  const [status, setStatus] = useState<Status>('idle')
  const [copied, setCopied] = useState(false)

  const onSubmit = handleSubmit(async (data) => {
    setStatus('sending')
    try {
      const response = await fetch('/api/mailer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (!response.ok) throw new Error(`mailer responded ${response.status}`)
      setStatus('sent')
    } catch (error) {
      setStatus('error')
    }
  })

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      window.location.href = `mailto:${site.email}`
    }
  }

  const renderForm = () => {
    if (status === 'sent' || status === 'error') {
      const sent = status === 'sent'
      return (
        <div className={styles.result} role="status">
          {sent ? (
            <FiCheckCircle className={styles.ok} aria-hidden />
          ) : (
            <FiAlertCircle className={styles.ko} aria-hidden />
          )}
          <h3 className="display">{t(sent ? 'core.sent.title' : 'core.error.title')}</h3>
          <p>{t(sent ? 'core.sent.description' : 'core.error.description')}</p>
        </div>
      )
    }
    return (
      <form onSubmit={onSubmit} className={styles.form}>
        <label className={styles.field}>
          {t('core.form.name')}
          <input
            type="text"
            autoComplete="name"
            required
            maxLength={100}
            placeholder={t('core.form.namePlaceholder')}
            {...register('name', { required: true })}
          />
        </label>
        <label className={styles.field}>
          {t('core.form.email')}
          <input
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder={t('core.form.emailPlaceholder')}
            {...register('email', { required: true })}
          />
        </label>
        <label className={styles.field}>
          {t('core.form.message')}
          <textarea
            rows={5}
            required
            maxLength={5000}
            placeholder={t('core.form.messagePlaceholder')}
            {...register('message', { required: true })}
          />
        </label>
        <label className={styles.honeypot} aria-hidden>
          Website
          <input type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
        </label>
        <button type="submit" className={styles.submit} disabled={status === 'sending'}>
          {status === 'sending' ? t('core.form.sending') : t('core.form.send')}
        </button>
      </form>
    )
  }

  return (
    <section id="core" className={styles.core}>
      <svg
        className={styles.glow}
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <circle className={styles.pulse} cx="1180" cy="780" r="320" fill="#FF7A2F" opacity=".22" />
        <circle
          className={styles.pulse}
          cx="1180"
          cy="780"
          r="200"
          fill="#FF7A2F"
          opacity=".4"
          style={{ animationDelay: '-1.2s' }}
        />
        <circle cx="1180" cy="780" r="110" fill="#FFB066" />
      </svg>

      <div className={`container ${styles.layout}`}>
        <Reveal className={styles.intro}>
          <p className={`mono ${styles.label}`}>{t('core.label')}</p>
          <h2 className={`display ${styles.title}`}>{t('core.title')}</h2>
          <div className={styles.email}>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <button type="button" onClick={copyEmail} aria-live="polite">
              {copied ? <FiCheck aria-hidden /> : <FiCopy aria-hidden />}
              {copied ? t('core.copied') : t('core.copy')}
            </button>
          </div>
          <p className={`mono ${styles.links}`}>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="hit">
              LinkedIn ↗
            </a>
            <a href={resumeFor(locale)} target="_blank" rel="noreferrer" className="hit">
              {t('nav.resume')} ↓
            </a>
          </p>
          <a href="#space" className={styles.back}>
            <svg width="18" height="26" viewBox="0 0 18 26" aria-hidden>
              <path d="M9,0 Q18,8 15,18 H3 Q0,8 9,0 Z" fill="#FCEBDD" />
              <path className={styles.flame} d="M5,18 L9,26 L13,18 Z" fill="#FF7A2F" />
            </svg>
            {t('core.backToOrbit')}
          </a>
        </Reveal>

        <Reveal delay={100} className={styles.card}>
          {renderForm()}
        </Reveal>
      </div>

      <p className={`container mono ${styles.footer}`}>
        © {new Date().getFullYear()} {site.name} · {t('core.footer')}
      </p>
    </section>
  )
}
export default Core

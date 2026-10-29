import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './LangSwitch.module.scss'

const LangSwitch: React.FC<{ className?: string }> = ({ className }) => {
  const { locale, asPath } = useRouter()
  const path = asPath.split('#')[0]
  return (
    <div
      className={[styles.lang, className].filter(Boolean).join(' ')}
      role="group"
      aria-label="Language"
    >
      {['es', 'en'].map((lng) => (
        <Link key={lng} href={path} locale={lng} scroll={false}>
          <a className={lng === locale ? styles.active : undefined} hrefLang={lng}>
            {lng.toUpperCase()}
          </a>
        </Link>
      ))}
    </div>
  )
}
export default LangSwitch

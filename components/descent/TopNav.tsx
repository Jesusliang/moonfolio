import React from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next/pages'
import { FiDownload } from 'react-icons/fi'
import LangSwitch from '../ui/LangSwitch'
import ThemeToggle from '../ui/ThemeToggle'
import { resumeFor } from '../../data/site'
import styles from './TopNav.module.scss'

const TopNav: React.FC = () => {
  const { t } = useTranslation()
  const { locale } = useRouter()

  return (
    <header className={styles.wrap}>
      <div className="container">
        <nav className={styles.bar} aria-label="Main">
          <a href="#space" className={`display ${styles.brand}`}>
            JESUS LIANG
          </a>
          <div className={styles.actions}>
            <ThemeToggle />
            <LangSwitch />
            <a
              href={resumeFor(locale)}
              target="_blank"
              rel="noreferrer"
              className={`mono hit ${styles.cv}`}
            >
              {t('nav.resume')} <FiDownload aria-hidden />
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default TopNav

import React from 'react'
import { useTranslation } from 'next-i18next/pages'
import styles from './RmsMock.module.scss'

/** Illustrative pricing card for the AI RMS, which has no public screenshots. */
const RmsMock: React.FC<{ large?: boolean }> = ({ large }) => {
  const { t } = useTranslation()
  return (
    <div className={[styles.rms, large ? styles.large : ''].join(' ')}>
      <div className={styles.top}>
        <span className={`mono ${styles.signal}`}>{t('rmsMock.signal')}</span>
        <span className={`mono ${styles.delta}`}>+15%</span>
      </div>
      <div className={styles.prices}>
        <span className={styles.old}>92 €</span>
        <span className={styles.arrow} aria-hidden>
          →
        </span>
        <span className={`display ${styles.suggested}`}>106 €</span>
      </div>
      <p className={styles.reason}>{t('rmsMock.reason')}</p>
      <p className={`mono ${styles.meta}`}>
        <span className={styles.badge}>{t('rmsMock.badge')}</span>
        {t('rmsMock.meta')}
      </p>
    </div>
  )
}
export default RmsMock

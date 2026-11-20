import React from 'react'
import { useTranslation } from 'next-i18next/pages'
import styles from './RmsMock.module.scss'

const forecastBars = [
  { day: 'L', occ: 58, price: '84 €', peak: false },
  { day: 'M', occ: 62, price: '86 €', peak: false },
  { day: 'X', occ: 68, price: '90 €', peak: false },
  { day: 'J', occ: 76, price: '96 €', peak: false },
  { day: 'V', occ: 88, price: '106 €', peak: true },
  { day: 'S', occ: 94, price: '114 €', peak: true },
  { day: 'D', occ: 72, price: '92 €', peak: false }
]

/** Illustrative pricing card for the AI RMS, which has no public screenshots. */
const RmsMock: React.FC<{ large?: boolean }> = ({ large }) => {
  const { t } = useTranslation()
  return (
    <div className={[styles.rms, large ? styles.large : ''].join(' ')}>
      <div className={styles.top}>
        <span className={`mono ${styles.signal}`}>{t('rmsMock.signal')}</span>
        <span className={`mono ${styles.delta}`}>+15%</span>
      </div>

      <div className={styles.heroRow}>
        <div className={styles.prices}>
          <span className={styles.old}>92 €</span>
          <span className={styles.arrow} aria-hidden>
            →
          </span>
          <span className={`display ${styles.suggested}`}>106 €</span>
        </div>

        {large && (
          <div className={styles.compset} aria-hidden>
            <span className={`mono ${styles.chip}`}>Booking · 118 €</span>
            <span className={`mono ${styles.chip}`}>Airbnb · 114 €</span>
          </div>
        )}
      </div>

      {large && (
        <div className={styles.chart} aria-hidden>
          {forecastBars.map((bar) => (
            <div key={bar.day} className={styles.barCol}>
              <span className={`mono ${styles.barPrice}`}>{bar.price}</span>
              <div className={styles.barTrack}>
                <div
                  className={[styles.barFill, bar.peak ? styles.barPeak : ''].join(' ')}
                  style={{ height: `${bar.occ}%` }}
                />
              </div>
              <span className={`mono ${styles.barDay}`}>{bar.day}</span>
            </div>
          ))}
        </div>
      )}

      <p className={styles.reason}>{t('rmsMock.reason')}</p>
      <p className={`mono ${styles.meta}`}>
        <span className={styles.badge}>{t('rmsMock.badge')}</span>
        <span>{t('rmsMock.meta')}</span>
      </p>
    </div>
  )
}
export default RmsMock

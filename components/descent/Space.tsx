import React from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next/pages'
import { FiArrowDown, FiDownload } from 'react-icons/fi'
import Reveal from '../ui/Reveal'
import LangSwitch from '../ui/LangSwitch'
import { resumeFor } from '../../data/site'
import styles from './Space.module.scss'

// x, y, radius, twinkle delay (s)
const stars: [number, number, number, number][] = [
  [120, 90, 1.4, 0],
  [260, 210, 1, 0.6],
  [420, 60, 1.6, 1.3],
  [560, 300, 1, 2],
  [700, 140, 1.2, 0.4],
  [860, 70, 1, 1.7],
  [980, 260, 1.5, 2.4],
  [1120, 120, 1, 0.9],
  [1340, 200, 1.3, 1.1],
  [80, 420, 1, 2.7],
  [1260, 420, 1.2, 0.2],
  [640, 480, 1, 1.9],
  [300, 700, 1, 1.5],
  [1100, 760, 1.1, 0.8],
  [40, 620, 1.2, 2.2],
  [1400, 600, 1, 1.4],
  [520, 820, 1.2, 0.5],
  [880, 560, 1, 2.9]
]

interface Stat {
  value: string
  label: string
}

const Space: React.FC = () => {
  const { t } = useTranslation()
  const { locale } = useRouter()
  const stats = t('space.stats', { returnObjects: true }) as Stat[]

  return (
    <section id="space" className={styles.space}>
      <svg
        className={styles.scene}
        viewBox="0 0 1440 1000"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        {stars.map(([cx, cy, r, delay]) => (
          <circle
            key={`${cx}-${cy}`}
            className={styles.star}
            cx={cx}
            cy={cy}
            r={r}
            style={{ animationDelay: `${delay}s` }}
          />
        ))}
        <circle cx="1240" cy="150" r="46" fill="#E9E4D4" />
        <circle cx="1225" cy="138" r="8" fill="#D6D0BD" />
        <circle cx="1256" cy="166" r="11" fill="#D6D0BD" />
        <ellipse
          cx="720"
          cy="900"
          rx="760"
          ry="170"
          fill="none"
          stroke="rgba(255,255,255,.14)"
          strokeDasharray="3 9"
        />
        <g>
          <animateMotion
            dur="30s"
            repeatCount="indefinite"
            path="M-40,900 a760,170 0 1,1 1520,0 a760,170 0 1,1 -1520,0"
          />
          <rect x="-5" y="-4" width="10" height="8" fill="#F2F4FF" />
          <rect x="-20" y="-2" width="13" height="4" fill="#7FA8FF" />
          <rect x="7" y="-2" width="13" height="4" fill="#7FA8FF" />
        </g>
      </svg>

      <div className={`container ${styles.inner}`}>
        <header className={styles.nav}>
          <a href="#space" className={`display ${styles.brand}`}>
            JESUS LIANG
          </a>
          <div className={styles.actions}>
            <LangSwitch />
            <a
              href={resumeFor(locale)}
              target="_blank"
              rel="noreferrer"
              className={`mono ${styles.cv}`}
            >
              {t('nav.resume')} <FiDownload aria-hidden />
            </a>
          </div>
        </header>

        <Reveal>
          <p className={`mono ${styles.eyebrow}`}>{t('space.eyebrow')}</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className={`display ${styles.title}`}>
            {t('space.titleA')} <span>{t('space.titleB')}</span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className={styles.lead}>{t('space.lead')}</p>
        </Reveal>
        <a href="#sky" className={`mono ${styles.scroll}`}>
          {t('space.scroll')} <FiArrowDown aria-hidden />
        </a>

        <ul className={styles.stats}>
          {stats.map((stat, i) => (
            <Reveal as="li" key={stat.label} delay={i * 80} className={styles.stat}>
              <p className={`mono ${styles.statLabel}`}>{t('space.orbit')}</p>
              <p className={`display ${styles.statValue}`}>{stat.value}</p>
              <p className={styles.statText}>{stat.label}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
export default Space

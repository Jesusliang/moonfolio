import React from 'react'
import Image from 'next/image'
import { useTranslation } from 'next-i18next/pages'
import Reveal from '../ui/Reveal'
import photo from '../../public/images/me.webp'
import styles from './City.module.scss'

interface Milestone {
  period: string
  role: string
  text: string
}

const TrafficLight: React.FC<{ current?: boolean; offset?: number }> = ({
  current,
  offset = 0
}) => (
  <svg className={styles.light} width="36" height="120" viewBox="0 0 36 120" aria-hidden>
    <rect x="16" y="60" width="4" height="60" fill="#2A3038" />
    <rect x="4" y="0" width="28" height="68" rx="8" fill="#2A3038" />
    {current ? (
      <>
        <circle cx="18" cy="14" r="8" fill="#FF5A4E" opacity=".18" />
        <circle cx="18" cy="34" r="8" fill="#FFC14D" opacity=".18" />
        <circle cx="18" cy="54" r="8" fill="#5BD48A" />
      </>
    ) : (
      <>
        <circle
          className={styles.red}
          cx="18"
          cy="14"
          r="8"
          fill="#FF5A4E"
          style={{ animationDelay: `${offset}s` }}
        />
        <circle
          className={styles.amber}
          cx="18"
          cy="34"
          r="8"
          fill="#FFC14D"
          style={{ animationDelay: `${offset}s` }}
        />
        <circle
          className={styles.green}
          cx="18"
          cy="54"
          r="8"
          fill="#5BD48A"
          style={{ animationDelay: `${offset}s` }}
        />
      </>
    )}
  </svg>
)

const WaterTower: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <g transform={`translate(${x} ${y})`}>
    <rect x="0" y="0" width="26" height="20" rx="3" />
    <path d="M-2,0 L13,-14 L28,0 Z" />
    <rect x="4" y="20" width="3" height="6" />
    <rect x="19" y="20" width="3" height="6" />
  </g>
)

// Front-row buildings: x, y, width, height
const front: [number, number, number, number][] = [
  [20, 210, 110, 150],
  [150, 160, 90, 200],
  [270, 150, 120, 210],
  [410, 200, 100, 160],
  [530, 120, 76, 240],
  [630, 230, 120, 130],
  [770, 140, 84, 220],
  [870, 190, 110, 170],
  [1000, 70, 90, 290],
  [1110, 210, 120, 150],
  [1250, 150, 90, 210],
  [1360, 220, 80, 140]
]
const back: [number, number, number, number][] = [
  [0, 150, 80, 210],
  [90, 90, 60, 270],
  [200, 120, 70, 240],
  [330, 60, 54, 300],
  [560, 110, 80, 250],
  [800, 80, 64, 280],
  [930, 130, 90, 230],
  [1110, 70, 60, 290],
  [1250, 120, 80, 240],
  [1370, 160, 70, 200]
]
const litWindows: [number, number, number][] = [
  [47, 238, 0],
  [311, 184, -3],
  [549, 166, -5],
  [801, 202, -1],
  [1031, 130, -6],
  [1283, 220, -2]
]

const Skyline: React.FC = () => (
  <svg
    className={styles.skyline}
    viewBox="0 0 1440 360"
    preserveAspectRatio="xMidYMax slice"
    aria-hidden
  >
    <defs>
      <pattern id="city-wins" width="14" height="18" patternUnits="userSpaceOnUse">
        <rect x="3" y="4" width="6" height="8" fill="#DCE5EE" opacity=".55" />
      </pattern>
      <pattern id="city-wins-far" width="14" height="18" patternUnits="userSpaceOnUse">
        <rect x="3" y="4" width="6" height="8" fill="#C9D3DE" opacity=".35" />
      </pattern>
    </defs>
    <g fill="#AEB8C4">
      {back.map(([x, y, w, h]) => (
        <rect key={x} x={x} y={y} width={w} height={h} />
      ))}
    </g>
    <g fill="url(#city-wins-far)">
      {back.map(([x, y, w, h]) => (
        <rect key={x} x={x} y={y} width={w} height={h} />
      ))}
    </g>
    <g fill="#6E7885">
      {front.map(([x, y, w, h]) => (
        <rect key={x} x={x} y={y} width={w} height={h} />
      ))}
      {/* Empire-style stepped tower */}
      <rect x="290" y="100" width="80" height="60" />
      <rect x="308" y="62" width="44" height="40" />
      <rect x="320" y="36" width="20" height="28" />
      <rect x="328" y="4" width="4" height="34" />
      {/* Chrysler-style crown */}
      <path d="M530,120 L568,40 L606,120 Z" />
      <rect x="566" y="14" width="4" height="30" />
      {/* Glass tower roof */}
      <path d="M1000,70 L1090,40 V70 Z" />
      <WaterTower x={52} y={186} />
      <WaterTower x={896} y={166} />
    </g>
    <path d="M544,120 L568,70 L592,120 Z" fill="#8A94A1" />
    <g fill="url(#city-wins)">
      {front.map(([x, y, w, h]) => (
        <rect key={x} x={x} y={y} width={w} height={h} />
      ))}
      <rect x="290" y="100" width="80" height="60" />
    </g>
    <g fill="#FFE9A8">
      {litWindows.map(([x, y, delay]) => (
        <rect
          key={x}
          className={styles.window}
          x={x}
          y={y}
          width="6"
          height="8"
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
    </g>
  </svg>
)

const Car: React.FC<{ color: string; taxi?: boolean; className?: string }> = ({
  color,
  taxi,
  className
}) => (
  <svg
    className={[styles.car, className].filter(Boolean).join(' ')}
    width="120"
    height="46"
    viewBox="0 0 120 46"
    aria-hidden
  >
    {taxi && <rect x="46" y="0" width="20" height="6" rx="2" fill="#1F2630" />}
    <path d="M10,30 V20 Q12,14 22,14 L36,6 H76 L92,14 H106 Q114,14 114,24 V30 Z" fill={color} />
    <rect x="42" y="9" width="18" height="7" fill="#DCE5EE" />
    <rect x="64" y="9" width="16" height="7" fill="#DCE5EE" />
    {taxi && <rect x="10" y="22" width="104" height="3" fill="#1F2630" opacity=".5" />}
    <circle cx="32" cy="32" r="8" fill="#15181D" />
    <circle cx="92" cy="32" r="8" fill="#15181D" />
  </svg>
)

const City: React.FC = () => {
  const { t } = useTranslation()
  const milestones = t('city.milestones', { returnObjects: true }) as Milestone[]

  return (
    <section id="city" className={styles.city}>
      <div className="container">
        <Reveal>
          <p className={`mono ${styles.label}`}>{t('city.label')}</p>
          <h2 className={`display ${styles.title}`}>{t('city.title')}</h2>
        </Reveal>

        <ol className={styles.milestones}>
          {milestones.map((milestone, i) => {
            const current = i === milestones.length - 1
            return (
              <Reveal as="li" key={milestone.role} delay={i * 100} className={styles.milestone}>
                <TrafficLight current={current} offset={-i * 2} />
                <div>
                  <p className={`mono ${styles.period} ${current ? styles.now : ''}`}>
                    {milestone.period}
                    {current && ` · ${t('city.current')}`}
                  </p>
                  <h3 className={`display ${styles.role}`}>{milestone.role}</h3>
                  <p className={styles.text}>{milestone.text}</p>
                </div>
              </Reveal>
            )
          })}
        </ol>

        <div className={styles.about}>
          <Reveal className={styles.photo}>
            <Image
              src={photo}
              alt="Jesus Liang"
              fill
              style={{ objectFit: 'cover', objectPosition: '50% 25%' }}
              placeholder="blur"
              sizes="260px"
            />
          </Reveal>
          <Reveal delay={100} className={styles.aboutText}>
            <p className={`mono ${styles.label}`}>{t('city.aboutLabel')}</p>
            <h3 className={`display ${styles.aboutTitle}`}>{t('city.aboutTitle')}</h3>
            <p className={styles.text}>{t('city.aboutText')}</p>
          </Reveal>
        </div>
      </div>

      <Skyline />

      <div className={styles.street} aria-hidden>
        <div className={styles.curb} />
        <div className={styles.lanes}>
          <div className={styles.median} />
          <div className={`${styles.lane} ${styles.top}`}>
            <Car color="#F5C518" taxi />
            <Car color="#C9D0D8" className={styles.slow} />
          </div>
          <div className={`${styles.lane} ${styles.bottom}`}>
            <Car color="#3C6E9E" className={styles.reverse} />
            <Car color="#F5C518" taxi className={`${styles.reverse} ${styles.late}`} />
          </div>
        </div>
        <div className={styles.slab} />
      </div>
    </section>
  )
}
export default City

import React from 'react'
import { useTranslation } from 'next-i18next/pages'
import Reveal from '../ui/Reveal'
import styles from './Underground.module.scss'

interface Layer {
  depth: string
  name: string
  items: string
}

// One colour per stratum, darkening with depth; the core section starts on the last one
const strata = ['#6B4A33', '#5A3B25', '#48301E', '#3A2213', '#24150B']
const edges = [
  'M0,20 Q240,0 480,18 T960,14 T1440,20 V40 H0 Z',
  'M0,24 Q300,4 600,22 T1200,16 T1440,22 V40 H0 Z',
  'M0,18 Q360,2 720,20 T1440,16 V40 H0 Z',
  'M0,22 Q240,6 480,20 T960,18 T1440,24 V40 H0 Z'
]

const pebbles: [number, number, number, number][] = [
  [40, 20, 4, 3],
  [190, 30, 5, 3],
  [430, 22, 4, 3],
  [640, 34, 5, 3],
  [900, 24, 4, 3],
  [1180, 30, 5, 3],
  [1380, 22, 4, 3],
  [120, 90, 6, 4],
  [260, 110, 5, 3],
  [480, 96, 6, 4],
  [700, 118, 5, 3],
  [960, 100, 6, 4],
  [1240, 112, 5, 3]
]
const pillars: [number, number, number][] = [
  [70, 16, 170],
  [118, 16, 150],
  [300, 20, 190],
  [350, 20, 190],
  [556, 16, 170],
  [1020, 20, 200],
  [1066, 20, 200],
  [1280, 16, 160]
]

/** Dark gravel right under the asphalt, so the street hands over to the earth without a jump in contrast. */
const RoadBase: React.FC = () => (
  <div className={styles.base} aria-hidden>
    <svg viewBox="0 0 1440 260" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="ug-pillar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2E3238" stopOpacity=".7" />
          <stop offset="1" stopColor="#2E3238" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="ug-root" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3A2616" stopOpacity="0" />
          <stop offset="1" stopColor="#3A2616" stopOpacity=".7" />
        </linearGradient>
      </defs>
      {pillars.map(([x, w, h]) => (
        <rect key={x} x={x} y="0" width={w} height={h} fill="url(#ug-pillar)" />
      ))}
      <path d="M0,54 H1440" stroke="#2E3238" strokeWidth="8" opacity=".6" />
      <rect x="760" y="0" width="30" height="96" fill="#2E3238" opacity=".55" />
      <path
        d="M764,18 h22 M764,40 h22 M764,62 h22 M764,84 h22"
        stroke="#6E7580"
        strokeWidth="2"
        opacity=".6"
      />
      <g fill="#5E5A55">
        {pebbles.map(([cx, cy, rx, ry]) => (
          <ellipse key={`${cx}-${cy}`} cx={cx} cy={cy} rx={rx} ry={ry} />
        ))}
      </g>
      <path
        d="M200,120 q-10,50 10,90 q10,24 -6,50"
        fill="none"
        stroke="url(#ug-root)"
        strokeWidth="3"
      />
      <path
        d="M640,130 q14,50 -8,90 q-8,20 6,40"
        fill="none"
        stroke="url(#ug-root)"
        strokeWidth="3"
      />
      <path
        d="M1200,110 q-16,60 8,110 q8,20 -4,40"
        fill="none"
        stroke="url(#ug-root)"
        strokeWidth="3"
      />
    </svg>
  </div>
)

const Underground: React.FC = () => {
  const { t } = useTranslation()
  const layers = t('underground.layers', { returnObjects: true }) as Layer[]

  return (
    <section id="underground" className={styles.underground}>
      <RoadBase />

      <div style={{ background: strata[0] }}>
        <Reveal className={`container ${styles.header}`}>
          <p className={`mono ${styles.label}`}>{t('underground.label')}</p>
          <h2 className={`display ${styles.title}`}>{t('underground.title')}</h2>
          <p className={styles.lead}>{t('underground.lead')}</p>
        </Reveal>
      </div>

      {layers.map((layer, i) => (
        <React.Fragment key={layer.name}>
          <div className={styles.stratum} style={{ background: strata[i] }}>
            {i === 2 && (
              <svg className={styles.fossil} width="60" height="60" viewBox="0 0 60 60" aria-hidden>
                <path
                  d="M44,30 a14,14 0 1,1 -14,-14 a10,10 0 1,1 10,10 a6,6 0 1,1 -6,-6"
                  fill="none"
                  stroke="rgba(252,235,221,.35)"
                  strokeWidth="2"
                />
              </svg>
            )}
            <Reveal
              className={`container ${styles.row} ${i === layers.length - 1 ? styles.deepest : ''}`}
            >
              <span className={`mono ${styles.depth}`}>{layer.depth}</span>
              <span className={`display ${styles.name}`}>{layer.name}</span>
              <span className={styles.items}>{layer.items}</span>
            </Reveal>
          </div>
          {i < layers.length - 1 && (
            <svg
              className={styles.edge}
              viewBox="0 0 1440 40"
              preserveAspectRatio="none"
              style={{ background: strata[i] }}
              aria-hidden
            >
              <path d={edges[i]} fill={strata[i + 1]} />
            </svg>
          )}
        </React.Fragment>
      ))}
    </section>
  )
}
export default Underground

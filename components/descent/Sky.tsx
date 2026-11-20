import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'next-i18next/pages'
import { FiArrowRight } from 'react-icons/fi'
import Reveal from '../ui/Reveal'
import ChatMock from '../project/ChatMock'
import RmsMock from '../project/RmsMock'
import { Project, projects } from '../../data/projects'
import styles from './Sky.module.scss'

const cloud =
  'M100,0 a40,40 0 0,1 72,-24 a48,48 0 0,1 88,8 a32,32 0 0,1 32,48 h-184 a32,32 0 0,1 -8,-32 Z'

// Each cloud is its own SVG so it keeps its shape at any section size; top is a share of the
// section height, size scales with the viewport width.
const clouds = [
  { top: '34%', size: 'clamp(120px, 16vw, 230px)', slow: false, delay: 0 },
  { top: '54%', size: 'clamp(150px, 21vw, 300px)', slow: true, delay: -20 },
  { top: '73%', size: 'clamp(120px, 16vw, 230px)', slow: false, delay: -12 },
  { top: '89%', size: 'clamp(140px, 19vw, 280px)', slow: true, delay: -40 }
]

const Thumb: React.FC<{ project: Project; alt: string }> = ({ project, alt }) => {
  const { media } = project
  if (media.type === 'rms') return <RmsMock />
  if (media.type === 'chat') return <ChatMock />
  if (media.type === 'phone') {
    return (
      <div className={styles.phoneThumb}>
        <img src={media.poster} alt={alt} loading="lazy" />
      </div>
    )
  }
  return <img src={media.poster} alt={alt} loading="lazy" className={styles.shot} />
}

const Sky: React.FC = () => {
  const { t } = useTranslation()
  const featured = projects.filter((project) => project.featured)
  const others = projects.filter((project) => !project.featured)

  return (
    <section id="sky" className={styles.sky}>
      <div className={styles.clouds} aria-hidden>
        <svg className={styles.nightSky} viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <circle cx="140" cy="110" r="1.4" fill="#fff" opacity=".65" />
          <circle cx="340" cy="190" r="1.1" fill="#fff" opacity=".45" />
          <circle cx="580" cy="95" r="1.5" fill="#fff" opacity=".7" />
          <circle cx="820" cy="160" r="1.2" fill="#fff" opacity=".5" />
          <circle cx="1060" cy="120" r="1.4" fill="#fff" opacity=".6" />
          <circle cx="1310" cy="210" r="1.2" fill="#fff" opacity=".55" />
          <circle cx="220" cy="420" r="1.1" fill="#fff" opacity=".4" />
          <circle cx="960" cy="380" r="1.3" fill="#fff" opacity=".45" />
          <circle cx="1220" cy="480" r="1.1" fill="#fff" opacity=".35" />
          <circle cx="480" cy="560" r="1.2" fill="#fff" opacity=".35" />
        </svg>
        {clouds.map(({ top, size, slow, delay }) => (
          <svg
            key={top}
            className={[styles.cloud, slow ? styles.slow : ''].join(' ')}
            viewBox="90 -64 212 98"
            style={{ top, width: size, animationDelay: `${delay}s` }}
          >
            <path d={cloud} />
          </svg>
        ))}
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.capsuleWrap} aria-hidden>
          <svg className={styles.capsule} width="120" height="170" viewBox="0 0 120 170">
            <path d="M10,60 Q60,-20 110,60 Z" fill="#FF7A2F" />
            <path d="M35,60 Q60,10 85,60 Z" fill="#FFFFFF" opacity=".6" />
            <path
              d="M12,60 L52,120 M108,60 L68,120 M60,60 L60,120"
              stroke="#EEF0FF"
              strokeWidth="1.5"
            />
            <path d="M44,120 h32 l8,34 h-48 Z" fill="#EEF0FF" />
            <circle cx="60" cy="136" r="7" fill="#1D3A7C" />
          </svg>
        </div>

        <Reveal>
          <p className={`mono ${styles.label}`}>{t('sky.label')}</p>
          <h2 className={`display ${styles.title}`}>{t('sky.title')}</h2>
          <p className={styles.lead}>{t('sky.lead')}</p>
        </Reveal>

        <div className={styles.grid}>
          {featured.map((project, i) => {
            const isMock = project.media.type === 'rms' || project.media.type === 'chat'
            const metric = t(`projects.${project.id}.metric`, { defaultValue: '' })
            return (
              <Reveal key={project.id} delay={(i % 2) * 100}>
                <Link href={`/proyectos/${project.slug}`} className={styles.card}>
                  <div className={[styles.media, isMock ? styles.mediaMock : ''].join(' ')}>
                    <Thumb project={project} alt={t(`projects.${project.id}.title`)} />
                  </div>
                  <div className={styles.body}>
                    <div className={styles.metaRow}>
                      <p className={`mono ${styles.category}`}>
                        {t(`projects.${project.id}.category`)}
                      </p>
                      {metric && <span className={`mono ${styles.metricPill}`}>{metric}</span>}
                    </div>
                    <h3 className={`display ${styles.cardTitle}`}>
                      {t(`projects.${project.id}.title`)}
                    </h3>
                    <p className={styles.summary}>{t(`projects.${project.id}.summary`)}</p>
                    <span className={styles.open}>
                      {t('sky.open')} <FiArrowRight aria-hidden />
                    </span>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>

        <Reveal className={styles.more}>
          <p className={`mono ${styles.moreLabel}`}>{t('sky.more')}</p>
          <ul>
            {others.map((project) => (
              <li key={project.id}>
                <Link href={`/proyectos/${project.slug}`}>
                  <span className={`display ${styles.moreTitle}`}>
                    {t(`projects.${project.id}.title`)}
                  </span>
                  <span className={`mono ${styles.moreMeta}`}>
                    {project.company} <FiArrowRight aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
export default Sky

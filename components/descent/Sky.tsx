import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { FiArrowRight } from 'react-icons/fi'
import Reveal from '../ui/Reveal'
import ChatMock from '../project/ChatMock'
import { Project, projects } from '../../data/projects'
import styles from './Sky.module.scss'

const cloud =
  'M100,0 a40,40 0 0,1 72,-24 a48,48 0 0,1 88,8 a32,32 0 0,1 32,48 h-184 a32,32 0 0,1 -8,-32 Z'

const Thumb: React.FC<{ project: Project; alt: string }> = ({ project, alt }) => {
  const { media } = project
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
      <svg className={styles.clouds} viewBox="0 0 1440 1800" preserveAspectRatio="none" aria-hidden>
        <path className={styles.cloud} d={cloud} transform="translate(0 620)" />
        <path
          className={`${styles.cloud} ${styles.slow}`}
          d={cloud}
          transform="translate(200 980) scale(1.3)"
        />
        <path
          className={styles.cloud}
          d={cloud}
          transform="translate(-80 1320)"
          style={{ animationDelay: '-12s' }}
        />
        <path
          className={`${styles.cloud} ${styles.slow}`}
          d={cloud}
          transform="translate(120 1600) scale(1.2)"
          style={{ animationDelay: '-40s' }}
        />
      </svg>

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
          {featured.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 100}>
              <Link href={`/proyectos/${project.slug}`}>
                <a className={styles.card}>
                  <div className={styles.media}>
                    <Thumb project={project} alt={t(`projects.${project.id}.title`)} />
                  </div>
                  <div className={styles.body}>
                    <p className={`mono ${styles.category}`}>
                      {t(`projects.${project.id}.category`)}
                    </p>
                    <h3 className={`display ${styles.cardTitle}`}>
                      {t(`projects.${project.id}.title`)}
                    </h3>
                    <p className={styles.summary}>{t(`projects.${project.id}.summary`)}</p>
                    <span className={styles.open}>
                      {t('sky.open')} <FiArrowRight aria-hidden />
                    </span>
                  </div>
                </a>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.more}>
          <p className={`mono ${styles.moreLabel}`}>{t('sky.more')}</p>
          <ul>
            {others.map((project) => (
              <li key={project.id}>
                <Link href={`/proyectos/${project.slug}`}>
                  <a>
                    <span className={`display ${styles.moreTitle}`}>
                      {t(`projects.${project.id}.title`)}
                    </span>
                    <span className={`mono ${styles.moreMeta}`}>
                      {project.company} <FiArrowRight aria-hidden />
                    </span>
                  </a>
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

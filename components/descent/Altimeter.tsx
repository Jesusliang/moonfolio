import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'next-i18next/pages'
import styles from './Altimeter.module.scss'

export const layers = ['space', 'sky', 'city', 'underground', 'core'] as const
type Layer = (typeof layers)[number]

/** Fixed gauge on the left edge: the needle follows scroll progress, the label marks the current layer. */
const Altimeter: React.FC = () => {
  const { t } = useTranslation()
  const needle = useRef<HTMLSpanElement>(null)
  const [active, setActive] = useState<Layer>('space')

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      if (needle.current) needle.current.style.top = `${progress * 100}%`
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id as Layer)
        })
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )
    layers.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <nav className={styles.gauge} aria-label={t('altimeter.label')}>
      <div className={styles.track}>
        <span ref={needle} className={styles.needle} />
      </div>
      <ol className={styles.labels}>
        {layers.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={id === active ? styles.active : undefined}
              aria-current={id === active ? 'location' : undefined}
            >
              {t(`altimeter.${id}`)}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
export default Altimeter

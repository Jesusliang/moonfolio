import React, { useEffect, useRef } from 'react'
import styles from './CelestialOrb.module.scss'

/**
 * Sun (light mode) and Moon (dark mode) that gently follow the visitor
 * from #space down through #sky, then set and fade out before #city.
 */
const CelestialOrb: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0

    const update = () => {
      raf = 0
      const sky = document.getElementById('sky')
      if (!sky) return

      const skyRect = sky.getBoundingClientRect()
      const vw = window.innerWidth || 1440
      const vh = window.innerHeight || 900
      const scrollY = window.scrollY

      // Mobile: tuck in corner and exit to the right + fade out quickly on scroll so it never blocks text
      if (vw <= 760) {
        const mobileProgress = Math.min(1, Math.max(0, scrollY / 220))
        if (reduced) {
          el.style.transform = 'translate3d(0, 0, 0)'
          el.style.opacity = mobileProgress > 0.5 ? '0' : '1'
          return
        }
        const exitX = mobileProgress * 120
        const exitY = mobileProgress * 18
        const opacity = 1 - mobileProgress
        el.style.transform = `translate3d(${exitX.toFixed(1)}px, ${exitY.toFixed(1)}px, 0)`
        el.style.opacity = opacity.toFixed(3)
        return
      }

      // Desktop: follow from top of page down through #sky, then fade out before #city
      const totalTravel = Math.max(1, sky.offsetTop + sky.offsetHeight - vh * 0.75)
      const progress = Math.min(1, Math.max(0, scrollY / totalTravel))

      // Fade out smoothly as the bottom of #sky rises through the viewport
      const fadeStart = vh * 0.95
      const fadeEnd = vh * 0.3
      let opacity = 1
      if (skyRect.bottom < fadeStart) {
        opacity = Math.max(0, Math.min(1, (skyRect.bottom - fadeEnd) / (fadeStart - fadeEnd)))
      }

      if (reduced) {
        el.style.opacity = scrollY < vh ? '1' : '0'
        el.style.transform = 'translate3d(0, 0, 0)'
        return
      }

      // Gentle downward & slight lateral parallax drift across Space -> Sky
      const driftY = progress * Math.min(200, vh * 0.24)
      const driftX = Math.sin(progress * Math.PI) * -28
      const scale = 1 - progress * 0.08

      el.style.transform = `translate3d(${driftX.toFixed(1)}px, ${driftY.toFixed(1)}px, 0) scale(${scale.toFixed(3)})`
      el.style.opacity = opacity.toFixed(3)
    }

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      if (raf) window.cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div ref={ref} className={styles.wrap} aria-hidden>
      <svg className={styles.orb} viewBox="0 0 320 320">
        <defs>
          <radialGradient id="orb-sun-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD97D" stopOpacity="0.52" />
            <stop offset="48%" stopColor="#FF9E44" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#FF9E44" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="orb-sun-body" cx="38%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FFFBE0" />
            <stop offset="55%" stopColor="#FFD15C" />
            <stop offset="100%" stopColor="#FF8E3C" />
          </radialGradient>
          <radialGradient id="orb-moon-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#B8C8FF" stopOpacity="0.34" />
            <stop offset="55%" stopColor="#9FB4FF" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#9FB4FF" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="orb-moon-body" cx="35%" cy="32%" r="68%">
            <stop offset="0%" stopColor="#FFFDF5" />
            <stop offset="65%" stopColor="#E9E4D4" />
            <stop offset="100%" stopColor="#BFB7A2" />
          </radialGradient>
        </defs>

        <g className={styles.sunGroup}>
          <circle cx="160" cy="160" r="150" fill="url(#orb-sun-halo)" />
          <circle cx="160" cy="160" r="48" fill="url(#orb-sun-body)" />
        </g>

        <g className={styles.moonGroup}>
          <circle cx="160" cy="160" r="134" fill="url(#orb-moon-halo)" />
          <circle cx="160" cy="160" r="46" fill="url(#orb-moon-body)" />
          <circle cx="145" cy="148" r="8" fill="#C9C1AD" opacity=".65" />
          <circle cx="176" cy="176" r="11" fill="#C9C1AD" opacity=".55" />
          <circle cx="164" cy="142" r="4.5" fill="#C9C1AD" opacity=".45" />
        </g>
      </svg>
    </div>
  )
}

export default CelestialOrb

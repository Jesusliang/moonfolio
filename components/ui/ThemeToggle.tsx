import React, { useEffect, useRef, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import styles from './ThemeToggle.module.scss'

export type Theme = 'light' | 'dark'

const ThemeToggle: React.FC<{ className?: string }> = ({ className }) => {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    const current = (document.documentElement.dataset.theme as Theme) || 'light'
    setTheme(current)
    setMounted(true)
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current)
    }
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    const root = document.documentElement

    if (timerRef.current) window.clearTimeout(timerRef.current)
    root.dataset.transition = next === 'dark' ? 'to-night' : 'to-day'
    root.dataset.theme = next
    setTheme(next)

    timerRef.current = window.setTimeout(() => {
      delete root.dataset.transition
    }, 1250)

    try {
      localStorage.setItem('theme', next)
    } catch {
      // ignore storage errors
    }
  }

  const isDark = mounted && theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggle}
      className={[styles.toggle, className].filter(Boolean).join(' ')}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      title={isDark ? 'Modo claro (día)' : 'Modo oscuro (noche)'}
    >
      <span className={[styles.icon, isDark ? styles.isDark : ''].join(' ')}>
        {isDark ? <FiSun aria-hidden /> : <FiMoon aria-hidden />}
      </span>
    </button>
  )
}

export default ThemeToggle

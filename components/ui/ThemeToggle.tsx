import React, { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import styles from './ThemeToggle.module.scss'

export type Theme = 'light' | 'dark'

const ThemeToggle: React.FC<{ className?: string }> = ({ className }) => {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const current = (document.documentElement.dataset.theme as Theme) || 'light'
    setTheme(current)
    setMounted(true)
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.dataset.theme = next
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
      {isDark ? <FiSun aria-hidden /> : <FiMoon aria-hidden />}
    </button>
  )
}

export default ThemeToggle

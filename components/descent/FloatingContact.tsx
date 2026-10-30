import React, { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next/pages'
import { FiMessageCircle } from 'react-icons/fi'
import styles from './FloatingContact.module.scss'

/** Shortcut to the contact form once the hero's own button has scrolled away; hides again at the core. */
const FloatingContact: React.FC = () => {
  const { t } = useTranslation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const space = document.getElementById('space')
    const core = document.getElementById('core')
    if (!space || !core) return
    const inView = { space: true, core: false }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        inView[entry.target.id as 'space' | 'core'] = entry.isIntersecting
      })
      setVisible(!inView.space && !inView.core)
    })
    observer.observe(space)
    observer.observe(core)
    return () => observer.disconnect()
  }, [])

  return (
    <a
      href="#core"
      className={[styles.button, visible ? styles.visible : ''].join(' ')}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
    >
      <FiMessageCircle aria-hidden />
      {t('space.ctaContact')}
    </a>
  )
}
export default FloatingContact

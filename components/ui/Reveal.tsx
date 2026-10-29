import React, { useEffect, useRef, useState } from 'react'

interface Props {
  as?: keyof React.JSX.IntrinsicElements
  className?: string
  delay?: number
  children: React.ReactNode
}

/** Fades its children in the first time they enter the viewport. */
const Reveal: React.FC<Props> = ({ as: Tag = 'div', className, delay = 0, children }) => {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const Component = Tag as React.ElementType
  return (
    <Component
      ref={ref}
      className={['reveal', visible ? 'isVisible' : '', className].filter(Boolean).join(' ')}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Component>
  )
}
export default Reveal

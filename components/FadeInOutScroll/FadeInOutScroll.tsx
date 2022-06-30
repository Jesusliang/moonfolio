import React, { useEffect, useRef, useState } from 'react'
interface Props {}
const FadeInOutScroll: React.FC<Props> = (props) => {
  const [offsetY, setOffsetY] = useState(0)
  const fadeInOutEl = useRef<HTMLDivElement>(null)
  const windowInnerHeight = useRef(0)

  const handleScroll = () => {
    setOffsetY(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    windowInnerHeight.current = window.innerHeight
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      ref={fadeInOutEl}
      style={{
        opacity: `${
          offsetY +
          windowInnerHeight.current -
          (fadeInOutEl.current?.offsetTop! + windowInnerHeight.current * 0.1)
        }%`
      }}
    >
      {props.children}
    </div>
  )
}
export default FadeInOutScroll

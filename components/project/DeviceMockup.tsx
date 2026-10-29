import React, { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { FiPlay } from 'react-icons/fi'
import ChatMock from './ChatMock'
import { ProjectMedia } from '../../data/projects'
import styles from './DeviceMockup.module.scss'

interface Props {
  media: ProjectMedia
  title: string
}

/** Browser or phone frame around a screenshot; the demo video only loads once the visitor asks for it. */
const DeviceMockup: React.FC<Props> = ({ media, title }) => {
  const { t } = useTranslation()
  const [playing, setPlaying] = useState(false)

  if (media.type === 'chat') {
    return (
      <div className={styles.browser}>
        <div className={styles.bar} aria-hidden>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.screen}>
          <ChatMock large />
        </div>
      </div>
    )
  }

  const screen =
    playing && media.video ? (
      <video
        src={media.video}
        poster={media.poster}
        className={styles.shot}
        controls
        autoPlay
        playsInline
      />
    ) : (
      <>
        <img src={media.poster} alt={title} className={styles.shot} />
        {media.video && (
          <button type="button" className={styles.play} onClick={() => setPlaying(true)}>
            <FiPlay aria-hidden />
            {t('project.play')}
          </button>
        )}
      </>
    )

  if (media.type === 'phone') {
    return (
      <div className={styles.phone}>
        <div className={`${styles.screen} ${styles.phoneScreen}`}>{screen}</div>
      </div>
    )
  }

  return (
    <div className={styles.browser}>
      <div className={styles.bar} aria-hidden>
        <span />
        <span />
        <span />
      </div>
      <div className={styles.screen}>{screen}</div>
    </div>
  )
}
export default DeviceMockup

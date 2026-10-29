import React from 'react'
import { useTranslation } from 'next-i18next/pages'
import styles from './ChatMock.module.scss'

/** Illustrative conversation for the AI platform, which has no public screenshots. */
const ChatMock: React.FC<{ large?: boolean }> = ({ large }) => {
  const { t } = useTranslation()
  return (
    <div className={[styles.chat, large ? styles.large : ''].join(' ')}>
      <p className={styles.guest}>{t('aiChat.guest')}</p>
      <p className={styles.agent}>{t('aiChat.reply')}</p>
      <p className={`mono ${styles.meta}`}>{t('aiChat.meta')}</p>
    </div>
  )
}
export default ChatMock

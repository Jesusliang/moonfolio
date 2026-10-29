import React from 'react'
import styles from './Tag.module.scss'

const TagList: React.FC<{ tags: string[]; className?: string }> = ({ tags, className }) => (
  <ul className={[styles.list, className].filter(Boolean).join(' ')}>
    {tags.map((tag) => (
      <li key={tag} className={styles.tag}>
        {tag}
      </li>
    ))}
  </ul>
)
export default TagList

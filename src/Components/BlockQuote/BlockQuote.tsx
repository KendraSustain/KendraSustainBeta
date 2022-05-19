import React from 'react'
import styles from './BlockQuote.module.scss'
interface PropType {
  content: React.ReactNode
  writer: React.ReactNode
}
const BlockQuote: React.FC<PropType> = ({ content, writer }) => {
  return (
    <section className={styles.mainContainer}>
      <blockquote>{content}</blockquote>
      <cite>- {writer}</cite>
    </section>
  )
}

export default BlockQuote

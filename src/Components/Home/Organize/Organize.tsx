import React from 'react'
import styles from './Organize.module.css'
import { BlockQuote } from 'Components'
interface PropType {
  contents: {
    content: string
    contentWriter: string
  }[]
}
const Organize: React.FC<PropType> = ({
  contents = [
    {
      content:
        'We are committed to make the circular economy a feasible model for a genuinely sustainable environment.',
      contentWriter: 'Covestro',
    },
    {
      content:
        'Our goal is to be 100% Carbon Neutral for our supply chains and products by 2030.',
      contentWriter: 'Apple',
    },
  ],
}) => {
  return (
    <section className={styles.mainContainer}>
      {contents.map((item, pos) => (
        <BlockQuote
          key={pos}
          content={item.content}
          writer={item.contentWriter}
        />
      ))}
    </section>
  )
}

export default Organize

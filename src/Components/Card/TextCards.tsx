import React from 'react'
import style from './text.module.scss'
interface PropsType {
  cards: {
    title: string
    data: string | number
  }[]
  grid?: number
}
const TextCards: React.FC<PropsType> = ({ cards = [], grid = 3 }) => {
  return (
    <>
      <div
        className={style.container}
        style={{
          gridTemplateColumns: `repeat(${grid}, 1fr)`,
        }}
      >
        {cards.map((item, pos) => (
          <div className={style.card} key={pos}>
            <span>{item.title}</span>
            <p> {item.data} </p>
          </div>
        ))}
      </div>
    </>
  )
}
export default TextCards

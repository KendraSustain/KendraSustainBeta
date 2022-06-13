import React from 'react'
import style from './Forcast.module.scss'
export default function Forcast() {
  const data = [
    {
      day: 'Today',
      low: 16,
      hight: 29,
    },
    {
      day: 'Friday',
      low: 16,
      hight: 29,
    },
    {
      day: 'Saturday',
      low: 16,
      hight: 29,
    },
    {
      day: 'Sunday',
      low: 16,
      hight: 29,
    },
    {
      day: 'Monday',
      low: 16,
      hight: 29,
    },
  ]
  return (
    <div className={style.container}>
      <div className={style.heading}>
        <h3>One Week Forcast</h3>
        <i className="bx bx-dots-horizontal-rounded"></i>
      </div>
      <div className={style.data}>
        {data.map((x, i) => (
          <div>
            <p>{x.day}</p>
            <div>
              <p>{x.low}&deg;</p>
              <div className={style.progress}></div>
              <p>{x.hight}&deg;</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

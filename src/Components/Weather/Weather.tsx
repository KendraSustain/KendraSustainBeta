import React from 'react'
import style from './Weather.module.scss'
export default function Weather() {
  return (
    <div className={style.container}>
      <img
        src="https://pngimg.com/uploads/sun/sun_PNG13450.png"
        alt="Sun"
        className={style.img}
      />
      <strong>27°C</strong>
      <p>
        It's a <strong>Sunny day </strong>
        Today
      </p>
    </div>
  )
}

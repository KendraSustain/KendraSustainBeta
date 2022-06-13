import React from 'react'
import Tick from './Tick.svg'
import style from './Tour.module.scss'
const Tour = () => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <img src={Tick} alt="" />
        <p>Your account successfully created</p>
      </div>
      <button>Take me Tour</button>
    </div>
  )
}

export default Tour

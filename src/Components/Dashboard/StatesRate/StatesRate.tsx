import React from 'react'
import style from './StatsRate.module.scss'
import Stats from './Stats.svg'
const StatesRate = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <h2>Stats Rate</h2>
        <p className={style.persantage}>+10%</p>
        <p className={style.today}>Today Carbon Emissions</p>
        <h3>14,102 kgCO2/KwH</h3>
      </div>
      <div className={style.right}>
        <img src={Stats} alt="" />
      </div>
    </div>
  )
}

export default StatesRate

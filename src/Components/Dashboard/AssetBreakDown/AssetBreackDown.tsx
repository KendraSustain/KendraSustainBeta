import React from 'react'
import style from './AssetbreackDown.module.scss'
export default function AssetBreackDown() {
  const data = [
    {
      name: 'Lorum ipsum',
      date: '19 July 2021',
      value: 14102,
    },
    {
      name: 'Lorum ipsum',
      date: '19 July 2021',
      value: 14102,
    },
    {
      name: 'Lorum ipsum',
      date: '19 July 2021',
      value: 14102,
    },
  ]
  return (
    <div className={style.container}>
      <div className={style.heading}>
        <h3>Asset Breakdown</h3>
        <i className="bx bx-dots-horizontal-rounded"></i>
      </div>

      <div className={style.data}>
        {data.map((x, i) => (
          <>
            {i === 0 ? null : <hr />}

            <div key={i}>
              <div>
                <p className={style.name}>{x.name}</p>
                <p className={style.date}>{x.date}</p>
              </div>
              <p className={style.value}>{x.value} kgCo2 / KwH</p>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

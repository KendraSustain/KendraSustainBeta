import React, { FC, useEffect, useState } from 'react'
import style from './TotalCE.module.scss'
import ProgressBar from 'react-customizable-progressbar'
import CircleProgressBar from './MyProgress'
import { Round } from 'Helper'
interface PropType {
  scopeOneData: number[]
  scopeTwoData: number[]
  scopeThreeData: number[]
}
const TotalCE: FC<PropType> = ({
  scopeOneData = [],
  scopeTwoData = [],
  scopeThreeData = [],
}) => {
  const [CE, setCE] = useState<number>(0)
  useEffect(() => {
    setCE(
      Round(
        scopeOneData.reduce((a, b) => a + b, 0) +
          scopeTwoData.reduce((a, b) => a + b, 0) +
          scopeThreeData.reduce((a, b) => a + b, 0),
      ),
    )
  }, [scopeOneData, scopeThreeData, scopeTwoData])

  return (
    <div className={style.container}>
      <h3>Total Carbon Emission</h3>
      <p>
        Stearn Electric CO LTD
        <br />
        <span>20% increase from last week</span>
      </p>
      <h1>{CE} kgCO2/KwH</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <svg
          style={{
            position: 'absolute',
          }}
        >
          <linearGradient id="linearColors" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="rgba(161,81,168,1)"></stop>
            <stop offset="100%" stop-color="rgba(161,81,168,0)"></stop>
          </linearGradient>
        </svg>
        <ProgressBar
          progress={56}
          radius={60}
          pointerStrokeWidth={6}
          trackStrokeWidth={5}
          strokeWidth={5}
          pointerRadius={2}
          strokeColor={'url(#linearColors)'}
          pointerStrokeColor={'#A151A8'}
          className={style.progress}
        >
          <p
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: ' translate(-50%, -50%)',
            }}
          >
            CO2
          </p>
        </ProgressBar>
      </div>
    </div>
  )
}
export default TotalCE

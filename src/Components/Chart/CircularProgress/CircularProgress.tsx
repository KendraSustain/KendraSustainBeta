import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
interface PropType {
  value?: number
  color?: string
  width?: number | string
  text?: string
}
const CircularProgress: React.FC<PropType> = ({
  value = 10,
  color = '#EEEFF3',
  width = 200,
  text,
}) => {
  const percentage = value

  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          height: width,
          width: width,
        }}
      >
        <CircularProgressbar
          value={percentage}
          text={text}
          styles={buildStyles({
            pathColor: color,
            textColor: color,
          })}
          strokeWidth={15}
        />
      </div>
    </div>
  )
}
export default CircularProgress

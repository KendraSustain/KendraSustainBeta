import React from 'react'
import { Typography, Grid } from '@mui/material'
import ColorBall from './ColorBall'
const Data = [
  {
    name: 'Scope 3',
    children: ['Emission', 'Emission', 'Emission'],
    color: '#3FC27D',
  },
  {
    name: 'Scope 2',
    children: ['Emission', 'Emission', 'Emission'],
    color: '#FF8B4B',
  },
  {
    name: 'Scope 1',
    children: ['Emission', 'Emission', 'Emission'],
    color: '#4E69BC',
  },
]
export default function Options() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 5,
        }}
      >
        {Data.map((item, pos) => (
          <Grid key={pos}>
            <Typography fontWeight={400} fontSize={25}>
              {item.name}
            </Typography>
            {item.children.map((i, j) => (
              <ColorBall
                lable={i + ' ' + (j + 1)}
                key={j}
                bgColor={item.color}
              />
            ))}
          </Grid>
        ))}
      </div>
    </>
  )
}

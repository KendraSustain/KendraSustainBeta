import React from 'react'
import { Grid } from '@mui/material'
export default function ColorBall({ bgColor, lable }) {
  return (
    <>
      <Grid
        style={{
          display: 'flex',
        }}
        alignItems={'center'}
      >
        <div
          style={{
            height: '15px',
            width: '15px',
            backgroundColor: bgColor,
            borderRadius: '50%',
            marginRight: '5px',
          }}
        ></div>
        {lable}
      </Grid>
    </>
  )
}

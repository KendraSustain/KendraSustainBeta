import React from 'react'
import Lable from './Lable'
import Grid from '@mui/material/Grid'
import Total from './Total'
import Card1 from './Card1'

function Dashboard() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Lable />
        </Grid>
        <Grid item xs={4}>
          <Card1 />
        </Grid>
        <Grid item xs={4}>
          <Card1 color={'#F5651F'} scope={'Scope 2'} />
        </Grid>
        <Grid item xs={4}>
          <Card1 color={'#01A14B'} scope={'Scope 3'} />
        </Grid>
        <Grid item xs={12}>
          <Total />
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard

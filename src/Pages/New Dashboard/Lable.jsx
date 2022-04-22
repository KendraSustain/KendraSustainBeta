import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { PieChart } from '../../Components'
import Pie from './Pie'

export default function Lable() {
  return (
    <>
      <Box
        sx={{
          bgcolor: 'white',
          p: 2,
          border: 'none',
          borderRadius: 1,
        }}
      >
        <Grid container alignItems={'center'} justifyContent={'space-evenly'}>
          <Grid item xs={4}>
            <Typography fontWeight={500} fontSize={25}>
              Total Carbon Emission
            </Typography>
            <Typography variant="p" fontSize={25}>
              Stream Electric CO LTD
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography fontSize={35} fontWeight={600} letterSpacing={2}>
              51,650 kgCO<sub>2</sub>/KwH
            </Typography>
          </Grid>
          <Grid justifyContent={'center'} item xs={1.2}>
            <Pie />
            {/* <PieChart /> */}
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

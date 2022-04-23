import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { PieChart } from '../../Components'
import Pie from './Pie'

export default function Lable({
  emission = 516,
  company = 'Stream Electric CO LTD',
  scope1,
  scope2,
  scope3,
}) {
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
              {company}
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography fontSize={35} fontWeight={600} letterSpacing={2}>
              {emission} kgCO<sub>2</sub>/KwH
            </Typography>
          </Grid>
          <Grid justifyContent={'center'} item xs={1.2}>
            <PieChart
              data={[
                {
                  name: 'Scope1',
                  value: scope1,
                  backgroundColor: 'red',
                  itemStyle: {
                    color: '#4E69BC',
                  },
                },
                {
                  name: 'Scope2',
                  value: scope2,
                  itemStyle: {
                    color: '#FF8B4B',
                  },
                },
                {
                  name: 'Scope3',
                  value: scope3,
                  itemStyle: {
                    color: '#3FC27D',
                  },
                },
              ]}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

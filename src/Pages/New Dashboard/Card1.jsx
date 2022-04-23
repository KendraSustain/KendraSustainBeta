import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { Info, PieChart } from '../../Components'

export default function Card1({
  title = 'Scope 1 Emission',
  scope,
  emission = 14102,
  parsantage = 27,
  description = 'Scope 1 emission includes the direct GHG that occur from sources that are controlled or owned by an organization.',
  color = '#21409A',
  scope1,
  scope2,
  scope3,
}) {
  return (
    <Box
      sx={{
        bgcolor: 'white',
        p: 2,
        border: 'none',
        borderRadius: 1,
      }}
    >
      <Grid container justifyContent={'space-evenly'}>
        <Grid item xs={6} marginBottom={3}>
          <Typography fontSize={20}>
            {scope ? scope + ' Emission' : title}
          </Typography>
          <Typography fontWeight={600} color={color}>
            <span
              style={{
                fontSize: 25,
              }}
            >
              {emission}
            </span>{' '}
            <p>
              kgCO<sub>2/KwH</sub>
            </p>
          </Typography>
          <Typography fontWeight={600} fontSize={35} color={color}>
            {parsantage} %
          </Typography>
        </Grid>
        <Grid xs={6}>
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
            // options={{
            //   legend: { show: false },
            // }}
          />
        </Grid>
        <Grid xs={12}>
          <Info lable={description} />
        </Grid>
      </Grid>
    </Box>
  )
}

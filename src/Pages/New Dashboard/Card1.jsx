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
            <span>
              kgCO<sub>2/KwH</sub>
            </span>
          </Typography>
          <Typography fontWeight={600} fontSize={35} color={color}>
            {parsantage} %
          </Typography>
        </Grid>
        <Grid xs={6}>
          <PieChart
            data={[
              { value: 735, name: 'C' },
              { value: 510, name: 'D' },
              { value: 434, name: 'B' },
              { value: 335, name: 'A' },
            ]}
            options={{
              legend: { show: false },
            }}
          />
        </Grid>
        <Grid xs={12}>
          <Info lable={description} />
        </Grid>
      </Grid>
    </Box>
  )
}

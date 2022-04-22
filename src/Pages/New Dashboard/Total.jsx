import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import BarChart from '../../Components/Chart'
import Options from './Options'

export default function Total() {
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
        {/* <Typography fontSize={30} fontWeight={500}>
          Total Emissions by scope
        </Typography> */}
        <Grid container alignItems={'center'} spacing={4}>
          <Grid item xs={10}>
            <BarChart
              x_items={['Jan', 'Feb', 'Mar', 'May', 'Jun']}
              label={' Total Emissions by scope'}
              series={[
                {
                  data: [2.5, 3, 2.5, 5, 4],
                  type: 'bar',
                  stack: 'x',
                  color: 'rgb(71, 96, 171)',
                  barMaxWidth: 40,
                },

                {
                  data: [2.5, 3, 2.5, 5, 4],
                  type: 'bar',
                  stack: 'x',
                  color: 'rgb(247, 127, 69)',
                  barMaxWidth: 40,
                },

                {
                  data: [2.5, 3, 2.5, 5, 4],
                  type: 'bar',
                  stack: 'x',
                  color: 'rgb(44, 177, 106)',
                  barMaxWidth: 40,
                  itemStyle: { barBorderRadius: [5, 5, 0, 0] },
                },
              ]}
            />
          </Grid>
          <Grid item xs={2}>
            <Options />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

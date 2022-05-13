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
        <div
          style={{
            // background: 'red',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <div>
            <Typography fontWeight={500} fontSize={25}>
              Total Carbon Emissions
            </Typography>
            <Typography variant="p" fontSize={25}>
              {company}
            </Typography>
          </div>
          <div>
            <Typography
              fontSize={35}
              fontWeight={600}
              letterSpacing={2}
              color={'#A151A8'}
            >
              {emission} kgCO<sub>2</sub>/KwH
            </Typography>
          </div>
          <div>
            <Pie value={66} color={'#A151A8'} width={80} text={'CO2'} />
          </div>
        </div>
      </Box>
    </>
  )
}

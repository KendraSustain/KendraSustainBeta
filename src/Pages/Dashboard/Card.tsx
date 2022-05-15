import { Box } from '@material-ui/core'
import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Info } from '../../Components'
import Pie from './Pie'
interface PropType {
  scope: number
  emission: number
  percentage: number
  color: string
  description: string
}
const Card: React.FC<PropType> = ({
  scope,
  emission,
  percentage,
  color,
  description,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: ' var(--white)',
        height: '100%',
        borderRadius: 10,
        // boxShadow: '4px 4px 8px #0000001f',
      }}
    >
      <Grid container justifyContent={'space-evenly'}>
        <Grid item xs={8}>
          <Box
            style={{
              padding: 20,
            }}
          >
            <h1
              style={{
                fontSize: 20,
              }}
            >
              Scope {scope} Emissions
            </h1>
            <Typography fontWeight={600} color={color}>
              <p
                style={{
                  fontSize: 30,
                }}
              >
                {emission} kgCO<sub>2/KwH</sub>
              </p>
            </Typography>
            <Typography fontWeight={600} fontSize={20} color={color}>
              {percentage} %
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Pie width={120} color={color} value={percentage} />
        </Grid>
      </Grid>
      <Info lable={description} scope={scope} />
    </div>
  )
}
export default Card

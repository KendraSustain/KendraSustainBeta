import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BarChart from '../../Components/Chart'
import Options from './Options'
import JsonData from '../Measure/Assets/NiukData.json'
import ColorBall from './ColorBall'
export default function Total({ scope1, scope2, scope3 }) {
  const [Data, setData] = useState([])
  const displayData = [
    {
      name: 'Scope 3',
      children: ['Emission'],
      color: '#3FC27D',
    },
    {
      name: 'Scope 2',
      children: ['Asset 1', 'Asset 2'],
      color: '#FF8B4B',
    },
    {
      name: 'Scope 1',
      children: ['Emission'],
      color: '#4E69BC',
    },
  ]
  const getData = (date, field, dataset = []) => {
    const temp = []
    if (!dataset.length) return
    for (let i = 1; i <= 12; i++) {
      let data = dataset.map((e) => {
        const str = e[date]
        // eslint-disable-next-line no-unused-vars
        const [day, month, year] =
          dataset === Data ? str.split('/') : str.split('-')
        // eslint-disable-next-line eqeqeq
        if (i == month) return e
        return null
      })
      data = data.filter((x) => x !== null)
      data = data.map((e) => e[field])
      data = data.reduce((a, b) => a + b, 0)
      data = Math.round(data * 100) / 100
      temp.push(data)
    }
    return temp
  }
  useEffect(() => {
    let data = JsonData.flat()
    data = data.map((e) => e['Data']).flat()
    setData(data)
    console.log(scope2)
  }, [])

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
              x_items={[
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'July',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
              ]}
              label={' Total Emissions by scope'}
              series={[
                {
                  data: getData('Transaction Date/Time', 'CO2 Emission', Data),
                  type: 'bar',
                  stack: 'x',
                  color: 'rgb(71, 96, 171)',
                  barMaxWidth: 40,
                },

                {
                  data: getData('Date', 'Carbon Emission', scope2[0]),
                  type: 'bar',
                  stack: 'x',
                  color: 'rgb(247, 127, 69)',
                  barMaxWidth: 40,
                },

                {
                  data: getData('Date', 'Carbon Emission', scope2[1]),

                  type: 'bar',
                  stack: 'x',
                  color: '#F9A67D',
                  barMaxWidth: 40,
                  itemStyle: { barBorderRadius: [5, 5, 0, 0] },
                },
              ]}
            />
          </Grid>
          <Grid item xs={2}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 5,
              }}
            >
              {displayData.map((item, pos) => (
                <Grid key={pos}>
                  <Typography fontWeight={400} fontSize={25}>
                    {item.name}
                  </Typography>
                  {item.children.map((i, j) => (
                    <ColorBall lable={i} key={j} bgColor={item.color} />
                  ))}
                </Grid>
              ))}
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

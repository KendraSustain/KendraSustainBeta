import { Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { BarChart } from 'Components'
import ColorBall from './ColorBall'
import * as echarts from 'echarts'
export default function Total({ scope1, scope2, scope3 }) {
  const [Data, setData] = useState([])
  const [selected, setSelected] = useState('')
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
  const labels = [
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
  ]
  const getData = (date, field, dataset = []) => {
    const temp = []
    if (!dataset.length) return
    for (let i = 1; i <= 12; i++) {
      let data = dataset.flat().map((e) => {
        const str = e[date]
        // const [, month] = dataset === Data ? str.split('/') : str.split('-')
        const [, month] = str.split(/[-/]+/)
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
    let data = scope1.flat()
    data = data.map((e) => e['Data']).flat()
    setData(data)
  }, [])

  return (
    <>
      <div
        style={{
          padding: 5,
          border: 'none',
          borderRadius: 1,
        }}
      >
        <Typography fontSize={20} fontWeight={500}>
          Total Emissions by scope
        </Typography>
        <Grid container alignItems={'center'} spacing={4}>
          <Grid item xs={9}>
            <BarChart
              legend={{ data: ['Scope 1', 'Scope 2'] }}
              x_items={labels}
              series={[
                {
                  name: 'Scope 1',
                  type: 'line',
                  stack: 'Total',
                  smooth: true,
                  lineStyle: {
                    width: 2,
                  },
                  showSymbol: false,
                  areaStyle: {
                    opacity: 0.3,
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                      {
                        offset: 1,
                        color: '#FBBC05',
                      },
                      {
                        offset: 0.7,
                        color: '#FBBC05',
                      },

                      {
                        offset: 0.5,
                        color: '#00B0FF',
                      },
                      {
                        offset: 0.3,
                        color: '#35DC94',
                      },
                      {
                        offset: 0,
                        color: '#35DC94',
                      },
                    ]),
                  },

                  data: getData('Transaction Date/Time', 'CO2 Emission', Data),
                },
                {
                  name: 'Scope 2',
                  type: 'line',
                  stack: 'Total',
                  smooth: true,
                  lineStyle: {
                    width: 2,
                    color: '#3bcdba',
                  },
                  showSymbol: false,
                  areaStyle: {
                    opacity: 0.3,
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                      {
                        offset: 1,
                        color: '#FBBC05',
                      },
                      {
                        offset: 0.7,
                        color: '#FBBC05',
                      },

                      {
                        offset: 0.5,
                        color: '#00B0FF',
                      },
                      {
                        offset: 0.3,
                        color: '#35DC94',
                      },
                      {
                        offset: 0,
                        color: '#35DC94',
                      },
                    ]),
                  },

                  data: getData('Date', 'Carbon Emission', scope2),
                },
              ]}
            />
          </Grid>
          <Grid
            item
            xs={3}
            style={{
              // background: 'red',
              padding: 0,
              height: '100%',
            }}
          >
            {displayData.map((x, i) => (
              <div
                style={{
                  borderRadius: 10,
                  position: 'relative',
                  fontSize: 20,
                  display: 'flex',
                  alignItems: 'center',
                  maxWidth: 160,
                  justifyContent: 'space-evenly',
                  cursor: 'pointer',
                  marginBottom: 20,
                }}
                onClick={() =>
                  x.name === selected ? setSelected('') : setSelected(x.name)
                }
              >
                <ColorBall bgColor={x.color} />
                {x.name}
                <i
                  className={`bx bx-chevron-${
                    selected === x.name ? 'up' : 'down'
                  }`}
                ></i>
                <div
                  style={{
                    position: 'absolute',
                    top: 40,
                    left: 0,
                    visibility: selected === x.name ? '' : 'hidden',
                    borderRadius: 26,
                    backgroundColor: 'white',
                    zIndex: 3,
                    width: 272,
                    minHeight: 50,
                    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                    padding: '10px 20px',
                  }}
                >
                  <h4
                    style={{
                      marginBottom: 5,
                    }}
                  >
                    {x.name}
                  </h4>
                  {x.children.map((y, j) => (
                    <div
                      style={{
                        display: 'flex',
                      }}
                      key={j}
                    >
                      <ColorBall bgColor={x.color} />
                      <p
                        style={{
                          marginLeft: 5,
                        }}
                      >
                        {y}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Grid>
        </Grid>
      </div>
    </>
  )
}

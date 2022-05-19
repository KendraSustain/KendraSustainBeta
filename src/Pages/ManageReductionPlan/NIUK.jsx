import React, { useState } from 'react'
import { Grid, Button } from '@material-ui/core'
import { CardChart, TextCard } from '../../Components'
import TempData from '../Measure/Assets/NiukData.json'
import options from '../Measure/DataMoitor/Options.json'
export default function NIUK() {
  // const temp = Data.map((item) => item["CO2 Emission"]);
  const Data = { 'On-Road Vehicles': TempData }

  const [optionsSelected, setOptionsSelected] = useState(
    options[0].children[0].name,
  )
  let temp = []
  temp = Data[optionsSelected]
    ? Data[optionsSelected].map((item) =>
        item.Data.map((i) => i['CO2 Emission']),
      )
    : []
  temp = temp.flat()

  const content = [
    {
      title: 'Maximum Carbon Emission',
      data: Math.max(...temp) + ' kgCO2/KWh',
    },
    {
      title: 'Total  Carbon Emission',
      data:
        Math.round(temp.reduce((a, b) => a + b, 0) * 100) / 100 + ' kgCO2/KWh',
    },
    {
      title: 'Minimum Carbon Emission',
      data: Math.min(...temp) + ' kgCO2/KWh',
    },
  ]
  return (
    <div>
      <Grid container spacing={1}>
        <Grid
          item
          xs={12}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 10,
            position: 'relative',
          }}
        >
          {options.map((x, i) => (
            <div
              key={i}
              style={{
                flexGrow: 1,
                borderRadius: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 20,
                maxHeight: 160,
                overflowY: 'scroll',
                paddingBottom: 10,
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              }}
            >
              <b
                style={{
                  width: '100%',
                  background: 'white',
                  textAlign: 'center',
                  position: 'sticky',
                  top: 0,
                  zIndex: 2,
                }}
              >
                {x.name}
              </b>
              {x.children.map((y, j) => (
                <Button
                  variant={
                    optionsSelected === y.name ? 'contained' : 'outlined'
                  }
                  color={'primary'}
                  key={j}
                  onClick={() => setOptionsSelected(y.name)}
                >
                  {y.name}
                </Button>
              ))}
            </div>
          ))}
        </Grid>
        <Grid item xs={12} style={{ textAlign: 'center', padding: '10px' }}>
          <h2>{optionsSelected}</h2>
        </Grid>
      </Grid>

      {Data[optionsSelected] ? (
        <>
          <TextCard cards={content} />
          <Grid container spacing={2}>
            {Data[optionsSelected].map((item) => (
              <>
                <Grid item xs={12}>
                  <CardChart
                    showYear={true}
                    x_items={item.Data.map((d) => d['Transaction Date/Time'])}
                    y_item={temp}
                    type="line"
                    label={
                      'Carbon Emission (2021) of Vehicle Reg. No: ' +
                      item['Vehicle Reg']
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <CardChart
                    showYear={true}
                    x_items={item.Data.map((d) => d['Transaction Date/Time'])}
                    y_item={temp}
                    type="bar"
                    label={
                      'Carbon Emission (2021) of Vehicle Reg. No: ' +
                      item['Vehicle Reg']
                    }
                  />
                </Grid>
              </>
            ))}
          </Grid>
        </>
      ) : (
        <Grid
          item
          xs={12}
          style={{
            textAlign: 'center',
            paddingTop: '20px',
          }}
        >
          No data to be displayed
        </Grid>
      )}
    </div>
  )
}

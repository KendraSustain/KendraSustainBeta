import { Grid } from '@material-ui/core'
import React, { useContext } from 'react'
import Data from '../Measure/Assets/NiukData.json'
import { CardChart, TextCard } from '../../Components'
import style from './index.module.css'
import Scope2 from './Scope2'
import { Context } from '../../Context'
import { Round } from 'Helper'
export default function NIUK_sum() {
  const { scopeOneData, scopeTwoData } = useContext(Context)

  let scopeOne = scopeOneData.map((item) =>
    item.Data.map((i) => i['CO2 Emission']),
  )

  scopeOne = scopeOne.flat()
  let scopeTwo = scopeTwoData.flat()

  const content = [
    {
      title: 'Maximum Carbon Emission for scope 1',
      data: Math.max(...scopeOne) + ' kgCO2/KwH',
    },
    {
      title: 'Avrage Carbon Emission for scope 1',
      data: (Math.min(...scopeOne) + Math.max(...scopeOne)) / 2 + ' kgCO2/KwH',
    },
    {
      title: 'Minimum Carbon Emission for scope 1',
      data: Math.max(...scopeOne) + ' kgCO2/KwH',
    },

    {
      title: 'Maximum Carbon Emission for scope 2',
      data:
        Round(Math.max(...scopeTwo.map((i) => i['Carbon Emission']))) +
        ' kgCO2/KwH',
    },
    {
      title: 'Avrage Carbon Emission for scope 2',
      data:
        Round(
          (Math.min(...scopeTwo.map((i) => i['Carbon Emission'])) +
            Math.max(...scopeTwo.map((i) => i['Carbon Emission']))) /
            2,
        ) + ' kgCO2/KwH',
    },
    {
      title: 'Mimimum Carbon Emission for scope 2',
      data:
        Round(Math.min(...scopeTwo.map((i) => i['Carbon Emission']))) +
        ' kgCO2/KwH',
    },
  ]

  return (
    <div>
      {<TextCard cards={content} />}

      <Grid container spacing={1}>
        <Grid item xs={6}>
          <CardChart
            x_items={Data.map((item) =>
              item.Data.map((d, pos) => d['Transaction Date/Time']),
            ).flat()}
            y_item={scopeOne}
            showYear={true}
            type="bar"
            label="Carbon Emission For Scope 1 of All Vehicles"
          />
        </Grid>
        <Grid item xs={6}>
          <CardChart
            x_items={Data.map((item) =>
              item.Data.map((d) => d['Transaction Date/Time']),
            ).flat()}
            y_item={scopeOne}
            showYear={true}
            type="line"
            label="Carbon Emission For Scope 1 of All Vehicles"
          />
        </Grid>
        <Grid item xs={6}>
          <CardChart
            x_items={scopeTwo.map((x) => x['Date'])}
            y_item={scopeTwo.map((x) => x['Carbon Emission'])}
            showYear={true}
            type="bar"
            label="Carbon Emission For Scope 2 "
          />
        </Grid>
        <Grid item xs={6}>
          <CardChart
            x_items={scopeTwo.map((x) => x['Date'])}
            y_item={scopeTwo.map((x) => x['Carbon Emission'])}
            showYear={true}
            type="line"
            label="Carbon Emission For Scope 2 "
          />
        </Grid>
      </Grid>
    </div>
  )
}

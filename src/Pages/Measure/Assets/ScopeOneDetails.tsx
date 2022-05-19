import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CardChart, MTable, TextCard } from '../../../Components'
import style from './index.module.css'

const columns = [
  {
    title: 'Transaction Date/Time',
    field: 'Transaction Date/Time',
  },
  {
    title: 'CO2 Emission',
    field: 'CO2 Emission',
  },
  {
    title: 'Distance Traveled',
    field: 'DistanceTraveled',
  },
]
export default function ScopeOneDetails() {
  const location: any = useLocation()
  const [item, setItem] = useState({
    'Vehicle Reg': '',
    'Vehicle Reg Driver': '',
  })
  const [data, setData] = useState([])
  useEffect(() => {
    if (location.state['Vehicle Reg']) {
      setItem({
        'Vehicle Reg': location.state['Vehicle Reg'],
        'Vehicle Reg Driver': location.state['Vehicle Reg Driver'],
      })
      setData(location.state.Data)
    }
  }, [location])
  useEffect(() => {
    console.log(item)
    console.log(data)
  }, [item, data])
  const getAvrage = (data: number[]) => {
    let temp = data.filter(function (el?: number) {
      return el != null
    })
    const avg = temp.reduce((p, c) => p + c, 0) / temp.length
    return Math.round(avg * 100) / 100
  }
  const content = [
    {
      title: 'Vehicle Reg No.',
      data: item['Vehicle Reg'],
    },
    {
      title: 'Vehicle Reg Driver',
      data: item['Vehicle Reg Driver'],
    },
    {
      title: 'Avg Fuel Consumption',
      data: getAvrage(data.map((dataItem) => dataItem['Litres'])) + ' Liters',
    },
    {
      title: 'Avg Odometer Reading',
      data: getAvrage(data.map((dataItem) => dataItem['Odometer'])) + ' Km',
    },
    {
      title: 'Avg Distance Traveled',
      data:
        getAvrage(data.map((dataItem) => dataItem['DistanceTraveled'])) + ' Km',
    },
    {
      title: 'Avg Expenditure on Fuel',
      data: '£ ' + getAvrage(data.map((dataItem) => dataItem['Gross'])),
    },
    {
      title: 'Average Carbon Emission',
      data:
        getAvrage(data.map((dataItem) => dataItem['CO2 Emission'])) +
        ' gCO2/Kwh',
    },
  ]
  return (
    <div>
      <TextCard cards={content} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <MTable
            title="Carbon Emission-2021"
            tableData={data}
            columns={columns}
          />
        </Grid>
        <Grid item xs={12}>
          <CardChart
            showYear={true}
            x_items={data.map((dataItem) => dataItem['Transaction Date/Time'])}
            y_item={data.map((dataItem) => dataItem['CO2 Emission'])}
            type="bar"
            label={`Carbon Emission of Vehicle : ${item['Vehicle Reg']} `}
          />
        </Grid>
        <Grid item xs={12}>
          <CardChart
            showYear={true}
            x_items={data.map((dataItem) => dataItem['Transaction Date/Time'])}
            y_item={data.map((dataItem) => dataItem['CO2 Emission'])}
            type="line"
            label={`Carbon Emission of Vehicle : ${item['Vehicle Reg']} `}
          />
        </Grid>
      </Grid>
    </div>
  )
}

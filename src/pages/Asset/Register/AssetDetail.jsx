import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './Register.module.css'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Cookies from 'js-cookie'
import axios from 'axios'
import LineCharts from '../../../components/Graphs/LineCharts'
import AssetCard from '../../../components/Dash/KendraBlogCard/AssetCard'
import DyTable from '../../../components/Table/DyTable'

import { Context } from '../../../context/Contexts'

export default function AssetDetail (props) {
  const context = useContext(Context)
  const location = useLocation()
  const [consumption, setConsumption] = React.useState([])
  const [emission, setEmission] = React.useState([])
  const [rows, setRows] = React.useState([])
  const [date, setDate] = React.useState([])

  const columns = [
    { field: 'Date', title: 'Date' },
    {
      field: 'Energy Consumption',
      title: 'Energy Consumption (KwH)'
    },
    {
      field: 'Carbon Emission',
      title: 'Carbon Emission (kgCO2/kWh)'
    }
  ]

  useEffect(() => {
    context.setShowNavTop(true)

    async function getData () {
      const apiGetData = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${Cookies.get('tok_sustain')}`
        }
      })

      let data = [
        {
          assetName: location.state.detail.asset_name,
          type: 'emission'
        }
      ]

      data.map(
        async data =>
          await apiGetData
            .post(`/api/getEmission?name=${data.assetName}&type=${data.type}`)
            .then(res => {
              console.log(res.data)
              setRows(res.data)
              let varDate = []
              let varEnergy = []
              let emission = []
              res.data.forEach(element => {
                varDate.push(element.Date)
                varEnergy.push(element['Energy Consumption'])
                emission.push(element['Carbon Emission'])
              })

              setDate(d => [...d, varDate])
              setConsumption(p => [...p, varEnergy])
              setEmission(e => [...e, emission])
            })
      )
    }
    getData()
  }, [])

  const metadata = [
    {
      name: 'Maximum Energy Consumption',

      data: Math.round(863.2999877929688) + ' KwH'
    },
    {
      name: 'Minimum Energy Consumption',

      data: Math.round(71.69999694824219) + ' KwH'
    },
    {
      name: 'Average Energy Consumption',
      data: '100KwH'
    },
    {
      name: 'Maximum Carbon Emission',

      data: Math.round(220.65948486328125) + ' kgCO2/kWh'
    },
    {
      name: 'Minimum Carbon Emission',

      data: Math.round(18.326519012451172) + ' kgCO2/kWh'
    },
    {
      name: 'Average Carbon Emission',
      data: '18 kgCO2/kWh'
    }
  ]

  return (
    <div
      className={[styles.register2, context.close ? styles.close2 : ''].join(
        ' '
      )}
    >
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid
            item
            xs={12}
            style={{
              textAlign: 'center',
              height: '90px',
              color: 'black',
              fontSize: '30px',
              fontWeight: 'bold'
            }}
          >
            {location.state.detail.asset_name}
          </Grid>

          {metadata.map((item, pos) => (
            <Grid key={pos} item xs={4}>
              <AssetCard typo1={item.name} typo2={item.data} />
            </Grid>
          ))}
          <Grid item xs={12} md={12}>
            <DyTable
              columns={columns}
              tableData={rows}
              title='Energy Consumtion'
            />
          </Grid>

          {date.map((item, pos) => (
            <Grid item xs={12} md={12}>
              <LineCharts
                labels={date[pos]}
                data={consumption[pos]}
                title='Energy Consumption for Premier Modular (x1000 Kwh)'
                label='Energy Consumption'
                time='Date'
                assetName={location.state.detail.asset_name}
              />
            </Grid>
          ))}

          {date.map((item, pos) => (
            <Grid item xs={12} md={12}>
              <LineCharts
                labels={date[pos]}
                data={emission[pos]}
                title='Carbon Emission for Premier Modular (x1000 kgCO2/kWh)'
                label='Carbon Emission'
                time='Date'
                assetName={location.state.detail.asset_name}
              />
            </Grid>
          ))}
          <Grid item xs={12} className={styles.mapContainer}>
            <iframe title='Map' src='https:' />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

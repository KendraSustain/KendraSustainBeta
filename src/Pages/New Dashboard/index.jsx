import React, { useEffect, useState } from 'react'
import Lable from './Lable'
import Grid from '@mui/material/Grid'
import Total from './Total'
import Card1 from './Card1'
import Data from '../Measure/Assets/NiukData.json'
import axios from 'axios'
import { Box, CircularProgress } from '@material-ui/core'
function Dashboard() {
  const [Scope1Emission, setScope1Emission] = useState([])
  const [Scope2Emission, setScope2Emission] = useState([])
  const [Scope3Emission, setScope3Emission] = useState([])
  const [Scope2, setScope2] = useState([])
  const authToken = `Bearer ${localStorage.getItem('authToken')}`
  const user = JSON.parse(localStorage.getItem('user'))
  useEffect(() => {
    const getData = async () => {
      let scope1 = Data.flat()
      scope1 = scope1.map((e) => e.Data.map((i) => i['CO2 Emission']))
      scope1 = scope1.flat()
      setScope1Emission(scope1)
      const apiGetAsset = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
          Accept: 'application/json',
          Authorization: authToken,
        },
      })

      const apiGetData = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
          Accept: 'application/json',
          Authorization: authToken,
        },
      })
      const { data } = await apiGetAsset.get(`/api/asset/${user.id}`)
      const asset = data

      let temp = []
      for (let i = 0; i < asset.length; i++) {
        const { data } = await apiGetData.post(
          `/api/getEmission?name=${asset[i].asset_name}&type=${'emission'}`,
        )
        temp.push(data)
      }
      setScope2(temp)
      temp = temp.flat()

      temp = temp.map((e) => e['Carbon Emission'])
      console.log(temp)
      let s = 0
      for (let i = 0; i < temp.length; i++) s += temp[i]

      setScope2Emission(temp)
    }
    getData()
  }, [])

  return Scope2.length ? (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Lable
            emission={
              Math.round(
                (Scope1Emission.reduce((a, b) => a + b, 0) +
                  Scope2Emission.reduce((a, b) => a + b, 0) +
                  Scope3Emission.reduce((a, b) => a + b, 0)) *
                  100,
              ) / 100
            }
            scope1={Scope1Emission}
            scope3={Scope3Emission}
            scope2={Scope2Emission}
          />
        </Grid>
        <Grid item xs={4}>
          <Card1
            scope={'Scope 1'}
            emission={
              Math.round(Scope1Emission.reduce((a, b) => a + b, 0) * 100) / 100
            }
            scope1={Scope1Emission}
            scope3={Scope3Emission}
            scope2={Scope2Emission}
            parsantage={
              Math.round(
                ((Scope1Emission.reduce((a, b) => a + b, 0) * 100) /
                  (Scope1Emission.reduce((a, b) => a + b, 0) +
                    Scope2Emission.reduce((a, b) => a + b, 0) +
                    Scope3Emission.reduce((a, b) => a + b, 0))) *
                  100,
              ) / 100
            }
          />
        </Grid>
        <Grid item xs={4}>
          <Card1
            color={'#F5651F'}
            scope={'Scope 2'}
            emission={
              Math.round(Scope2Emission.reduce((a, b) => a + b, 0) * 100) / 100
            }
            scope1={Scope1Emission}
            scope3={Scope3Emission}
            scope2={Scope2Emission}
            parsantage={
              Math.round(
                ((Scope2Emission.reduce((a, b) => a + b, 0) * 100) /
                  (Scope1Emission.reduce((a, b) => a + b, 0) +
                    Scope2Emission.reduce((a, b) => a + b, 0) +
                    Scope3Emission.reduce((a, b) => a + b, 0))) *
                  100,
              ) / 100
            }
            description={
              'Scope 2 emission includes the indirect GHG emissions associated with the purchase of electricity, steam, heat, or cooling.'
            }
          />
        </Grid>
        <Grid item xs={4}>
          <Card1
            color={'#01A14B'}
            scope={'Scope 3'}
            emission={
              Math.round(Scope3Emission.reduce((a, b) => a + b, 0) * 100) / 100
            }
            scope1={Scope1Emission}
            scope3={Scope3Emission}
            scope2={Scope2Emission}
            parsantage={
              Math.round(
                ((Scope3Emission.reduce((a, b) => a + b, 0) * 100) /
                  (Scope1Emission.reduce((a, b) => a + b, 0) +
                    Scope2Emission.reduce((a, b) => a + b, 0) +
                    Scope3Emission.reduce((a, b) => a + b, 0))) *
                  100,
              ) / 100
            }
            description={
              'Scope 3 emission is the result of activities from assets not owned or controlled by the reporting organization'
            }
          />
        </Grid>
        <Grid item xs={12}>
          <Total
            scope1={Scope1Emission}
            scope3={Scope3Emission}
            scope2={Scope2}
          />
        </Grid>
      </Grid>
    </div>
  ) : (
    <Box
      style={{
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  )
}

export default Dashboard

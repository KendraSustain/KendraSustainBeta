import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Grid } from '@mui/material'
import BarChart from '../Chart'

function Intensity (props) {
  const authToken = `Bearer ${localStorage.getItem('authToken')}`

  // const [data2, setData] = React.useState([])
  const [localDate, setLocalDate] = useState([])
  const [intensity, setIntensity] = useState([])

  useEffect(() => {
    async function getData () {
      let Date = []
      let Intensity = []
      // let date = []
      // let prediction = []
      const apiGetData = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
          Accept: 'application/json',
          Authorization: authToken
        }
      })
      await apiGetData.get(`/api/v0.0.1/carbon_intensity`).then(res => {
        res.data.forEach(element => {
          Date.push(element.To.slice(11, 16))
          Intensity.push(element.Intensity)
        })

        setLocalDate(Date)
        setIntensity(Intensity)
      })
    }

    getData()
  }, [authToken])

  return (
    <div {...props}>
      <Grid container spacing={3}>
        <Grid item xs={6} md={12}>
          <BarChart
            x_items={localDate}
            y_item={intensity}
            title='Carbon Intensity for UK (gC02/Kwh)'
            lable='Carbon Intensity'
            type='bar'
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default Intensity

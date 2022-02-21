import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../../../context/Contexts'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import AreaChart from '../../../components/chart/AreaChart'
import { Data3, Data4 } from '../../../dummyData'
import styles from './PredictionModel.module.css'
import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'
import DyTabel from '../../../components/Table/DyTable'
import LineCharts from '../../../components/Graphs/LineCharts'
import AssetCard from '../../../components/Dash/KendraBlogCard/AssetCard'
import { useTheme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import SwipeableViews from 'react-swipeable-views'
import { Card, CardContent, CardHeader } from '@mui/material'

function TabPanel (props) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  )
}

const PredictionModel = () => {
  const context = useContext(Context)
  const [area, setArea] = useState(<AreaChart data={Data3} />)
  const [tableData, setTableData] = useState([[]])
  const [area2, setArea2] = useState(<AreaChart data={Data4} />)
  const [value, setValue] = useState(1)
  const handleChange = (event, newValue) => {
    setValue(newValue)
    console.log(newValue)
  }
  const handleChangeIndex = index => {
    setValue(index)
  }
  const theme = useTheme()

  useEffect(() => {
    context.setShowNavTop(true)
    const getData = async () => {
      let decoded = jwt_decode(Cookies.get('tok_sustain'))

      const authToken = Cookies.get('tok_sustain')
      if (decoded.id !== 63 && decoded.id !== 62) {
        const baseURL = process.env.REACT_APP_API_URL
        let data = []
        let dataF = [
          {
            assetName: 'MPAN-2300000709911',
            type: 'prediction'
          },
          {
            assetName: 'MPAN- 2366560081212',
            type: 'prediction'
          }
        ]
        for (let i = 0; i < dataF.length; i++) {
          const response = await fetch(
            `${baseURL}/api/getPrediction?name=${dataF[i].assetName}&type=${dataF[i].type}`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`
              },
              credentials: 'same-origin'
            }
          )
          const newData = await response.json()
          newData.min_EP = Math.min(
            ...newData.map((item, pos) => item['Energy Prediction'])
          )

          newData.max_EP = Math.max(
            ...newData.map((item, pos) => item['Energy Prediction'])
          )
          newData.min_CEP = Math.min(
            ...newData.map((item, pos) => item['Carbon Emission Prediction'])
          )
          newData.max_CEP = Math.max(
            ...newData.map((item, pos) => item['Carbon Emission Prediction'])
          )
          data.push(newData)
        }
        data.forEach((e, i) => {
          e.forEach((item, j) => {
            data[i][j].Date = data[i][j].Date.slice(0, 10)
          })
          return null
        })

        setTableData(data)
        console.log(tableData)
      }
      return
    }
    getData()
  }, [])
  
  return (
    <div
      className={[styles.monitor, context.close ? styles.close : ''].join(' ')}
    >
      <Grid
        item
        xs={12}
        style={{
          textAlign: 'center',
          height: '50px',
          color: 'black',
          fontSize: '30px',
          fontWeight: 'bold'
        }}
      >
        AI Prediction Models
      </Grid>

      <AppBar position='static' color='transparent'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          variant='fullWidth'
          aria-label='action tabs example'
        >
          <Tab label='Scope 1' value={0} />
          <Tab label='Scope 2' value={1} />
          <Tab label='Scope 3' value={2} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} dir={theme.direction} index={0}>
          scope 1
        </TabPanel>
        <TabPanel value={value} dir={theme.direction} index={1}>
          <Box sx={{ width: '100%' }}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '100%',
                gap: '10px',
                marginBottom: '10px'
              }}
            >
              {tableData.map((item, pos) => (
                <Card variant='outlined'>
                  <CardContent
                    style={{
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <h2> MAPN {pos + 1} </h2>
                    <div>
                      Maximum Carbon Emission Prediction : {item.max_CEP}
                    </div>
                    <div>
                      Minimum Carbon Emission Prediction : {item.min_CEP}
                    </div>
                    <div>Minimum Energy Prediction : {item.min_EP}</div>
                    <div>Maximum Energy Prediction : {item.max_EP}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid
                style={{
                  marginTop: '20px',
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'space-evenly'
                }}
              >
                {tableData.map((item, pos) => (
                  <div
                    style={{
                      width: '45%'
                    }}
                  >
                    <DyTabel
                      title={`MPAN ${pos + 1}`}
                      key={pos}
                      tableData={item}
                      columns={[
                        {
                          title: 'Date',
                          field: 'Date'
                        },
                        {
                          title: 'Energy Prediction ',
                          field: 'Energy Prediction'
                        },
                        {
                          title: 'Carbon Emission Prediction',
                          field: 'Carbon Emission Prediction'
                        }
                      ]}
                    />
                  </div>
                ))}
              </Grid>
              <Grid item xs={6}>
                {area}
              </Grid>
              <Grid item xs={6}>
                {area2}
              </Grid>
              <Grid item xs={12} md={6}>
                {tableData.map((item, pos) => (
                  <LineCharts
                    labels={item.map(ele => ele.Date.slice(0, 10))}
                    data={item.map(ele => ele['Energy Prediction'])}
                    title={`Energy Prediction for Premier Modular *1000 Kwh ${pos} `}
                    label='Energy Prediction'
                    time='Date'
                  />
                ))}
              </Grid>
              <Grid item xs={12} md={6}>
                {tableData.map(item => (
                  <LineCharts
                    labels={item.map(ele => ele.Date.slice(0, 10))}
                    data={item.map(ele => ele['Carbon Emission Prediction'])}
                    title='Carbon Emission Prediction for *1000 kgCO2/kWh'
                    label='Carbon Emission Prediction'
                    time='Date'
                  />
                ))}
              </Grid>
            </Grid>
          </Box>
        </TabPanel>
        <TabPanel value={value} dir={theme.direction} index={2}>
          scope 3
        </TabPanel>
      </SwipeableViews>
    </div>
  )
}
export default PredictionModel

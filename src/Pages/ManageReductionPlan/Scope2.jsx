import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import axios from 'axios'
import { CardChart, MediaCard } from '../../Components'

const CarbonFootprintCalculator = () => {
  const authToken = `Bearer ${localStorage.getItem('authToken')}`
  const [data1, setData1] = useState([])
  const [CE, setCE] = useState([])
  const [GC, setGC] = useState([])
  const user = JSON.parse(localStorage.getItem('user'))
  const [asset, setAsset] = useState([])
  useEffect(() => {
    async function getData() {
      const apiGetData = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
          Accept: 'application/json',
          Authorization: authToken,
        },
      })
      const { data } = await apiGetData.get(`/api/asset/${user.id}`)
      setAsset(data)
      let dum = []
      for (let i = 0; i < data.length; i++) {
        await apiGetData
          .post(
            `/api/getEmission?name=${data[i].asset_name}&type=${'emission'}`,
          )
          .then((res) => {
            dum.push(res.data)
          })
      }
      setData1(dum)
      let temp = dum.map((e) => e.map((i) => i['Carbon Emission']))
      temp = temp.flat()
      setCE(temp)
      temp = dum.map((e) => e.map((i) => i['Energy Consumption']))
      temp = temp.flat()
      setGC(temp)
    }
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authToken])

  useEffect(() => {
    console.log(CE)
  }, [CE])

  const style = {
    display: 'flex',
    backgroundColor: '#ffffff',
    height: '150px',
    borderRadius: '8px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 3,
  }
  const [select, setSelect] = useState(0)

  return (
    data1.length && (
      <div>
        <Box sx={{ width: '100%' }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {asset.map((item, pos) => (
              <Grid item key={pos} xs={12 / asset.length}>
                <Box
                  sx={{
                    ...style,
                    border: '2px solid',
                    borderColor: select === pos ? '#00034F' : 'transparent',
                  }}
                  onClick={() => setSelect(pos)}
                >
                  {item.asset_type}
                </Box>
              </Grid>
            ))}

            <Grid item xs={3}>
              <MediaCard
                title={'Total Carbon Emission(kgCO2/kWh)'}
                content={Math.round(CE.reduce((a, b) => a + b, 0) * 100) / 100}
              />
            </Grid>
            <Grid item xs={3}>
              <MediaCard
                title={'Max Carbon Emission(kgCO2/kWh)'}
                content={Math.round(Math.max(...CE) * 100) / 100}
              />
            </Grid>
            <Grid item xs={3}>
              <MediaCard
                title={'Min Carbon Emission(kgCO2/kWh)'}
                content={Math.round(Math.min(...CE) * 100) / 100}
              />
            </Grid>
            <Grid item xs={3}>
              <MediaCard
                title={'Avrage Carbon Emission(kgCO2/kWh)'}
                content={
                  Math.round(
                    (CE.reduce((a, b) => a + b, 0) * 100) / CE.length,
                  ) / 100
                }
              />
            </Grid>

            <Grid item xs={12} md={12}>
              <CardChart
                title={asset[select].assetName}
                x_items={data1[select].map((e) => e.Date)}
                type="line"
                showYear={true}
                y_item={data1[select].map((e) => e['Carbon Emission'])}
                label={'Carbon Emission for ' + asset[select].asset_type}
              />
            </Grid>

            <Grid item md={12}>
              <CardChart
                title={asset[select].assetName}
                x_items={data1[select].map((e) => e.Date)}
                type="bar"
                showYear={true}
                y_item={data1[select].map((e) => e['Carbon Emission'])}
                label={'Carbon Emission for ' + asset[select].asset_type}
              />
            </Grid>
          </Grid>
        </Box>
      </div>
    )
  )
}

export default CarbonFootprintCalculator

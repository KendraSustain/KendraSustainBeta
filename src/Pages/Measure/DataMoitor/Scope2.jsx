import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import axios from 'axios'
import { CardChart, MTable } from '../../../Components'
import { CircularProgress } from '@material-ui/core'

const Scope2Com = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  const authToken = `Bearer ${localStorage.getItem('authToken')}`
  const [row, setRow] = useState([])
  const [asset, setAsset] = useState([])

  useEffect(() => {
    const getData = async () => {
      setRow([])
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
      setAsset(asset)
      let temp = []
      for (let i = 0; i < asset.length; i++) {
        const { data } = await apiGetData.post(
          `/api/getEmission?name=${asset[i].asset_name}&type=${'emission'}`,
        )
        temp.push(data)
      }
      setRow(temp)
    }
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const columns = [
    { field: 'Date', title: 'Date' },
    {
      field: 'Energy Consumption',
      title: 'Energy Consumption (KwH)',
      render: (i) => Math.round(i['Energy Consumption'] * 100) / 100,
    },
    {
      field: 'Carbon Emission',
      title: 'Carbon Emission (kgCO2/kWh)',
      render: (i) => Math.round(i['Carbon Emission'] * 100) / 100,
    },
  ]
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

  return row.length ? (
    <div>
      <Grid container spacing={1} marginY={1}>
        {asset.map((item, pos) => (
          <Grid item xs={12 / asset.length}>
            {/* <Tree data={[item]} key={pos} /> */}
            <Box
              sx={{
                ...style,
                border: '2px solid',
                borderColor: select === pos ? '#00034F' : 'transparent',
                cursor: 'pointer',
              }}
              onClick={() => setSelect(pos)}
            >
              {item.asset_type + ' : ' + item.asset_name}
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ width: '100%' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MTable
              columns={columns}
              tableData={row[select]}
              title={asset[select].asset_type}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <CardChart
              showYear={true}
              x_items={row[select].map((data) => data.Date)}
              label={asset[select].asset_type}
              time="Date"
              type="bar"
              // series={[
              //   {
              //     data: row[select].map((data) => data["Energy Consumption"]),
              //     type: "bar",
              //     color: "#4B5FAE",
              //     barMaxWidth: 40,
              //   },
              //   // {
              //   //   data: item.map((data) => data["Carbon Emission"]),
              //   //   type: "bar",
              //   //   color: "#272253",
              //   // },
              // ]}
              y_item={row[select].map((data) => data['Carbon Emission'])}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <CardChart
              showYear={true}
              x_items={row[select].map((data) => data.Date)}
              label={asset[select].asset_type}
              time="Date"
              type="line"
              // series={[
              //   {
              //     data: row[select].map((data) => data["Energy Consumption"]),
              //     type: "line",
              //   },
              //   {
              //     data: row[select].map((data) => data["Carbon Emission"]),
              //     type: "line",
              //   },
              // ]}
              y_item={row[select].map((data) => data['Carbon Emission'])}
            />
          </Grid>
        </Grid>
      </Box>
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

export default Scope2Com

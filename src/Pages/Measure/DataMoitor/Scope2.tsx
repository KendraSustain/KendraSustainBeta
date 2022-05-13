import React, { useContext, useState } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { CardChart, MTable } from '../../../Components'
import { CircularProgress } from '@material-ui/core'
import { Context } from '../../../Context'
interface scopeTwoAssetData {
  Date: string
  'Energy Consumption': number
  'Carbon Emission': number
}
interface scopeTwoAssetName {
  asset_name: string
  asset_type: string
  id: number
  location: string
  owner_id: number
}
type scopeTwoDataType = scopeTwoAssetData[]
const Scope2Com = () => {
  const { scopeTwoAsset, scopeTwoData } = useContext(Context)
  const asset: scopeTwoAssetName[] = scopeTwoAsset
  const row: scopeTwoDataType[] = scopeTwoData
  const columns = [
    { field: 'Date', title: 'Date' },
    {
      field: 'Energy Consumption',
      title: 'Energy Consumption (KwH)',
      // render: (i:any) => Math.round(i['Energy Consumption'] * 100) / 100,
    },
    {
      field: 'Carbon Emission',
      title: 'Carbon Emission (kgCO2/kWh)',
      // render: (i:any) => Math.round(i['Carbon Emission'] * 100) / 100,
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

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          gap: 20,
          paddingBottom: 10,
        }}
      >
        {asset.map((x, i) => (
          <div
            key={i}
            style={{
              border: select === i ? '1px solid black' : '',
              padding: '10px 0',
              flexGrow: 1,
              textAlign: 'center',
              borderRadius: 10,
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              cursor: 'pointer',
            }}
            onClick={() => setSelect(i)}
          >
            <h5>{x.asset_type}</h5>
            <p>{x.asset_name}</p>
          </div>
        ))}
      </div>
      <Box sx={{ width: '100%' }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <MTable
              columns={columns}
              tableData={row[select]}
              title={asset[select].asset_type}
            />
          </Grid>

          <Grid item xs={6}>
            <CardChart
              showYear={true}
              x_items={row[select].map((i) => i.Date)}
              label={asset[select].asset_type}
              time="Date"
              type="bar"
              y_item={row[select].map((data) => data['Carbon Emission'])}
            />
          </Grid>
          <Grid item xs={6}>
            <CardChart
              showYear={true}
              x_items={row[select].map((i) => i.Date)}
              label={asset[select].asset_type}
              time="Date"
              type="line"
              y_item={row[select].map((data) => data['Carbon Emission'])}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Scope2Com

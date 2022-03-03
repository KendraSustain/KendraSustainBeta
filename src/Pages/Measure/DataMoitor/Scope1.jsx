import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { Scope1 } from '../../../Helper/Data'
import { MTable } from '../../../Components'
import CardChart from '../../../Components/Chart/CardChart'
const Scope1Com = () => {
  const [tableData, setTableData] = useState(Scope1)
  const [labels, setLabels] = React.useState([
    'Business Fuel - Petrol',
    'Business Fuel - Diesel',
    'Buildings - Fuel Oil',
    'Transport-Company Fleet - Diesel',
    'Transport-Company Fleet - Petrol',
    'Transport-Company Fleet - Kerosene'
  ])
  const [value, setValue] = React.useState([])

  const columns = [
    {
      title: 'Source',
      field: 'Source',
      sorting: false,
      filtering: true,
      headerStyle: { color: '#fff' }
    },
    { title: 'Enrgy Consumption(MWh)', field: 'Energy Consumption(MWh)' },
    {
      title: 'GHG Emission(tCO2e)',
      field: 'GHG Emissions(tCO2e)',
      align: 'center',
      grouping: false
    },
    {
      title: 'Year',
      field: 'year',
      align: 'center',
      grouping: false
    }
  ]

  useEffect(() => {
    async function getData () {
      const value = [83407, 677300, 162042, 55520, 2326, 479780]
      setLabels(labels)
      setValue(value)
    }
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={12}>
            <MTable
              columns={columns}
              tableData={tableData}
              title='Scope 1'
              onSelect={selectedRows => console.log(selectedRows)}
              editable={{
                onRowAdd: newRow =>
                  new Promise((resolve, reject) => {
                    setTableData([...tableData, newRow])

                    setTimeout(() => resolve(), 500)
                  }),
                onRowUpdate: (newRow, oldRow) =>
                  new Promise((resolve, reject) => {
                    const updatedData = [...tableData]
                    updatedData[oldRow.tableData.id] = newRow
                    setTableData(updatedData)
                    setTimeout(() => resolve(), 500)
                  }),
                onRowDelete: selectedRow =>
                  new Promise((resolve, reject) => {
                    const updatedData = [...tableData]
                    updatedData.splice(selectedRow.tableData.id, 1)
                    setTableData(updatedData)
                    setTimeout(() => resolve(), 1000)
                  })
              }}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <CardChart
              data={value.map((item, pos) => {
                return {
                  value: item,
                  name: labels[pos]
                }
              })}
              type='pie'
              title='Fuel Consumption - 2020'
              time='Fuel Consumption'
            />
          </Grid>
          <Grid item xs={10} md={6}>
            <CardChart
              x_items={labels}
              y_item={value}
              type='bar'
              title='Fuel Consumption - 2020'
              time='Fuel Consumption'
              label='Fuel Consumption'
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Scope1Com

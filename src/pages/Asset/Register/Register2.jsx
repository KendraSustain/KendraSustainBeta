import React, { useState, useContext, useEffect } from 'react'

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import AddIcon from '@material-ui/icons/Add'
import styles from './Register.module.css'
import { Context } from '../../../context/Contexts'
import { Data } from '../../../Data'
import DyTable from '../../../components/Table/DyTable'

function Register2 () {
  const context = useContext(Context)
  const [tableData, setTableData] = useState(Data)
  console.log(Data)
  const columns = [
    {
      title: 'Name of Asset',
      field: 'Asset_name',
      sorting: false,
      filtering: false,
      headerStyle: { color: '#fff' }
    },
    { title: 'Asset Type', field: 'Asset_type' },
    { title: 'Location', field: 'location', align: 'center', grouping: false }
  ]
  return (
    <div
      className={[styles.register, context.close ? styles.close : ''].join(' ')}
    >
      <DyTable
        title='Scope 1'
        columns={columns}
        tableData={tableData}
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
        options={{
          pageSize: 3
        }}
      />
    </div>
  )
}

export default Register2

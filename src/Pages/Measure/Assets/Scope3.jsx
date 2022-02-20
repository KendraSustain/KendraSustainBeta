import React, { useState } from 'react'
import { MTable } from '../../../Components'
import { Data2 } from '../../../Helper/Data'

function Scope3Com () {
  const [tableData, setTableData] = useState(Data2)
  console.log(Data2)
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
    <div>
      <MTable
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
        title='Scope 3'
      />
    </div>
  )
}

export default Scope3Com

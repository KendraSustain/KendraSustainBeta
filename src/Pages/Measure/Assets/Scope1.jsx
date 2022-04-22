import React, { useState } from 'react'
import { Data } from '../../../Helper/Data'
import { MTable } from '../../../Components'
function Scope1Com () {
  const [tableData, setTableData] = useState(Data)
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
        tableData={tableData}
        columns={columns}
        title="Scope 1"
      />
    </div>
  )
}

export default Scope1Com

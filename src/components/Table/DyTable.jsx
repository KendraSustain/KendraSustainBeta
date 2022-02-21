import React from 'react'
import MaterialTable from 'material-table'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import EditIcon from '@mui/icons-material/Edit'
import AddBoxIcon from '@mui/icons-material/AddBox'
import { useEffect } from 'react'

export default function DyTable (props) {
  const options = {
    sorting: true,
    search: true,
    searchFieldAlignment: 'right',
    searchAutoFocus: true,
    searchFieldVariant: 'standard',
    filtering: true,
    paging: true,
    pageSizeOptions: [2,3,6,5,10,20,50,100],
    pageSize: 6,
    paginationType: 'stepped',
    showFirstLastPageButtons: false,
    paginationPosition: 'both',
    exportButton: true,
    exportAllData: true,
    exportFileName: 'TableData',
    addRowPosition: 'first',
    actionsColumnIndex: -1,
    showSelectAllCheckbox: false,
    showTextRowsSelected: false,
    selectionProps: rowData => ({
      disabled: rowData.age == null
    }),

    columnsButton: true,
    rowStyle: (data, index) =>
      index % 2 === 0 ? { background: '#f5f5f5' } : null,
    headerStyle: { background: '#00034f', color: 'white' }
  }

  useEffect(() => {}, [props])

  return (
    <div>
      <MaterialTable
        onPageChange={() => alert(1)}
        columns={props.columns}
        data={props.tableData}
        editable={{ ...props.editable }}
        onRowClick={props.onRowClick}
        actions={[]}
        onSelectionChange={props.onSelect}
        options={{
          ...options,
          ...props.options
        }}
        title={props.title}
        icons={{
          Add: () => <AddBoxIcon style={{ color: '#0b2738' }} />,
          Edit: () => <EditIcon style={{ color: '#0a5e91' }} />,
          Delete: () => <DeleteOutlineIcon style={{ color: 'red' }} />
        }}
      />
    </div>
  )
}

import MaterialTable from '@material-table/core'
import { InputLabel, Select } from '@material-ui/core'
import { MenuItem } from '@mui/material'
import React, { useState } from 'react'
import { FormControl } from 'react-bootstrap'
import { MTable } from '../../../Components'

const users = [
  {
    photo:
      'https://th.bing.com/th/id/R.6335f33fe06225a5233e6b4dd028142a?rik=CDtAY2OCYCcyvg&riu=http%3a%2f%2ftalkingoffice365.com%2fimages%2fteam%2f12.jpg&ehk=oPG5KQMwuCfOpdBJ%2blnA%2f1I7USBaoefYDq1rWMrFoXQ%3d&risl=&pid=ImgRaw&r=0',
    name: 'John',
    status: true,
    lastseen: '1 min ago',
    role: 'Super Admin',
  },
  {
    photo:
      'https://med.uottawa.ca/emergency/sites/med.uottawa.ca.emergency/files/mungham_2019.jpg',
    name: 'Viky',
    status: false,
    lastseen: '1 Week ago',
    role: 'Admin',
  },
  {
    photo: 'https://haagglobal.com/am-site/media/chris-bright1low.jpg',
    name: 'Ron',
    status: true,
    lastseen: 'Yesterday',
    role: 'User',
  },
  {
    photo:
      'https://www.gibsondunn.com/wp-content/uploads/2017/07/DWatson_web.jpg',
    name: 'Rock',
    status: true,
    lastseen: 'Yesterday',
    role: 'User',
  },
  {
    photo:
      'https://s3.amazonaws.com/ballotpedia-api4/files/thumbs/200/300/Jon_Ossoff.png',
    name: 'Robin',
    status: true,
    lastseen: 'Yesterday',
    role: 'Guest',
  },
]

export default function ManageUsers() {
  const [tableData, setTableData] = useState(users)
  const columns = [
    {
      title: 'Photo',
      field: 'photo',
      editable: 'never',
      render: (item) => (
        <img
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
          }}
          src={item.photo}
          alt="..."
        />
      ),
    },
    { title: 'Name', field: 'name' },
    {
      title: 'Role',
      field: 'role',
      editComponent: ({ value, onRowDataChange, rowData }) => {
        return (
          <Select
            labelId="mtable"
            value={value}
            label="Age"
            onChange={(event) => {
              onRowDataChange({
                ...rowData,
                role: event.target.value,
              })
            }}
          >
            <MenuItem value={'Super Admin'}>Super Admin</MenuItem>
            <MenuItem value={'Admin'}>Admin</MenuItem>
            <MenuItem value={'User'}>User</MenuItem>
            <MenuItem value={'Guest'}>Guest</MenuItem>
          </Select>
        )
      },
    },
    { title: 'last seen', field: 'lastseen', editable: 'never' },
    {
      title: 'status',
      field: 'status',
      align: 'center',
      editable: 'never',
    },
  ]

  return (
    <div>
      <MaterialTable
        title="Users"
        columns={columns}
        editable={{
          onRowAdd: (newRow) =>
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
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...tableData]
              updatedData.splice(selectedRow.tableData.id, 1)
              setTableData(updatedData)
              setTimeout(() => resolve(), 1000)
            }),
        }}
        data={tableData.map((item, pos) => {
          return {
            photo: item.photo,
            name: item.name,
            status: item.status ? 'Signed Out' : 'Signed In',
            role: item.role,
            lastseen: item.lastseen,
            id: pos,
          }
        })}
      />
    </div>
  )
}

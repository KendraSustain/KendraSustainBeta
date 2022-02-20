import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { columns } from './columns'
import { MTable } from '../../../Components'
import { getUser } from '../../../Auth'
import { useNavigate } from 'react-router-dom'
const Register = props => {
  const authToken = `Bearer ${localStorage.getItem('authToken')}`
  const navigate = useNavigate()
  const apiAsset = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
      Authorization: authToken
    }
  })
  const apiDelAsset = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      Accept: '*/*',
      Authorization: authToken
    }
  })

  const [localData, setLocalData] = useState()

  useEffect(() => {
    async function getData () {
      const apiGetAsset = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
          Accept: 'application/json',
          Authorization: authToken
        }
      })
      try {
        const user = await getUser()
        const { data } = await apiGetAsset.get(`/api/asset/${user.id}`)
        setLocalData(data)
      } catch (error) {
        console.log(error)
        console.log('Unable to get Asset')
      }
    }
    getData()
  }, [authToken])

  const addRow = async newRow => {
    let jsonData = {
      asset_name: newRow.asset_name,
      asset_type: newRow.asset_type,
      location: newRow.location
    }
    try {
      const res = await apiAsset.post('/api/asset', jsonData)
      const updatedRows = [...localData, { id: res.data.id }]
      setLocalData(updatedRows)
    } catch (error) {
      console.log('Unable to create asset')
    }
  }
  const updateRow = async (updatedRow, oldRow) => {
    const index = oldRow.tableData.id
    let jsonData = {
      asset_name: updatedRow.asset_name,
      asset_type: updatedRow.asset_type,
      location: updatedRow.location
    }
    try {
      await apiAsset.put(`/api/asset/${oldRow.id}`, jsonData)
      const updatedRows = [...localData]
      updatedRows[index] = updatedRow
      setLocalData(updatedRows)
    } catch (error) {
      console.log('Unable to update asset')
    }
  }
  const deleteRow = async selectedRow => {
    const index = selectedRow.tableData.id
    try {
      await apiDelAsset.delete(`/api/asset/${selectedRow.id}`)
      const updatedRows = [...localData]
      updatedRows.splice(index, 1)
      setLocalData(updatedRows)
    } catch (error) {
      console.log('Unable to delete asset')
    }
  }

  return (
    <div>
      {localData && (
        <MTable
          tableData={localData}
          columns={columns}
          onRowClick={(event, rowData) =>
            navigate('/asset',{
              state : {detail : rowData}
            })
          }
          editable={{
            onRowAdd: newRow =>
              new Promise((resolve, reject) => {
                addRow(newRow)
                setTimeout(() => {
                  resolve()
                }, 2000)
              }),
            onRowDelete: selectedRow =>
              new Promise((resolve, reject) => {
                deleteRow(selectedRow)
                setTimeout(() => {
                  resolve()
                }, 2000)
              }),
            onRowUpdate: (updatedRow, oldRow) =>
              new Promise((resolve, reject) => {
                updateRow(updatedRow, oldRow)
                setTimeout(() => {
                  resolve()
                }, 2000)
              })
          }}
        />
      )}
    </div>
  )
}

export default Register

import React, { MouseEventHandler, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { MTable } from '../../../Components'
import { Context } from '../../../Context'
const columns = [
  {
    title: 'S.NO.',
    field: 'sn',
  },
  {
    title: 'Vehicle Reg',
    field: 'Vehicle Reg',
  },

  {
    title: 'Vehicle Type',
    field: 'Vehicle type',
  },
  {
    title: 'Fuel Type',
    field: 'Fuel type',
  },
  {
    title: 'Vehicle Reg Driver',
    field: 'Vehicle Reg Driver',
  },

  {
    title: 'Location',
    field: 'Location',
  },
]
type TableData = {
  'Vehicle Reg': string
  'Vehicle Reg Driver': string
  Location: string
  'Fuel type': string
  'Vehicle type': string
  Data: {
    'CO2 Emission': number
    DistanceTraveled: number
    'Transaction Date/Time': string
  }[]
}
export default function NIUK() {
  const navigate = useNavigate()
  const { scopeOneData } = useContext(Context)
  const handelClick = (event: any, data: TableData) => {
    navigate('/asset/one', {
      state: {
        'Vehicle Reg': data['Vehicle Reg'],
        'Vehicle Reg Driver': data['Vehicle Reg Driver'],
        Data: data.Data,
      },
    })
  }

  return (
    <div>
      <MTable
        columns={columns}
        tableData={scopeOneData.map((item: TableData, pos: number) => ({
          sn: pos + 1,
          'Vehicle Reg': item['Vehicle Reg'],
          'Vehicle Reg Driver': item['Vehicle Reg Driver'],
          Location: item['Location'],
          'Fuel type': item['Fuel type'],
          'Vehicle type': item['Vehicle type'],
          Data: item.Data,
        }))}
        onRowClick={handelClick}
        title="Scope 1"
      />
    </div>
  )
}

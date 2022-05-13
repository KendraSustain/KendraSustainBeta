import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { columns } from './columns'
import { MTable } from '../../../Components'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../../Context'
const Register = (props) => {
  const { scopeTwoData, scopeTwoAsset } = useContext(Context)
  const navigate = useNavigate()

  return (
    <div>
      <MTable
        title="Scope 2"
        tableData={scopeTwoAsset.map((x, i) => ({ ...x, sn: i + 1 }))}
        columns={columns}
        onRowClick={(event, rowData) =>
          navigate('/asset', {
            state: { detail: rowData },
          })
        }
      />
    </div>
  )
}

export default Register

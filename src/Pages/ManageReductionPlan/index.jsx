import { useEffect } from 'react'
import * as React from 'react'
import Grid from '@mui/material/Grid'
import { Appbar } from '../../Components'
import Scope1Com from './Scope1'
import Scope2Com from './Scope2'
import Scope3Com from './Scope3'
import Summary from './Summry'
import NIUK from './NIUK'
import NIUK_sum from './NiukSum'
export default function DataMonitor() {
  useEffect(() => {}, [])
  const user = { id: 71 }

  return (
    <div>
      <Grid
        item
        xs={12}
        style={{
          textAlign: 'center',
          height: '50px',
          color: 'black',
          fontSize: '30px',
          fontWeight: 'bold',
        }}
      >
        Carbon Footprint Calculator
      </Grid>
      <Appbar
        components={
          user.id === 66
            ? [<Summary />, <Scope1Com />, <Scope2Com />, <Scope3Com />]
            : user.id === 71
            ? [<NIUK_sum />, <NIUK />, <Scope2Com />]
            : []
        }
        labels={
          user.id === 66
            ? [<>Summary</>, <>Scope 1</>, <>Scope 2</>, <>Scope 3</>]
            : user.id === 71
            ? [<>Summary</>, <>Scope 1</>, <>Scope 2</>]
            : []
        }
      />
    </div>
  )
}

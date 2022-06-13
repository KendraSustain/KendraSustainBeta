import React, { useContext, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Scope1Com from './Scope1'
import Scope2Com from './Scope2'
import Scope3Com from './Scope3'
import { Appbar } from 'Components'
import { Context } from 'Context'
export default function DataMonitor() {
  const { setHeadText } = useContext(Context)
  useEffect(() => {
    setHeadText(
      <p
        style={{
          fontFamily: 'Manrope',
          fontWeight: 700,
          fontSize: 22,
        }}
      >
        Prediction Model /{' '}
        <span
          style={{
            color: '#808080',
            fontFamily: 'Manrope',
          }}
        >
          AI Models
        </span>
      </p>,
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {/* <Grid
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
        AI Prediction Models
      </Grid> */}
      <Appbar
        components={[
          <Scope1Com />,
          <Scope2Com />,
          // <Scope3Com/>
        ]}
      />
    </div>
  )
}

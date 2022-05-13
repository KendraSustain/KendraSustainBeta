import { Box, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Sidepanal, Tree } from '../../Components'

export default function Factor() {
  const [checked, setChecked] = useState<string[]>([])
  useEffect(() => {
    console.log(checked)
  }, [checked])

  return (
    <>
      <Grid
        container
        style={{
          flexGrow: 1,
        }}
        spacing={2}
      >
        <Grid
          item
          style={{
            flexGrow: 1,
            minWidth: 350,
          }}
        >
          <Box
            style={{
              backgroundColor: 'var(--white)',
              padding: '10px 0',
              borderRadius: 5,
            }}
          >
            <Sidepanal setCheckedItems={setChecked} />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box
            style={{
              backgroundColor: 'var(--white)',
              padding: '10px 0',
              borderRadius: 5,
            }}
          >
            <Tree />
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

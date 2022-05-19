import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
interface PropTypes {
  lable: string
  scope: number
}
const Info: React.FC<PropTypes> = ({ lable, scope }) => {
  return (
    <Box
      sx={{
        bgcolor: '#F5F5F5',
        p: '20px 10px',
        borderRadius: '0 0 10px 10px',
      }}
    >
      <Grid container>
        <Grid item xs={1}>
          <i className="bx bx-info-circle"></i>
        </Grid>
        <Grid item xs={11}>
          <Typography fontSize={14}>
            {' '}
            <strong> Scope {scope} </strong> {lable}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Info

import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export default function index({ lable }) {
  return (
    <Box
      sx={{
        bgcolor: '#F5F5F5',
        p: 1,
        borderRadius: 2,
      }}
    >
      <Grid container>
        <Grid item xs={1}>
          <i class="fas fa-info-circle"></i>
        </Grid>
        <Grid item xs={11}>
          <Typography fontSize={14}>{lable}</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

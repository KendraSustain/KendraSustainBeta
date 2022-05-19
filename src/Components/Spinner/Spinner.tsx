import React from 'react'
import { Box, CircularProgress } from '@material-ui/core'
interface PropsType {
  color?: string
  width?: number
}
const Spinner: React.FC<PropsType> = ({ color = '#0C1C85', width = 40 }) => {
  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: color,
        height: '100%',
      }}
    >
      <CircularProgress
        color={'inherit'}
        style={{
          width: width,
          height: width,
        }}
      />
    </Box>
  )
}

export default Spinner

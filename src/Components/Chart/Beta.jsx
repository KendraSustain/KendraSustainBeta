import styles from './Chart.module.css'
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from '@mui/material'
import { useState, useEffect } from 'react'
import BarChart from '.'
const BETA = props => {
  const [LABELS, setLABELS] = useState(props.labels)
  const [showYear, setShowYear] = useState(0)

  useEffect(() => {
    let temp = props.labels.map(item =>
      item.includes(`${showYear}`) ? item : null
    )
    let uu = []
    for (let i of temp) i && uu.push(i)
    setLABELS(uu)
    if (!showYear) setLABELS(props.labels)
  }, [showYear, props.labels])

  return (
    <Card {...props} className={styles.chart} style={{ borderRadius: '15px' }}>
      <CardHeader
        title={
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            {props.title}

            <FormControl
              style={{
                width: '100px'
              }}
            >
              <InputLabel id='select-year'>Select Year</InputLabel>
              <Select
                id='select'
                labelId='select-year'
                value={showYear}
                label='Select Year'
                onChange={(e, value) => setShowYear(e.target.value)}
              >
                <MenuItem value={0}>ALL</MenuItem>
                <MenuItem value={2019}>2019</MenuItem>
                <MenuItem value={2020}>2020</MenuItem>
                <MenuItem value={2021}>2021</MenuItem>
              </Select>
            </FormControl>
          </div>
        }
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 250,
            position: 'relative'
          }}
        >
          <BarChart x_items={LABELS} y_item={props.data} type={props.type ? props.type :'bar'} />
        </Box>
      </CardContent>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 3
        }}
      >
        {props.time}
      </Box>
    </Card>
  )
}

export default BETA

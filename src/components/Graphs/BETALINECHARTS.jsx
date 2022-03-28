import { Line } from 'react-chartjs-2'
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
  Select,
  useTheme
} from '@mui/material'
import { useState, useEffect } from 'react'
// import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const BETA = props => {
  const theme = useTheme()
  // console.log(props.data)
  console.log(props.labels)
  const [DATA, setDATA] = useState(props.data)
  const [LABELS, setLABELS] = useState(props.labels)
  const [showYear, setShowYear] = useState(0)
  const data = {
    datasets: [
      {
        backgroundColor: '#3F51B5',
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: DATA,
        label: props.label,
        maxBarThickness: 10
      }
    ],
    labels: props.labels
  }
  // console.log(data);

  const options = {
    animation: false,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    xAxes: [
      {
        ticks: {
          fontColor: theme.palette.text.secondary
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          fontColor: theme.palette.text.secondary,
          beginAtZero: true,
          min: 0
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: theme.palette.divider,
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: theme.palette.divider
        }
      }
    ],
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  }
  useEffect(() => {
    let temp = props.labels.map(item =>
      item.includes(`${showYear}`) ? item : null
    )
    let uu = []
    for (let i of temp) i && uu.push(i)
    setLABELS(uu)
    if (!showYear) setLABELS(props.labels)
  }, [showYear])

  return (
    <Card {...props} className={styles.chart} style={{ borderRadius: '15px' }}>
      <CardHeader
        title={
          <div style={ {
              width : '100%',
              display : 'flex',
              justifyContent : 'space-between'
          }} >
            {props.title}

            <FormControl
              style={{
                width: '100px',
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
          <Line
            data={{
              datasets: [
                {
                  backgroundColor: '#3F51B5',
                  barPercentage: 0.5,
                  barThickness: 12,
                  borderRadius: 4,
                  categoryPercentage: 0.5,
                  data: props.data,
                  label: props.label,
                  maxBarThickness: 10
                }
              ],
              labels: LABELS
            }}
            options={options}
          />
        </Box>
      </CardContent>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 1
        }}
      >
        {props.time}
      </Box>
    </Card>
  )
}

export default BETA

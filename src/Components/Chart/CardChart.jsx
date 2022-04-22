import BarChart from './index'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import {
  CardHeader,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material'
import React, { useState, useEffect } from 'react'
import PieChart from './PieChart'

export default function CardChart(props) {
  const [LABELS, setLABELS] = useState(props.x_items)
  const [filter, setFilter] = useState(props.filterYear || [])
  const [showYear, setShowYear] = useState(0)
  const [showLoading, setShowLoading] = useState(true)
  const [Data, setData] = useState(props.y_item)
  const handleChange = (e) => {
    setShowLoading(true)
    setShowYear(e.target.value)
    if (e.target.value === 0) {
      setLABELS(props.x_items)
      setData(props.y_item)
      return
    }
    const tempData = []
    let temp = props.x_items.map((item, pos) => {
      if (item.includes(e.target.value)) {
        tempData.push(props.y_item[pos])
        return item
      }
      return null
    })

    let uu = []

    for (let i of temp) i && uu.push(i)

    setLABELS(uu)
    setData(tempData)
    setShowLoading(false)
  }

  useEffect(() => {
    setShowLoading(false)
    if (!props.x_items) {
      setShowYear(false)
      return
    }
    const year = []
    for (let i = 2000; i <= 3000; i++) {
      props.x_items.forEach((item) => {
        if (item.includes(i)) {
          year.push(i)
        }
      })
    }
    let uniqueChars = [...new Set(year)]
    setFilter(uniqueChars)
    setLABELS(props.x_items)
    setData(props.y_item)
    setShowLoading(false)
  }, [props])

  return (
    <Card>
      {props.showYear && (
        <CardHeader
          title={
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div></div>
              <FormControl
                style={{
                  width: '100px',
                }}
              >
                <InputLabel id="select-year">Select Year</InputLabel>
                <Select
                  id="select"
                  labelId="select-year"
                  value={showYear}
                  label="Select Year"
                  onChange={handleChange}
                  style={{
                    textAlign: 'center',
                  }}
                >
                  <MenuItem
                    style={{
                      display: 'list-item',
                      padding: '5px ',
                      marginLeft: '5px',
                    }}
                    value={0}
                  >
                    ALL
                  </MenuItem>
                  {filter.map((item, pos) => (
                    <MenuItem
                      style={{
                        display: 'list-item',
                        padding: '5px ',
                        marginLeft: '5px',
                      }}
                      key={pos}
                      value={item}
                    >
                      {item}{' '}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          }
        />
      )}

      <CardContent>
        {(props.type === 'bar') | (props.type === 'line') ? (
          <BarChart
            {...props}
            x_items={LABELS}
            y_item={Data}
            showLoading={showLoading}
          />
        ) : (
          <PieChart {...props} data={props.data} showLoading={showLoading} />
        )}
      </CardContent>
    </Card>
  )
}

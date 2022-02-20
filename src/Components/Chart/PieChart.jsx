import React from 'react'
import ReactECharts from 'echarts-for-react'

export default function PieChart ({ type = 'pie', data }) {
    console.log(data)
  const options = {
    series: [
      {
        data: data,
        type: type,
        smooth: true
      }
    ],
    tooltip: {
      trigger: 'axis'
    }
  }
  return (
    <ReactECharts
      option={options}
      notMerge={true}
      lazyUpdate={true}

      // theme={'theme_name'}
      // onChartReady={this.onChartReadyCallback}
      // onEvents={EventsDict}
    />
  )
}

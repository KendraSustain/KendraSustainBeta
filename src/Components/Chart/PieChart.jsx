import React from 'react'
import ReactECharts from 'echarts-for-react'

export default function PieChart({
  type = 'pie',
  data,
  subtype = 'pie',
  showLoading,
  options,
  series,
}) {
  const option = {
    tooltip: {
      trigger: 'item',
    },

    series: series
      ? series
      : [
          {
            data: data,
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                // fontWeight: 'bold'
              },
            },
            labelLine: {
              show: false,
            },
          },
        ],
    labelLine: {
      show: false,
    },

    avoidLabelOverlap: false,
    ...options,
  }
  return (
    <ReactECharts
      option={option}
      notMerge={true}
      lazyUpdate={true}
      showLoading={showLoading}
      style={{
        height: '140px',
      }}
      // theme={'theme_name'}
      // onChartReady={this.onChartReadyCallback}
      // onEvents={EventsDict}
    />
  )
}

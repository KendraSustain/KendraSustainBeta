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
  console.log(series)
  const option = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'horizontal',
    },
    series: series
      ? series
      : [
          {
            data: data,
            type: type,
            smooth: true,
            radius: subtype === 'doughnut' ? ['50%', '70%'] : ['0%', '90%'],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
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
      // theme={'theme_name'}
      // onChartReady={this.onChartReadyCallback}
      // onEvents={EventsDict}
    />
  )
}

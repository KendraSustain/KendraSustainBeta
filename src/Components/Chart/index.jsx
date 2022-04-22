import React, { useEffect } from 'react'
import ReactECharts from 'echarts-for-react'

export default function BarChart({
  series,
  x_items,
  type,
  y_item,
  axis,
  label,
  name,
  legend,
  showLoading,
}) {
  useEffect(() => {}, [x_items, y_item])
  const tool = {
    legend: {},
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: false,
        },
        saveAsImage: {
          pixelRatio: 2,
        },
      },
    },
    tooltip: {
      trigger: 'axis',
      // axisPointer: {
      //   type: 'shadow',
      // },
    },
    grid: {
      bottom: 90,
      // containLabel: true
    },
    dataZoom: [
      {
        type: 'inside',
      },
    ],
    series: series
      ? series
      : [
          {
            name: name,
            data: y_item,
            type: type,
            smooth: true,
            color: '#4B5FAE',
            barMaxWidth: 40,
          },
        ],
    title: {
      text: label,
      left: 'center',
      top: '10px',
    },
  }
  const options =
    axis === 'y'
      ? {
          ...tool,
          yAxis: {
            type: 'category',
            data: x_items,
          },
          xAxis: {
            type: 'value',
          },
        }
      : {
          ...tool,

          xAxis: {
            type: 'category',
            axisLabel: { rotate: 30 },
            data: x_items,
          },
          yAxis: {
            type: 'value',
          },
        }
  return (
    <ReactECharts
      option={options}
      notMerge={true}
      lazyUpdate={true}
      showLoading={showLoading}

      // theme={'theme_name'}
      // onChartReady={this.onChartReadyCallback}
      // onEvents={EventsDict}
    />
  )
}

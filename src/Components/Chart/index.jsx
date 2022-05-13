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
    legend: legend,
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: false,
        },
        saveAsImage: {
          pixelRatio: 2,
        },
        magicType: { show: true, type: ['stack', 'tiled'] },
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
            boundaryGap: false,
          },
          xAxis: {
            type: 'value',
          },
        }
      : {
          ...tool,

          xAxis: {
            type: 'category',
            // boundaryGap: false,
            // axisLabel: { rotate: 30 },
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

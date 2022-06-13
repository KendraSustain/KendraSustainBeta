import React, { useEffect } from 'react'
import ReactECharts from 'echarts-for-react'

interface PropType {
  series: any
  x_items?: string[]
  type?: 'line' | 'bar'
  y_item?: number[] | string[]
  axis?: 'x' | 'y'
  label?: string
  name?: string
  legend?: any
  showLoading?: boolean
  extraOptions?: any
}
const BarChart: React.FC<PropType> = ({
  series,
  x_items,
  type = 'bar',
  y_item,
  axis,
  label,
  name,
  legend,
  showLoading,
  extraOptions = {},
}) => {
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
    },
    grid: {
      bottom: 30,
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
      option={{ ...options, ...extraOptions }}
      notMerge={true}
      lazyUpdate={true}
      showLoading={showLoading}
    />
  )
}
export default BarChart

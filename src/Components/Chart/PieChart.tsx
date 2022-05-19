import React from 'react'
import ReactECharts from 'echarts-for-react'
interface PropType {
  data: any[]
  showLoading: boolean
  options: any
  series: any
}
const PieChart: React.FC<PropType> = ({
  data,
  showLoading,
  options,
  series,
}) => {
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
    />
  )
}
export default PieChart

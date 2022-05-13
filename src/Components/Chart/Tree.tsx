import React from 'react'
import ReactECharts from 'echarts-for-react'
interface Data {
  name: string
  children?: Data[]
  symbolSize?: number
}
const node: any = {
  name: 'Scope',
  symbolSize: 100,
  symbolRoatate: 90,
  children: [
    {
      name: 'Scope 1',
      symbolSize: 60,
      children: [{ name: 'child 1' }, { name: 'child 1' }, { name: 'child 1' }],
    },
    {
      name: 'Scope 2',
      symbolSize: 60,
      children: [{ name: 'child 1' }, { name: 'child 1' }, { name: 'child 1' }],
    },
    {
      name: 'Scope 3',
      symbolSize: 60,
      children: [{ name: 'child 1' }, { name: 'child 1' }, { name: 'child 1' }],
    },
  ],
}
function Tree() {
  const option = {
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove',
      // backgroundColor: 'red',
    },
    series: [
      {
        type: 'tree',
        label: {
          show: true,
          position: 'inside',
        },
        data: [node],

        // top: '18%',
        // bottom: '14%',
        layout: 'radial',
        symbol: 'emptyCircle',
        symbolSize: 40,
        initialTreeDepth: 3,
        animationDurationUpdate: 750,
        emphasis: {
          focus: 'descendant',
        },
      },
    ],
  }
  return (
    <>
      <ReactECharts
        option={option}
        lazyUpdate
        style={{
          height: '500px',
        }}
      />
    </>
  )
}

export default Tree

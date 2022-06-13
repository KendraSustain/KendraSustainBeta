import { BarChart } from 'Components/Chart'
import React from 'react'
import { ScopeTwoDataType, ScopeOneDataType } from 'Types'
interface PropType {
  scope1: ScopeOneDataType[]
  scope2: ScopeTwoDataType
  scope3: any
}
const labels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]
const CEGraph: React.FC<PropType> = ({ scope1, scope2, scope3 }) => {
  const scopeOneData = scope1.map((i) => i['Data']).flat()
  const getData1 = (data: ScopeOneDataType['Data']) => {
    const rD = []
    for (let i = 1; i <= 12; i++) {
      const temp = data.filter((j) => {
        const [, month] = j['Transaction Date/Time'].split(/[-/]+/)
        return Number(month) === i
      })
      rD.push(temp.map((i) => i['CO2 Emission']))
    }
    return rD.map((i) => i.reduce((a, b) => a + b, 0))
  }
  const getData2 = (data: ScopeTwoDataType) => {
    const rD = []

    for (let i = 1; i <= 12; i++) {
      const temp = data.flat().filter((j) => {
        const [, month] = j['Date'].split(/[-/]+/)
        return Number(month) === i
      })
      rD.push(temp.map((i) => i['Carbon Emission']))
    }
    console.log(rD)
    return rD.map((i) => i.reduce((a, b) => a + b, 0))
  }
  return (
    <div
      style={{
        padding: 20,
        height: '100%',
        background: '#FFFFFF',
        boxShadow: ' 0px 4px 39px 9px rgba(81, 69, 159, 0.09)',
        borderRadius: '10px',
      }}
    >
      <BarChart
        x_items={labels}
        axis={'x'}
        series={[
          {
            name: 'Scope 1',
            type: 'line',
            smooth: true,
            lineStyle: {
              color: '#F8C07F',
              width: 3,
            },
            symbol: 'none',
            data: getData1(scopeOneData),
          },
          {
            name: 'Scope 2',
            type: 'line',
            smooth: true,
            lineStyle: {
              color: '#F5866A',
              width: 3,
            },
            symbol: 'none',
            data: getData2(scope2),
          },
          {
            name: 'Scope 3',
            type: 'line',
            smooth: true,
            lineStyle: {
              color: '#6956E5',
              width: 3,
            },
            symbol: 'none',
            data: [],
          },
        ]}
        extraOptions={{
          title: {
            text: 'Carbon Emission Report',
            left: 'left',
          },
          legend: {
            show: true,
            left: 'right',
            itemStyle: {
              opacity: 0,
              color: 'inherit',
            },
            lineStyle: {
              width: 10,
            },
          },
          toolbox: {
            show: false,
          },
        }}
      />
    </div>
  )
}
export default CEGraph

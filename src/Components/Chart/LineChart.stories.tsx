import { ComponentStory, ComponentMeta } from '@storybook/react'
import BarChart from './BarChart'
import * as echarts from 'echarts'
export default {
  title: 'Charts/Line ',
  component: BarChart,
} as ComponentMeta<typeof BarChart>
const Template: ComponentStory<typeof BarChart> = (args) => (
  <BarChart {...args} />
)
export const Singal_Line = Template.bind({})
Singal_Line.args = {
  x_items: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug'],
  y_item: [10, 9, 12, 11, 7, 15, 8, 9],
  type: 'line',
}

export const Multiple_Line = Template.bind({})
Multiple_Line.args = {
  x_items: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug'],
  series: [
    {
      data: [10, 9, 12, 11, 7, 15, 8, 9],
      name: 'Dataset 1',
      type: 'line',
    },
    {
      data: [11, 4, 9, 14, 9, 11, 12, 11],
      name: 'Dataset 2',
      type: 'line',
    },
  ],
}
export const Stack = Template.bind({})

Stack.args = {
  x_items: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug'],
  series: [
    {
      data: [10, 9, 12, 11, 7, 15, 8, 9],
      name: 'Dataset 1',
      type: 'line',
      barMaxWidth: 40,
      stack: 'x',
    },
    {
      data: [11, 4, 9, 14, 9, 11, 12, 11],
      name: 'Dataset 2',
      type: 'line',
      barMaxWidth: 40,
      stack: 'x',
    },
  ],
}
export const Gradient = Template.bind({})
Gradient.args = {
  x_items: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug'],
  series: [
    {
      data: [10, 9, 12, 11, 7, 15, 8, 9],
      name: 'Dataset 1',
      type: 'line',
      smooth: true,
      lineStyle: {
        width: 2,
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.3,
        color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
          {
            offset: 1,
            color: '#FBBC05',
          },
          {
            offset: 0.7,
            color: '#FBBC05',
          },

          {
            offset: 0.5,
            color: '#00B0FF',
          },
          {
            offset: 0.3,
            color: '#35DC94',
          },
          {
            offset: 0,
            color: '#35DC94',
          },
        ]),
      },
    },
  ],
}
export const Mix = Template.bind({})
Mix.args = {
  x_items: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug'],
  series: [
    {
      data: [10, 9, 12, 11, 7, 15, 8, 9],
      name: 'Dataset 1',
      type: 'bar',
      barMaxWidth: 40,
    },
    {
      data: [11, 4, 9, 14, 9, 11, 12, 11],
      name: 'Dataset 2',
      type: 'line',
      barMaxWidth: 40,
    },
  ],
}

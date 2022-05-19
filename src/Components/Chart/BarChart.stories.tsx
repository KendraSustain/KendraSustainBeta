import { ComponentStory, ComponentMeta } from '@storybook/react'
import BarChart from './BarChart'
export default {
  title: 'Charts / Bar ',
} as ComponentMeta<typeof BarChart>
const Template: ComponentStory<typeof BarChart> = (args) => (
  <BarChart {...args} />
)
export const Singal_Bar = Template.bind({})
Singal_Bar.args = {
  x_items: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug'],
  y_item: [10, 9, 12, 11, 7, 15, 8, 9],
  type: 'bar',
}

export const Multiple_Bar = Template.bind({})
Multiple_Bar.args = {
  x_items: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug'],
  series: [
    {
      data: [10, 9, 12, 11, 7, 15, 8, 9],
      name: 'Dataset 1',
      type: 'bar',
    },
    {
      data: [11, 4, 9, 14, 9, 11, 12, 11],
      name: 'Dataset 2',
      type: 'bar',
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
      type: 'bar',
      barMaxWidth: 40,
      stack: 'x',
    },
    {
      data: [11, 4, 9, 14, 9, 11, 12, 11],
      name: 'Dataset 2',
      type: 'bar',
      barMaxWidth: 40,
      stack: 'x',
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

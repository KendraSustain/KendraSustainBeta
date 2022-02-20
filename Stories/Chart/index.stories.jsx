import { CHART } from '../../src/Components'
import { colors } from './Random'
export default {
  title: 'Chart/Bar',
  component: CHART
}

const Template = args => <CHART {...args} />

const DemoData = {
  series: [
    {
      data: [8, 2, 6, 1, 9, 5, 2, 6],
      type: 'bar',
      smooth: true

    },
    {
      data: [5, 3, 5, 4, 6, 0, 3, 9],
      backgroundColor: 'blue',
      borderColor: 'blue',
      label: 'Dataset2'
    }
  ],
  x_items: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
}

const DemoDataPie = {
  dataset: [
    {
      data: [8, 2, 6, 1, 9, 5],
      backgroundColor: [...colors],
      label: 'Dataset1'
    }
  ],
  x_items: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  type: 'pie'
}

export const BAR = Template.bind({})
BAR.args = {
  ...DemoData
}

export const Horizantal_BAR = Template.bind({})
Horizantal_BAR.args = {
  ...DemoData
}
export const LINE = Template.bind({})
LINE.args = {
  ...DemoData,
  type: 'line'
}

export const PIE = Template.bind({})
PIE.args = {
  ...DemoDataPie
}
export const DOUGHNUT = Template.bind({})
DOUGHNUT.args = {
  ...DemoDataPie,
  type: 'doughnut'
}

export const POLAR = Template.bind({})
POLAR.args = {
  ...DemoDataPie,
  type: 'polarArea'
}
export const RADAR = Template.bind({})
RADAR.args = {
  ...DemoDataPie,
  type: 'radar'
}

import { ComponentStory, ComponentMeta } from '@storybook/react'
import CircularProgress from './CircularProgress'

export default {
  title: 'Charts/CircularProgress',
  component: CircularProgress,
} as ComponentMeta<typeof CircularProgress>

const Template: ComponentStory<typeof CircularProgress> = (args) => (
  <CircularProgress {...args} />
)

export const CircularProgress_ = Template.bind({})
CircularProgress_.args = {
  value: 60,
  color: 'red',
  width: 100,
  text: 'Label',
}

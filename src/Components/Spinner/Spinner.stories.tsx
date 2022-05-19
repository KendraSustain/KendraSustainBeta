import { ComponentMeta, ComponentStory } from '@storybook/react'
import Spinner from './Spinner'
export default {
  title: 'Spinner/Spinner',
  component: Spinner,
  argTypes: {
    color: {
      control: 'color',
    },
  },
} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />
export const Spinner_ = Template.bind({})
Spinner_.args = {
  color: 'red',
  width: 100,
}

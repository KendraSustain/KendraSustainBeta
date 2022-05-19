import { ComponentStory, ComponentMeta } from '@storybook/react'
import Navbar from './Navbar'

export default {
  title: 'Navigation/Nav',
  component: Navbar,
  argTypes: {
    backgroundColor: {
      control: {
        type: 'color',
      },
    },
  },
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const NavBar = Template.bind({})
NavBar.args = {
  //   close: true,
  backgroundColor: '#001555',
}

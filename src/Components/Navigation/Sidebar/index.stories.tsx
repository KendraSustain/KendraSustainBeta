import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Sidebar from '.'

export default {
  title: 'Navigation/Nav',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const SideBar = Template.bind({})
SideBar.args = {
  close: true,
}

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Topbar from '.'

export default {
  title: 'Navigation/Nav',
  component: Topbar,
} as ComponentMeta<typeof Topbar>

const Template: ComponentStory<typeof Topbar> = (args) => <Topbar {...args} />

export const TopBar = Template.bind({})
TopBar.args = {
  close: true,
}

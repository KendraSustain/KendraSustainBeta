import { Button } from '@material-ui/core'
import { ComponentMeta, ComponentStory } from '@storybook/react'
// import Button from './Button'

export default {
  title: 'Input/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Cotained = Template.bind({})
Cotained.args = {
  variant: 'contained',
  children: 'Button',
  color: 'primary',
}
export const Outlined = Template.bind({})
Outlined.args = {
  variant: 'outlined',
  children: 'Button',
  color: 'primary',
}
export const Text = Template.bind({})
Text.args = {
  variant: 'text',
  children: 'Button',
  color: 'primary',
}
export const Primary = Template.bind({})
Primary.args = {
  variant: 'contained',
  children: 'Button',
  color: 'primary',
}
export const Secounday = Template.bind({})
Secounday.args = {
  variant: 'contained',
  children: 'Button',
  color: 'secondary',
}
export const Large = Template.bind({})
Large.args = {
  variant: 'contained',
  children: 'Button',
  color: 'secondary',
  size: 'large',
}
export const Small = Template.bind({})
Small.args = {
  variant: 'contained',
  children: 'Button',
  color: 'secondary',
  size: 'small',
}
export const Medium = Template.bind({})
Medium.args = {
  variant: 'contained',
  children: 'Button',
  color: 'secondary',
  size: 'medium',
}
export const Disabled = Template.bind({})
Disabled.args = {
  variant: 'contained',
  children: 'Button',
  disabled: true,
}

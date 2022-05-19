import { ComponentMeta, ComponentStory } from '@storybook/react'
import { TextField } from '@material-ui/core'
export default {
  title: 'Input/Textfield',
  component: TextField,
} as ComponentMeta<typeof TextField>

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
)

export const Outlined = Template.bind({})
Outlined.args = {
  variant: 'outlined',
  label: 'Outlined',
}
export const Filled = Template.bind({})
Filled.args = {
  variant: 'filled',
  label: 'Filled',
}
export const Standared = Template.bind({})
Standared.args = {
  variant: 'standard',
  label: 'Standard',
}

export const Required = Template.bind({})
Required.args = {
  variant: 'outlined',
  required: true,
  label: 'Hello world',
}
export const Disabled = Template.bind({})
Disabled.args = {
  variant: 'outlined',
  label: 'Hello world',
  disabled: true,
}
export const Password = Template.bind({})
Password.args = {
  variant: 'outlined',
  label: 'Hello world',
  type: 'password',
}
export const Number = Template.bind({})
Number.args = {
  variant: 'outlined',
  label: 'Hello world',
  type: 'number',
}
export const Helpertext = Template.bind({})
Helpertext.args = {
  variant: 'outlined',
  helperText: 'Helper Text',
}

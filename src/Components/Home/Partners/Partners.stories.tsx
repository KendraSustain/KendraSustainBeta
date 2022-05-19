import { ComponentMeta, ComponentStory } from '@storybook/react'
import Partners from './Partners'

export default {
  title: 'Home/Partners',
} as ComponentMeta<typeof Partners>

const Template: ComponentStory<typeof Partners> = (args) => <Partners />

export const Partners_ = Template.bind({})

Partners_.args = {}

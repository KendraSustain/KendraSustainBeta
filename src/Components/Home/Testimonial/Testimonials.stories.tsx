import { ComponentMeta, ComponentStory } from '@storybook/react'
import Testimonial from './Testimonial'

export default {
  title: 'Home/Testimonial',
  component: Testimonial,
} as ComponentMeta<typeof Testimonial>

const Template: ComponentStory<typeof Testimonial> = (args) => <Testimonial />

export const Testimonial_ = Template.bind({})
Testimonial_.args = {}

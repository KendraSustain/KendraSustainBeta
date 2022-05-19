import { ComponentMeta, ComponentStory } from '@storybook/react'
import NewsLatter from './NewsLatter'
export default {
  title: 'Home/Newslatter',
  component: NewsLatter,
} as ComponentMeta<typeof NewsLatter>

const Template: ComponentStory<typeof NewsLatter> = (args) => <NewsLatter />
export const Newslatter_ = Template.bind({})
Newslatter_.args = {}

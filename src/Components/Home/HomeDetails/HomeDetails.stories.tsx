import { ComponentMeta, ComponentStory } from '@storybook/react'
import HomeDetails from './HomeDetails'
export default {
  title: 'Home/Details',
  component: HomeDetails,
} as ComponentMeta<typeof HomeDetails>

const Template: ComponentStory<typeof HomeDetails> = (args) => <HomeDetails />
export const Details_ = Template.bind({})
Details_.args = {}

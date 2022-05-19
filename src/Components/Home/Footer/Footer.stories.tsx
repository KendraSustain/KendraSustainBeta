import { ComponentMeta, ComponentStory } from '@storybook/react'
import Footer from './Footer'
export default {
  title: 'Home/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />
export const Footer_ = Template.bind({})
Footer_.args = {}

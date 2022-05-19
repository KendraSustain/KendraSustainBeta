import { ComponentStory, ComponentMeta } from '@storybook/react'
import BlockQuote from './BlockQuote'
export default {
  title: 'BlockQuote',
  component: BlockQuote,
} as ComponentMeta<typeof BlockQuote>

const Template: ComponentStory<typeof BlockQuote> = (args) => (
  <BlockQuote {...args} />
)

export const Default = Template.bind({})
Default.args = {
  content: 'This is content',
  writer: 'Writer',
}

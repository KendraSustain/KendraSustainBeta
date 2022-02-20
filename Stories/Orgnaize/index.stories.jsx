import { BlockQuote } from '../../src/Components'
export default {
  title: 'Orgnaize /Bloack Quote',
  component: BlockQuote
}

const Template = args => <BlockQuote {...args} />
export const Default = Template.bind({})
Default.args = {
  content:
    'We are committed to make the circular economy a feasible model for a genuinely sustainable environment.',
  contentWriter: 'Covestro'
}

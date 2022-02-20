import { Spinner } from '../../src/Components'
export default {
  title: 'Spinner /Spinner',
  component: Spinner
}

const Template = args => <Spinner {...args} />
export const Default = Template.bind({})
Default.args = {}

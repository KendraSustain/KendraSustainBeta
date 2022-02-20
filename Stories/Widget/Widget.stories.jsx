import { Widget } from '../../src/Components'
export default {
  title: 'Widget /Widget',
  component: Widget
}

const Template = args => <Widget {...args} />
export const Default = Template.bind({})
Default.args = {}

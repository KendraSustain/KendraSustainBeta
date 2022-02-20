import { Navbar } from '../../src/Components'

export default {
  title: 'Navigation/Navbar',
  component: Navbar
}

const Template = args => <Navbar {...args} />

export const Basic = Template.bind({})
Basic.args = {
  backgroundColor: '#03172bdc'
}

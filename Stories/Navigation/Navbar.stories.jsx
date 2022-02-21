import { Navbar } from '../../src/Components'

export default {
  title: 'Navigation/Bar',
  component: Navbar
}

const Template = args => <Navbar {...args} />

export const Navbars = Template.bind({})
Navbars.args = {
  backgroundColor: '#03172bdc'
}

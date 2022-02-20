import { Login } from '../../src/Pages'

export default {
  title: 'Pages / Login',
  component: Login
}

const Template = args => <Login {...args} />
export const Default = Template.bind({})
Default.args = {}

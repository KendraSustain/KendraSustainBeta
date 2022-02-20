import { Sidebar } from "../../src/Components"
export default {
  title: 'Navigation / Sidebar',
  component: Sidebar
}

const Template = args => <Sidebar {...args} />
export const Basic = Template.bind({})
Basic.args = {
  close: false,
  user: {
    photo: 'https://app.kendrasustain.com/images/lsbuprofile.jpg',
    name: 'Himanshu',
    job: 'Admin'
  }
}

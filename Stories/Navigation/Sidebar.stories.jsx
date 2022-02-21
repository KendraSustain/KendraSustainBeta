import { Sidebar } from "../../src/Components"
export default {
  title: 'Navigation / BAR',
  component: Sidebar
}

const Template = args => <Sidebar {...args} />
export const Sidebars = Template.bind({})
Sidebars.args = {
  close: false,
  user: {
    photo: 'https://app.kendrasustain.com/images/lsbuprofile.jpg',
    name: 'Himanshu',
    job: 'Admin'
  }
}

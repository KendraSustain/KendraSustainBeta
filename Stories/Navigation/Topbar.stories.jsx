import { Topbar } from "../../src/Components";
export default {
    title: 'Navigation / BAR',
    component : Topbar
}

const Template = args => <Topbar {...args} />
export const Topsbars = Template.bind({})  
Topsbars.args = {
    close : false
}

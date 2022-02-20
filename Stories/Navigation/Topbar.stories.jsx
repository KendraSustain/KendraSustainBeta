import { Topbar } from "../../src/Components";
export default {
    Title : 'Navigation',
    component : Topbar
}

const Template = args => <Topbar {...args} />
export const Default = Template.bind({})  
Default.args = {
    close : false
}

import { Weather } from "../../src/Components";
export default {
    title: 'Widget /Weather',
    component: Weather
  }
  
  const Template = args => <Weather {...args} />
  export const Default = Template.bind({})
  Default.args = {}
  
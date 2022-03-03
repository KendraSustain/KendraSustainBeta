import { Appbar } from "../../src/Components";
export default {
  title: "Appbar/Simple",
  component: Appbar,
};

const Template = (args) => <Appbar {...args} />;
export const Basic = Template.bind({});
Basic.args = {};

import { CHART } from "../../src/Components";
export default {
  title: "Chart/Bar",
  component: CHART,
};

const Template = (args) => <CHART {...args} />;

const DemoData = {
  y_item: [4, 3, 5, 6, 4, 3, 5, 9],
  type: "bar",
  x_items: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
};

export const BAR = Template.bind({});
BAR.args = {
  ...DemoData,
};

export const Horizantal_BAR = Template.bind({});
Horizantal_BAR.args = {
  axis: "y",
  ...DemoData,
};
export const LINE = Template.bind({});
LINE.args = {
  ...DemoData,
  type: "line",
};

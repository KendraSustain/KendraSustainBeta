import { PieChart } from "../../src/Components";
export default {
  title: "Chart/Bar",
  component: PieChart,
};

const Template = (args) => <PieChart {...args} />;


const DemoData = {
  data: [
    { name: "A", value: 16 },
    { name: "B", value: 16 },
    { name: "C", value: 16 },
    { name: "D", value: 16 },
    { name: "E", value: 16 },
    { name: "F", value: 16 },
    { name: "G", value: 16 },
  ],
};

export const Pie = Template.bind({});
Pie.args = {
  ...DemoData,
};

export const Doughnut = Template.bind({});
Doughnut.args = {
  ...DemoData,
  subtype: "doughnut",
};
// export const LINE = Template.bind({});
// LINE.args = {
//   ...DemoData,
// };

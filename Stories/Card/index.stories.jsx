import { MediaCard } from "../../src/Components";
export default {
  title: "Card/Card",
  component: MediaCard,
};
const Template = (args) => <MediaCard {...args} />;
export const Default = Template.bind({});
Default.args = {
  img : require('../../src/Assets/Images/backgroundimg5.jpg'),
  style : {
    width : '300px',
  },
  title: "Kendra Sustain",
  content:
    "Kendra Sustain enables enterprises to embed data-driven Sustainability Decision-Making across business operations by providing enterprises with the tools to build a Circular Economy model through Data and Artificial Intelligence.",
  buttons: [
    {
      lable: "SHARE",
      onClick: console.log("Clicked"),
    },
    {
      lable: "LEARN MORE",
      onClick: console.log("Clicked"),
    },
  ],
};

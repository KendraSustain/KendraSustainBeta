import { ComponentStory, ComponentMeta } from '@storybook/react'
import Features from './Features'
import icon1 from '../../../Assets/Images/icon1.png'
import icon2 from '../../../Assets/Images/icon2.png'
import icon3 from '../../../Assets/Images/icon3.png'
export default {
  title: 'Home/Features',
} as ComponentMeta<typeof Features>

const Template: ComponentStory<typeof Features> = (args) => (
  <Features {...args} />
)
export const Features_ = Template.bind({})
Features_.args = {
  company: 'Company Name',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam laudantium illo temporibus cumque ipsa at quisquam odit iure eligendi totam placeat labore ex est ad possimus facilis non, dicta beatae.',
  feature: [
    {
      image: icon1,
      heading: 'Develop and Realize Net Zero Strategies',
      subHeading:
        'implement Circular Economy Models embed Sustainability Decisioning across your business.',
    },
    {
      image: icon2,
      heading: 'Be part of a growing Sustainability Ecosystem',
      subHeading:
        'with an AI and Data Marketplace to augment your Sustainability initiatives.',
    },
    {
      image: icon3,
      heading: 'Find out more',
      subHeading:
        'about our Custom Sustainability solutions in Asset Management, Real Estate, and Industrial markets.',
    },
  ],
}

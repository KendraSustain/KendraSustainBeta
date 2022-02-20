import { MediaCard } from '../../src/Components'
export default {
  title: 'Card/Card',
  component: MediaCard
}
const Template = args => <MediaCard {...args} />
export const Default = Template.bind({})
Default.args = {
  
  buttons: [
    {
      lable: 'SHARE',
      onClick: console.log('Clicked')
    },
    {
      lable: 'LEARN MORE',
      onClick: console.log('Clicked')
    }
  ]
}

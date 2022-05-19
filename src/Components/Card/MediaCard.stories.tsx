import { ComponentStory, ComponentMeta } from '@storybook/react'
import MediaCard from './MediaCard'
export default {
  title: 'Cards/Card',
  component: MediaCard,
} as ComponentMeta<typeof MediaCard>

const Template: ComponentStory<typeof MediaCard> = (args) => (
  <MediaCard {...args} />
)

export const Media_Card = Template.bind({})
Media_Card.args = {
  img: 'https://source.unsplash.com/random',
  title: 'Title',
  content: (
    <>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
      facilis saepe magni perspiciatis non quod laudantium. Tempore dignissimos
      quo minima ducimus? Inventore eaque placeat eius exercitationem incidunt
      doloremque quae! Voluptas!
    </>
  ),
  buttons: [
    {
      onClick: (e) => alert('Button Clicked'),
      label: 'Button',
    },
  ],
}

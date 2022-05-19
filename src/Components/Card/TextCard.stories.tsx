import { ComponentStory, ComponentMeta } from '@storybook/react'
import TextCard from './TextCard'
export default {
  title: 'Cards/Card',
  component: TextCard,
} as ComponentMeta<typeof TextCard>

const Template: ComponentStory<typeof TextCard> = (args) => (
  <TextCard {...args} />
)
export const Text_Card = Template.bind({})
Text_Card.args = {
  cards: [
    {
      title: 'Title',
      data: 'Data',
    },
    {
      title: 'Card 2',
      data: 100,
    },
    {
      title: 'Card 3',
      data: 200,
    },
    {
      title: 'Card 4',
      data: 200,
    },
  ],
  grid: 4,
}

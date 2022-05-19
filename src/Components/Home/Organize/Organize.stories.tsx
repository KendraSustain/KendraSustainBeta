import { ComponentMeta, ComponentStory } from '@storybook/react'
import Organize from './Organize'
export default {
  title: 'Home/Organize',
  component: Organize,
} as ComponentMeta<typeof Organize>

const Template: ComponentStory<typeof Organize> = (args) => (
  <Organize {...args} />
)
export const Organize_ = Template.bind({})
Organize_.args = {
  contents: [
    {
      content: 'Content Here 1',
      contentWriter: 'Writter',
    },
    {
      content: 'Content Here 2',
      contentWriter: 'Writter',
    },
  ],
}

import { ComponentMeta, ComponentStory } from '@storybook/react'
import Info from './Info'

export default {
  title: 'Info',
  component: Info,
} as ComponentMeta<typeof Info>

const Template: ComponentStory<typeof Info> = (args) => <Info {...args} />

export const Info_ = Template.bind({})
Info_.args = {
  scope: 1,
  lable:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad distinctio atque ea reprehenderit, veniam modi. Labore quae incidunt, tempora officia dicta, eaque voluptate possimus doloremque optio exercitationem non natus ex!',
}

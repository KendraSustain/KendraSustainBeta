import { ComponentMeta, ComponentStory } from '@storybook/react'
import TreeCheckBox from './TreeCheckBox'

export default {
  title: 'Tree/Checkboxs',
  component: TreeCheckBox,
} as ComponentMeta<typeof TreeCheckBox>

const Template: ComponentStory<typeof TreeCheckBox> = (args) => (
  <TreeCheckBox {...args} />
)

export const Checkboxs_ = Template.bind({})
Checkboxs_.args = {
  setCheckedItems: (items: string[]) => console.log(items),
}

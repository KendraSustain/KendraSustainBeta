import { ComponentStory, ComponentMeta } from '@storybook/react'
import MTable from './MTable'
export default {
  title: 'Table/MTable',
} as ComponentMeta<typeof MTable>

const Template: ComponentStory<typeof MTable> = (args) => <MTable {...args} />
export const MTable_ = Template.bind({})
MTable_.args = {
  title: 'Table Title Here',
  columns: [
    {
      title: 'S.NO.',
      field: 'sn',
    },
    {
      title: 'Col 1',
      field: 'cl1',
    },
    {
      title: 'Col 2',
      field: 'cl2',
    },
  ],
  tableData: [
    {
      sn: 1,
      cl1: 'Some Data 1',
      cl2: 'Some Data 1',
    },
    {
      sn: 2,
      cl1: 'Some Data 2',
      cl2: 'Some Data 2',
    },
    {
      sn: 3,
      cl1: 'Some Data 3',
      cl2: 'Some Data 3',
    },
  ],
  options: {
    pageSize: 3,
  },
}

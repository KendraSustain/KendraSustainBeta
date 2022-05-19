import { ComponentStory, ComponentMeta } from '@storybook/react'
import Appbar from './AppBar'
export default {
  title: 'Appbar/App',
  component: Appbar,
} as ComponentMeta<typeof Appbar>

const Template: ComponentStory<typeof Appbar> = (args) => <Appbar {...args} />

export const App_ = Template.bind({})
App_.args = {
  labels: ['1 Tab', '2 Tab', '3 Tab'],
  components: [<>Tab One</>, <>Tab two</>, <>Tab Three</>],
}

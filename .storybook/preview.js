import { BrowserRouter } from 'react-router-dom'
import '../src/sass/style.scss'
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
export const decorators = [
  (Story) => (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  ),
]

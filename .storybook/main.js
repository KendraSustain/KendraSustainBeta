
module.exports = {
  stories: [
    '../Stories/**/*.stories.mdx',
    '../Stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-postcss',
    'storybook-css-modules-preset'
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5'
  }
}

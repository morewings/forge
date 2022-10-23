// use `mergeConfig` to recursively merge Vite options
const { mergeConfig } = require('vite');
const path = require('path');
const hq = require('alias-hq');

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true
  },
  features: {
    storyStoreV7: true
  },
  async viteFinal(config, { configType }) {
    return {
      ...config,
      resolve: {
        alias: hq.get('rollup')
      },
    };
  },
}

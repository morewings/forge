const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "core": {
    "builder": "storybook-builder-vite"
  },
  async viteFinal(config) {
    // Fix for storybook-builder-vite bug. Doesn't pick default config.
    config.resolve.alias = {
      '@': path.resolve(__dirname, './src'),
    };

    return config;
  }
}

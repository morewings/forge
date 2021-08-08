module.exports = {
  extends: ['eslint-config-forge'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
      },
    },
  },
};

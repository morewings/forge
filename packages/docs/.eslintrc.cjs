module.exports = {
  extends: ['eslint-config-forge'],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ["node_modules", "./src"]
      },
    },
  },
};

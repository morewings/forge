module.exports = {
  extends: ['eslint-config-forge'],
  settings: {
    'import/resolver': {
      parcel: {
        rootDir: '/',
      },
    },
  },
};

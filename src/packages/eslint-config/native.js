module.exports = {
  extends: ['./index', 'react-native'],
  env: {
    'react-native/react-native': true
  },
  rules: {
    'react-native/no-inline-styles': ['warn'],
    'react-native/no-unused-styles': ['error']
  }
};

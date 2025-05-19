module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-mixins': {},
    'postcss-flexbugs-fixes': {},
    'postcss-custom-media': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 0,
      features: {
        'custom-properties': false,
        'nesting-rules': true,
      },
    },
  },
};

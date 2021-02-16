if (process.env.NODE_ENV === 'production') {
  module.exports = {
    plugins: {
      cssnano: {},
      'rucksack-css': {},
    },
  };
} else {
  module.exports = {
    plugins: {
      'rucksack-css': {},
    },
  };
}

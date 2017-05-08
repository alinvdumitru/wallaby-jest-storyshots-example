module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.js?(x)',
      'src/**/*.snap',
      '!src/**/*.spec.js?(x)',
      '.storybook/config.js'
    ],
    tests: [
      'src/**/*.spec.js?(x)'
    ],

    env: {
      type: 'node',
      runner: 'node'
    },

    compilers: {
      "**/*.js?(x)": wallaby.compilers.babel(),
      ".storybook/config.js": wallaby.compilers.babel()
    },

    testFramework: 'jest',

    debug: true
  };
};

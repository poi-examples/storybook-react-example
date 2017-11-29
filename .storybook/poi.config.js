module.exports = {
  // Entry is relative to process.cwd()
  entry: [
    '.storybook/config.js',
    '.storybook/addons.js'
  ],

  dist: '.storybook/dist',

  presets: [
    // The order matters!
    require('poi-preset-react')(),
    require('poi-preset-storybook')()
  ]
}

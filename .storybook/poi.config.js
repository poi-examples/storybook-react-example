module.exports = {
  // Entry is relative to process.cwd()
  entry: [
    '.storybook/config.js',
    '.storybook/addons.js'
  ],

  outDir: '.storybook/dist',

  plugins: [
    require('@poi/plugin-storybook')()
  ]
}

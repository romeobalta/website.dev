const path = require('path')

const buildEslintCommand = filenames =>
  `next lint --fix --file ${filenames
    .map(f => path.relative(process.cwd(), f))
    .join(' --file ')}`

const buildPrettierCommand = filenames =>
  `prettier ${filenames
    .map(f => path.relative(process.cwd(), f))
    .join(' ')} --write`

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, buildPrettierCommand],
  '*.json': [buildPrettierCommand],
}

// eslint-disable-next-line
const { useBabelRc, override, useEslintRc, disableEsLint } = require('customize-cra');

module.exports = override(
    useBabelRc(),
    // useEslintRc()
    disableEsLint()
)
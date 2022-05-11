// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = require("@tsed/config/craco.config")("react-formio", {
  coverageThreshold: {
    global: {
      branches: 44.6,
      functions: 60.98,
      lines: 60.98,
      statements: 62.27
    }
  }
});

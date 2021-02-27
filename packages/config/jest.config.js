// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createJestConfig } = require("@craco/craco");

// eslint-disable-next-line @typescript-eslint/no-var-requires
const cracoConfig = require("./craco.config.js");
const jestConfig = createJestConfig(cracoConfig);

module.exports = jestConfig;

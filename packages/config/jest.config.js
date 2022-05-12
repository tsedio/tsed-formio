// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createJestConfig } = require("@craco/craco");

module.exports = (name, craco) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const cracoConfig = craco || require("./craco.config.js")(name);
  return createJestConfig(cracoConfig);
};

module.exports = {
  ...require("@tsed/config/jest/jest.web.config.js"),
  coverageThreshold: {
    global: require("./coverage.json")
  }
};

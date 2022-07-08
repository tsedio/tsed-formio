module.exports = {
  extends: [require.resolve("@tsed/config/eslint/web")],
  rules: {
    "import/no-anonymous-default-export": 0,
    "jsx-a11y/no-autofocus": 1
  }
};

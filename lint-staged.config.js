module.exports = {
  "packages/react-formio/**/*.{js,jsx}": [
    "cd packages/react-formio && yarn lint:fix"
  ],
  "packages/redux-utils/**/*.{ts,jsx}": [
    "cd packages/redux-utils && yarn lint:fix",
    "git add"
  ],
  "packages/tailwind-formio/**/*.{js,jsx}": [
    "cd packages/react-formio && yarn lint:fix",
    "git add"
  ],
  "**/*.{ts,js}": ["eslint --fix"],
  "**/*.{ts,js,json,md,yml,yaml}": ["prettier --write"]
};

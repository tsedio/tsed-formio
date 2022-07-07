/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts', '!src/mocks/**', '!src/__mock__/**'],
  coveragePathIgnorePatterns: [],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [require.resolve('./setupTest.js')],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', require('./swc.web.json')],
    '^.+\\.css$': require.resolve('./cssTransform.js'),
    '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)': require.resolve('./fileTransform.js')
  },
  transformIgnorePatterns: [ '^.+\\.module\\.(css|sass|scss)$'],
  modulePaths: ['<rootDir>/src'],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy'
  },
  moduleFileExtensions: [
    // Place tsx and ts to beginning as suggestion from Jest team
    // https://jestjs.io/docs/configuration#modulefileextensions-arraystring
    'tsx',
    'ts',
    'web.js',
    'js',
    'web.ts',
    'web.tsx',
    'json',
    'web.jsx',
    'jsx',
    'node'
  ],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname']
}

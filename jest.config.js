module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '\\.(js|jsx|ts|tsx)$': '@sucrase/jest-plugin',
  },
  testMatch: ['**/?(*.)+(spec|test).ts?(x)', '**/__tests__/**/*.ts?(x)'],
  setupFilesAfterEnv: ['./configuration/jest/jsdom.mocks.js'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    '@mui4u/core/src/styles.api': '<rootDir>/src/mui4u-core/src/styles.api',
    '@mui4u/(.*)': '<rootDir>/src/mui4u-$1/src',
  },
};

module.exports = {
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'jsx'],
    transform: {
      '^.+\\.jsx?$': ['babel-jest', { configFile: './babel-jest.config.js' }],
    },
    moduleNameMapper: {
      '\\.css$': 'identity-obj-proxy',
    },
    transformIgnorePatterns: [
        '/node_modules/(?!react-dnd)/', // Ignore node_modules except for react-dnd
      ],
    setupFilesAfterEnv: ['@testing-library/jest-dom', './tests/setupTests.js'],
  };
  

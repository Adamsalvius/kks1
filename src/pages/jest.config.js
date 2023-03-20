
const { JSDOM } = require("jsdom");
const dom = new JSDOM();
global.window = dom.window;
global.document = dom.window.document;
module.exports = {
    
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
      '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',
      '^@/(.*)$': '<rootDir>/src/$1'
    },
    setupFilesAfterEnv: [
      '<rootDir>/src/setupTests.js'
    ]
  };
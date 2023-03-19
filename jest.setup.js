const { JSDOM } = require("jsdom");
const dom = new JSDOM();
global.window = dom.window;
global.document = dom.window.document;
import { configure } from '@testing-library/react';

configure({ testIdAttribute: 'data-test-id' });

global.window = {};
global.document = {
  createElement: () => {},
  createTextNode: () => {},
  querySelector: () => {},
  querySelectorAll: () => {},
  getElementById: () => {},
  getElementsByClassName: () => {},
  getElementsByTagName: () => {},
  getElementsByName: () => {},
  body: {},
};
global.navigator = {
  userAgent: 'node.js',
};
/* eslint-env mocha */
const assert = require('assert');
const googleLogin = require('../../src/index');

describe('index', () => {
  it('should export a function', () => assert.strictEqual(typeof googleLogin, 'function'));

  it('should return a promise', () => assert.strictEqual(googleLogin.constructor.name, 'AsyncFunction'));
});

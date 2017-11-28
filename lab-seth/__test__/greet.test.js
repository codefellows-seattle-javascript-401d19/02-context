'use strict';

const greet = require('../lib/greet.js');

describe('greet.test.js', () => {
  describe('greet.greet', () => {

    test('greet should return "hello <name>" if no errors are present', () => {
      expect(greet.greet('world')).toEqual('hello world');
    });

    test('greet should return null if no errors are present', () => {
      expect(greet.greet(1234567)).toEqual(null);
    });
  });
});

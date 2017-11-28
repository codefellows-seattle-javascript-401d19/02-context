'use strict';

const Greet = module.exports = {};

Greet.greet = (string) => {
  if(string === '' || typeof string !== 'string')
    return null;

  return `hello ${string}`;
};

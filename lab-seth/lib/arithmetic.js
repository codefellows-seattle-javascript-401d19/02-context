'use strict';

const Arithmetic = module.exports = {};

Arithmetic.add = (x, y) => {
  if( typeof x !== 'number'  || typeof y !== 'number' )
    return null;

  return x + y;
};

Arithmetic.sub = (x, y) => {
  if( typeof x !== 'number'  || typeof y !== 'number' )
    return null;

  return y - x;
};

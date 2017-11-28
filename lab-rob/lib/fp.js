'use strict';

const fp = module.exports = {};

fp.map = (callback, collection) => [].map.call(collection, callback);
'use strict';

const fpCurry = module.exports = {};

fpCurry.type = function(choice, obj) {
  switch (choice) {
  case 'map':
    return Array.prototype.map.call(obj.collection, obj.callback);

  case 'filter':
    return Array.prototype.filter.call(obj.collection, obj.callback);

  case 'reduce':
    return Array.prototype.reduce.call(obj.collection, obj.callback, obj.initialState);

  case 'slice':
    return Array.prototype.slice.call(obj.collection, obj.begin, obj.end);
  }
};

'use strict';

const uuidv1 = require('uuid/v1');

function TagObject(name = '', age = 0){
  this.id = uuidv1();
  this.timestamp = new Date();
  this.name = name;
  this.age = age;
}

let taggedObject = new TagObject();
// console.log(taggedObject);

//using call
// let myCustomContext = {
//   extraContextValue : 'I was assigned earlier in the code',
// };
// console.log(myCustomContext);
// TagObject.call(myCustomContext);
// console.log(myCustomContext);

//using apply
// let myCustomContext = {
//   extraContextValue : 'I was assigned earlier in the code',
// };
// TagObject.apply(myCustomContext, ['Mario', 30]);

//using bind
let contextToBeBound = {};
let boundTaggedObject = TagObject.bind(contextToBeBound);
boundTaggedObject();
console.log(contextToBeBound);

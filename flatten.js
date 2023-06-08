const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(array) {
  const flattened = [];
  
  const flattenArray = function(array) {
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
  
      if (Array.isArray(item)) {
        flattenArray(item);
      } else {
        flattened.push(item);
      }
    }
  };
  
  flattenArray(array);
  return flattened;
};

const array = [1, [2, [3, 4], 5], 6, [7]];

const flattenedArray = flatten(array);
console.log(flattenedArray);

const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  const length = array.length;
  const middleIndex = Math.floor(length / 2);
  
  if (length % 2 === 0) {
    return array.slice(middleIndex - 1, middleIndex + 1);
  } else {
    return array.slice(middleIndex, middleIndex + 1);
  }
};


module.exports = middle;

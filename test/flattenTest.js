const flatten = require('../flatten');


const array = [1, [2, [3, 4], 5], 6, [7]];

const flattenedArray = flatten(array);
console.log(flattenedArray);

const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

// const asking = "hello";
// const result1 = letterPositions(asking);
// //console.log(result1);


const result1 = letterPositions("hello").e;
assertArraysEqual(result1, [1]);
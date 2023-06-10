const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

const result1 = letterPositions("hello").e;
assertArraysEqual(result1, [1]);
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed:  ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
    
const shirtObject1 = { color: "yellow", size: "medium" };
const shirtObject2 = { color: "yellow", size: "medium" };
const shirtObject3 = { color: "gold", size: "medium" };

assertObjectsEqual(shirtObject1, shirtObject2);
assertObjectsEqual(shirtObject1, shirtObject3);



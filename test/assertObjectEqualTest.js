const assertObjectsEqual = require('../assertObjectsEqual');

const shirtObject1 = { color: "yellow", size: "medium" };
const shirtObject2 = { color: "yellow", size: "medium" };
const shirtObject3 = { color: "gold", size: "medium" };

assertObjectsEqual(shirtObject1, shirtObject2);
assertObjectsEqual(shirtObject1, shirtObject3);

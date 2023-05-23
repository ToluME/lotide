/* eslint-disable func-style */
function eqArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
        
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
        
  return true;
}

function assertArraysEqual(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("✅✅✅ Arrays are equal:", array1, "==", array2);
  } else {
    console.log("🛑🛑🛑 Arrays are not equal:", array1, "!=", array2);
  }
}

function middle(array) {
  const length = array.length;
  const middleIndex = Math.floor(length / 2);
  
  if (length % 2 === 0) {
    return array.slice(middleIndex - 1, middleIndex + 1);
  } else {
    return array.slice(middleIndex, middleIndex + 1);
  }
}
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1]));

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1]), [1]);
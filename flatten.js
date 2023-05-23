/* eslint-disable func-style */
function flatten(array) {
  const flattened = [];
  
  function flattenArray(array) {
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
  
      if (Array.isArray(item)) {
        flattenArray(item);
      } else {
        flattened.push(item);
      }
    }
  }
  
  flattenArray(array);
  return flattened;
}

const array = [1, [2, [3, 4], 5], 6, [7]];

const flattenedArray = flatten(array);
console.log(flattenedArray);


function assertArraysEqual(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("✅✅✅ Arrays are equal:", array1, "==", array2);
  } else {
    console.log("🛑🛑🛑 Arrays are not equal:", array1, "!=", array2);
  }
}
    
// Copied eqArray function
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
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

const eqArrays = function(array1, array2) {
  // Checking if the arrays have the same length
  if (array1.length !== array2.length) {
    return false;
  }
  
  // Iterate through the elements of the arrays
  for (let i = 0; i < array1.length; i++) {
    // Compare the elements at each index
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  
  // If all elements matched, return true
  return true;
};

console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));


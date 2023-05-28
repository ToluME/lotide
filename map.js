const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
      
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
      
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("✅✅✅ Arrays are equal:", array1, "==", array2);
  } else {
    console.log("🛑🛑🛑 Arrays are not equal:", array1, "!=", array2);
  }
};

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// Test Case 1: Return an array with the first letters of each word
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

// Test Case 2: Return an array with the last letters of each word
const results2 = map(words, word => word[word.length - 1]);
assertArraysEqual(results2, ["d", "l", "o", "r", "m"]);

// Test Case 3: Return an array with the lengths of each word
const results3 = map(words, word => word.length);
assertArraysEqual(results3, [6, 7, 2, 5, 3]);

// Test Case 4: Return an array with the words in uppercase
const results4 = map(words, word => word.toUpperCase());
assertArraysEqual(results4, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);

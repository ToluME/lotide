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


const letterPositions = function(sentence) {
  const results = {};
  let counter = 0;
  for (let index of sentence) {
    if (index !== " ") {
      if (results[index]) {
        results[index].push(counter);
      } else {
        results[index] = [counter];
      }
    }
    counter++;
  }

  return results;
};

// const asking = "hello";
// const result1 = letterPositions(asking);
// //console.log(result1);


const result1 = letterPositions("hello").e;
assertArraysEqual(result1, [1]);
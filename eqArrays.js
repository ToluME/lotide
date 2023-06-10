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

module.exports = eqArrays;


const flatten = function(array) {
  const flattened = [];
  
  const flattenArray = function(array) {
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
  
      if (Array.isArray(item)) {
        flattenArray(item);
      } else {
        flattened.push(item);
      }
    }
  };
  
  flattenArray(array);
  return flattened;
};

module.exports = flatten;
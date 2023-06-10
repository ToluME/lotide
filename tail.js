const tail = function(a) {
  if (a.length <= 0) {
    return [];
  }
  return a.slice(1);
};

module.exports = tail;
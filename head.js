const assertEqual = require('./assertEqual');

const head = function(a) {
  if (a.length === 0) {
    return undefined;
  }
  return a[0];
};

module.exports = head;



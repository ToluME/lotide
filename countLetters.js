const assertEqual = require('./assertEqual');

const countLetters = function(sentence) {
  let letterCounts = {};
  for (let character of sentence) {
    if (character !== " ") { // Skip counting spaces
      if (letterCounts[character]) {
        letterCounts[character] += 1;
      } else {
        letterCounts[character] = 1;
      }
    }
  }
  return letterCounts;
};
  

const sentence = "Michael is my husband";
const result = countLetters(sentence);
console.log(result);

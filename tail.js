const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(a) {
  if (a.length <= 0) {
    return [];
  }
  return a.slice(1);
};

assertEqual(tail([1, 2, 3]).toString(), [2, 3].toString());
assertEqual(tail(['a', 'b', 'c']).toString(), ['b', 'c'].toString());
assertEqual(tail([]).toString(), [].toString());
assertEqual(tail([1]).toString(), [].toString());

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
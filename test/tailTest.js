const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
});

it("returns [] for [1]", () => {
  assert.deepEqual(tail([1]), []);
});

it("returns ['b', 'c'] for ['a', 'b', 'c']", () => {
  assert.deepEqual(tail(['a', 'b', 'c']), ['b', 'c']);
});


// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// assertEqual(tail([1, 2, 3]).toString(), [2, 3].toString());
// assertEqual(tail(['a', 'b', 'c']).toString(), ['b', 'c'].toString());
// assertEqual(tail([]).toString(), [].toString());
// assertEqual(tail([1]).toString(), [].toString());

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);
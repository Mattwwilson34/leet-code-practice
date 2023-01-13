/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // catch strings with <= 1 char and non even numbers of chars in string
  if (s.length < 2 || s.length % 2 !== 0) {
    return false;
  }

  const hash = new Map();

  hash.set("(", ")");
  hash.set("{", "}");
  hash.set("[", "]");

  let index = 0;

  // loop through string
  for (let i = 0; index < s.length; i++) {
    // make comparison using hash table
    if (s[index + 1] !== hash.get(s[index])) return false;

    // if it passes comparison update index value
    index += 2;
    console.log("index:", index);
    console.log("loop idex", i);
  }
  // if we made it throught he entire string all parens are correct
  return true;
};

// isValid("()[]{}");

var isValid2 = function (s) {
  // catch strings with <= 1 char and non even numbers of chars in string
  if (s.length < 2 || s.length % 2 !== 0) {
    return false;
  }

  const hash = {
    "(": 0,
    ")": 0,
    "{": 0,
    "}": 0,
    "[": 0,
    "]": 0,
  };

  for (let i = 0; i < s.length; i++) {
    hash[s[i]] += 1;
  }

  let sum = 0;
  let hashKeys = Object.keys(hash);

  hashKeys.forEach((key, i) => {
    if (i % 2 === 0) {
      if (hash[key] !== hash[hashKeys[i + 1]]) {
        return false;
      }
    }
    sum += hash[key];
  });

  return sum % 2 === 0;
};

console.log(isValid2("([)]"));

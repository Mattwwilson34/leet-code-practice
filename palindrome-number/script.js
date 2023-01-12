/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let backward = x.toString().split("").reverse().join("");
  return parseInt(backward) === x;
};

// This solution was suboptimal due to the conversion of the inter to a string.
// When revisiting this problem sovle it withou converting the integer to a string.

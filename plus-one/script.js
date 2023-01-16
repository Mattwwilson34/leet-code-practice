/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let n = digits.length - 1

  while (n >= 0) {
    let currDigit = digits[n]
    if (n === 0 && currDigit === 9) {
      digits[n] = 0
      return [1, ...digits]
    }
    if (currDigit === 9) {
      digits[n] = 0
      n--
    } else {
      digits[n] = digits[n] + 1;
      return digits
    }
  }
};


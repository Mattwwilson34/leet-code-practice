/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let space = " ";
  let substring = 0;
  let n = s.length - 1;
  let currChar = s[s.length - 1];

  for (let i = n; i >= 0; i--) {
    currChar = s[i];
    if (currChar === space && substring > 0) return substring;
    if (currChar !== space) substring += 1;
  }
  return substring;
};



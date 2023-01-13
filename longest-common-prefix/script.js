/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = "";

  // will iterate though all chars of the first string in strs
  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      let comparisonChar = strs[j][i];
      if (char !== comparisonChar) return prefix;
    }
    // if we make it out of the seond loop all chars matches update prefix
    prefix = prefix + char;
  }
  // if we our outside of all loops return the prefix
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

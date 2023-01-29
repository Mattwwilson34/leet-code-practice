/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let solution = -1
  let map = new Map()
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      let val = map.get(s[i])
      val.push(i)
      map.set(s[i], val);
    }
    else {
      map.set(s[i], [i])
    }
  }
  for (let [key, value] of map) {
    if (value.length === 1) {
      solution = value[0];
      break
    }
  }
  return solution
};

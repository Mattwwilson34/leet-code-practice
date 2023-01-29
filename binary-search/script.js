/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let low = 0
  let high = nums.length - 1

  function bSearch(h, l) {
    let mid = l + (Math.floor((h - l) / 2))

    if (l > h) return -1

    if (nums[mid] === target) {
      return mid
    }

    if (nums[mid] < target) {
      l = mid += 1;
    } else {
      h = mid -= 1;
    }
    return bSearch(h, l)
  }

  return bSearch(high, low)
};

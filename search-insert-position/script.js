/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (target < nums[0]) return 0;
  if (target > nums[nums.length - 1]) return nums.length;

  let n = nums.length - 1;
  let high = n;
  let low = 0;
  let mid = Math.floor((high + low) / 2);

  while (target !== nums[mid]) {
    mid = Math.floor((high + low) / 2);
    let curr = nums[mid];

    if (target > curr && target < nums[mid + 1]) {
      return mid + 1;
    } else if (target < curr) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return mid;
};

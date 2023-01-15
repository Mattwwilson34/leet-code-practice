/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  //
  // keep track of number of array indexes = val
  let k = 0;
  // loop over nums array
  for (let i = 0; i < nums.length; i++) {
    //
    // keep track of current index of array = val
    let temp = 0;

    if (nums[i] === val && i === nums.length - 1) {
      nums[i] = "_";
      temp = nums[nums.length - 1 - k];
      nums[nums.length - 1 - k] = nums[i];
      nums[i] = temp;
      k++;
    } else if (nums[i] === val) {
      nums[i] = "_";
      temp = nums[nums.length - 1 - k];
      nums[nums.length - 1 - k] = nums[i];
      nums[i] = temp;
      k++;
    }
  }
  k = nums.length - k;
  console.log(nums);
  console.log("k: ", k);
};

let nums = [3, 2, 2, 3];

let nums2 = [0, 1, 2, 2, 3, 0, 4, 2];

removeElement(nums2, 2);

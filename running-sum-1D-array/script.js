// Loop through entire array and add previous numbers
// Each time we sum the numbers push them to an array
// edge cases: empty array, array is length of 1

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  // handle edge cases
  // if array empty
  if (nums.length < 1) {
    return console.log("Array is empty");
  }
  // if array has one element
  if (nums.length === 1) {
    return [nums[0]];
  }
  // create a variable to store our sum
  let sum = 0;
  // create an array to hold our running sums and initialize it to the first number in nums
  let runningSumArray = [];

  // create a loop to move through each element of the array
  for (let i = 0; i < nums.length; i++) {
    //
    // add the current value of the array to the sum
    sum += nums[i];
    // push this sum into the runningSum array
    runningSumArray.push(sum);
  }
  // if we have exited to for loop then we have moved through all items in nums return runningSumArray
  return runningSumArray;
};

nums1 = [1, 2, 3, 4];
nums2 = [1, 1, 1, 1, 1];
nums3 = [3, 1, 2, 10, 1];

console.log(runningSum(nums2));

// Time complexity = O(n) where n is the number of elements in the nums array
// Space complexity = O(n) where n is the number of elements in the nums array

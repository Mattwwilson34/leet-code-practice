function solution(nums) {
  let sum = nums.reduce((prev, cur) => prev + cur);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    console.log("i", i);
    console.log("leftSum", leftSum);
    console.log("rightSum", sum - leftSum - nums[i]);

    if (leftSum === sum - leftSum - nums[i]) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
}
console.log(solution([1, 7, 3, 6, 5, 6]));

array = [1, 7, 3, 6, 5, 6];


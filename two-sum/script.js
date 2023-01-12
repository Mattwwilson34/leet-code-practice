const testCase = [1, 3, 8, 15];

// Time complexity: O(n^2)
// Space complexity O(1)

const twoSumBruteforce = (nums, target) => {
  console.time("Brute Force");
  //
  let solution = [];
  for (let i = 0; i < nums.length; i++) {
    //
    for (let j = i + 1; j < nums.length; j++) {
      //
      let num1 = nums[i];
      let num2 = nums[j];
      let sum = num1 + num2;

      if (sum === target) {
        solution.push(i, j);
      }
    }
  }
  console.timeEnd("Brute Force");
  return solution;
};

// Time complexity: O(n)
// Space complexity O(n)

const twoSum = (nums, target) => {
  console.time("hashmap");
  let hashmap = new Map();

  for (let i = 0; i < nums.length; i++) {
    hashmap.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (hashmap.has(complement) && hashmap.get(complement) !== i) {
      console.timeEnd("hashmap");
      return [i, hashmap.get(complement)];
    }
  }
};

console.log(twoSumBruteforce(testCase, 9));

console.log(twoSum(testCase, 9));

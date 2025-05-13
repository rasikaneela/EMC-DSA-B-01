// https://leetcode.com/problems/maximum-subarray/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum = 0,
    max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    if (max < sum) {
      max = sum;
    }

    if (sum < 0) {
      sum = 0;
    }
  }

  return max;
};

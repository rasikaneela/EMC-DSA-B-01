// https://leetcode.com/problems/rotate-array/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;

  // 1. rotate -> 0 - n-1
  // 2. rotate -> 0 - k-1
  // 3. rotate -> k - n-1

  function swap(arr, i, j) {
    let left = i,
      right = j;

    while (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;

      left++;
      right--;
    }
  }

  swap(nums, 0, nums.length - 1);
  swap(nums, 0, k - 1);
  swap(nums, k, nums.length - 1);

  return nums;
};

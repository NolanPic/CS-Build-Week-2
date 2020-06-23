/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // loop thru for first index
  //      inside first loop, loop for second index
  //          if the combination is not on the same index,
  //              if sum of the two indexes equals the target, return indexes
  // return no match found

  // This solution is O(n^2)

  // loop for first index
  for (let i = 0; i < nums.length; i++) {
    // loop for second index
    for (let j = 0; j < nums.length; j++) {
      // we now have access to every combination with the two indexes

      // ensure we are not on the same index
      if (i !== j) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }

  // target was not found
  return null;
};

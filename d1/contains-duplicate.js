/*
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]
Output: true
Example 2:

Input: [1,2,3,4]
Output: false
Example 3:

Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // use a set to store occurances
  let occurances = new Set();

  for (i = 0; i < nums.length; i++) {
    // current number
    const num = nums[i];

    if (occurances.has(num)) {
      // this is a duplicate, done!
      return true;
    } else {
      // this is not a duplicate, add to occurances
      occurances.add(num);
    }
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));

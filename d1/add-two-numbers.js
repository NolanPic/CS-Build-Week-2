/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // add both LLs to stacks
  // pop a value from each
  // concat those values to a string for each LL
  // convert to int and add the two
  // split answer into string and create a new LL out of each char

  // create the stacks
  const l1Stack = [];
  const l2Stack = [];

  let cur1 = l1;
  let cur2 = l2;

  // we will assume that these LLs have the same length
  while (cur1 && cur2) {
    l1Stack.push(cur1.val);
    l2Stack.push(cur2.val);
    cur1 = cur1.next;
    cur2 = cur2.next;
  }

  // concat the numbers together
  let num1Str = "";
  let num2Str = "";

  while (l1Stack.length && l2Stack.length) {
    num1Str += l1Stack.pop();
    num2Str += l2Stack.pop();
  }

  // add of the two numbers
  const answer = Number(num1Str) + Number(num2Str);

  // convert the answer into a LL
  let prevNode = null;
  let nextNode = null;

  // answer -> 807
  // "807".split()
  // ["8", "0", "7"]
  // 7 -> 0 -> 8 LL
  // return the 7 node
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

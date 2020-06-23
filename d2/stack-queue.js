/*

Implement the following operations of a queue using stacks.

push(x) -- Push element x to the back of queue.
pop() -- Removes the element from in front of queue.
peek() -- Get the front element.
empty() -- Return whether the queue is empty.
Example:

MyQueue queue = new MyQueue();

queue.push(1);
queue.push(2);  
queue.peek();  // returns 1
queue.pop();   // returns 1
queue.empty(); // returns false
Notes:

You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).
*/

/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  // need 2 arrays, one for holding the actual queue,
  // the other for holding values temporarily for manipulating the queue
  this.queue = [];
  this.tempStack = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  // empty the queue into the temp stack
  while (this.queue.length > 0) {
    // pop the item from the top of the queue--"shift" does this
    const item = this.queue.shift();

    // add the item to the top of the temp stack--"unshift" does this
    this.tempStack.unshift(item);
  }

  // the queue should be empty now
  // Add the value we want to push.
  // This effectively adds the item
  // to the back of the queue
  this.queue.unshift(x);

  // add all the values back on
  while (this.tempStack.length > 0) {
    // pop the item from the top of the temp stack
    const item = this.tempStack.shift();

    // add the item to the top of the queue
    this.queue.unshift(item);
  }
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.data.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

/*Description //binary Tree Level Order Traversal

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Example
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
//II
Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i.e., from left to right, level by level from leaf to root).   
Input: root = [3,9,20,null,null,15,7]
Output: [[15,7],[9,20],[3]]
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
function LevelOrder(root) {
  if (root === null) return null;
  let queue = [root];
  let order = [];
  while (queue.length) {
    let len = queue.length;
    order.push(queue.map((node) => node.val));
    while (len--) {
      let current = queue.shift();
      if (current.right) queue.push(current.right);
      if (current.left) queue.push(current.left);
    }
  }
  return order;
}
//bottom-Up
function LevelOrderBottomUp(root) {
  if (root === null) return null;
  let queue = [root];
  let order = [];
  while (queue.length) {
    let len = queue.length;
    let currentLevel = [];
    for (let i = 0; i < len; i++) {
      let current = queue.shift();
      currentLevel.push(current.val);
      if (current.right) queue.push(current.right);
      if (current.left) queue.push(current.left);
    }
    order.push(currentLevel);
  }
  return order.reverse();
}
function LevelOrderRecursive(root) {
  return helper([], root, 0);
}

function helper(order, root, level) {
  if (root) {
    if (!order[level]) order[level] = [];
    order[level].push(root.val);
    helper(order, root.left, level + 1);
    helper(order, root.right, level + 1);
  }
  return order;
}
const a = new Node(5);
const b = new Node(-1);
const c = new Node(7);
const d = new Node(11);
const e = new Node(4);
const f = new Node(8);
const g = new Node(0);
let m = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
c.left = g;

console.log(LevelOrderRecursive(a)); //[ [ 5 ], [ -1, 7 ], [ 11, 4, 0, 8 ] ]
console.log(LevelOrderRecursive(m)); //[[6]]
console.log(LevelOrderBottomUp(a)); //[ [ 8, 0, 4, 11 ], [ 7, -1 ], [ 5 ] ]

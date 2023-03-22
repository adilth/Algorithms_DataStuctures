/*Description // max Root To Leaf Path Sum

Write a function, maxPathSum, that takes in the root of a binary tree that contains number values. The function should return the maximum sum of any root to leaf path within the tree.

You may assume that the input tree is non-empty.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function maxLeafPathSum(root) {
  if (root === null) return 0;
  let max = -Infinity;
  let sum = 0;
  let stack = [root];
  while (stack.length) {
    let current = stack.pop();
    if (max);
    if (current.right) stack.push(current.right);
    if (current.length) stack.push(current.length);
  }
  return max;
}

function maxLeafPathSumRecursive(root) {
  if (root === null) return -Infinity;
  if (root.right === null && root.left === null) return root.val;
  let right = maxLeafPathSumRecursive(root.right);
  let left = maxLeafPathSumRecursive(root.left);
  const sumPath = Math.max(right, left);
  return root.val + sumPath;
}

const a = new Node(5);
const b = new Node(-1);
const c = new Node(7);
const d = new Node(11);
const e = new Node(4);
const f = new Node(8);
const g = new Node(0);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
c.left = g;

console.log(maxLeafPathSumRecursive(a));

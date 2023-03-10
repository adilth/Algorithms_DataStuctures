/*Description // Tree min Value

Write a function, treeMinValue, that takes in the root of a binary tree that contains number values. The function should return the minimum value within the tree.

You may assume that the input tree is non-empty.
*/
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function treeMinValueDepthFirst(root) {
  if (root === null) return null;
  let min = Infinity;
  let stack = [root];
  while (stack.length) {
    let current = stack.pop();
    if (min > current.val) min = current.val;
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return min;
}
function treeMinValueRecursive(root) {
  if (root === null) return Infinity;
  let left = treeMinValueRecursive(root.left);
  let right = treeMinValueRecursive(root.right);

  return Math.min(root.val, left, right);
}
function treeMinValueBreadthFirst(root) {
  if (root === null) return null;
  let min = Infinity;
  let queue = [root];
  while (stack.length) {
    let current = queue.shift();
    if (min > current.val) min = current.val;
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return min;
}

const a = new Node(5);
const b = new Node(-32);
const c = new Node(7);
const d = new Node(11);
const e = new Node(4);
const f = new Node(8);
const g = new Node(3);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
c.left = g;

console.log(treeMinValueDepthFirst(a)); //3
console.log(treeMinValueRecursive(a)); //3

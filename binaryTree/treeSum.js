/*Description //Tree sum
Write a function, treeSum, that takes in the root of a binary tree that contains number values. The function should return the total sum of all values in the tree.
*/
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function treeSumDepthFirst(root) {
  if (root === null) return 0;
  let sum = 0;
  let stack = [root];
  while (stack.length) {
    let current = stack.pop();
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
    sum += current.val;
  }
  return sum;
}
function treeSumDepthFirstRecursive(root) {
  if (root === null) return 0;
  let sum = root.val;

  sum += treeSumDepthFirst(root.left) + treeSumDepthFirst(root.right);
  return sum;
}

function treeSumBreadthFirst(root) {
  if (root === null) return 0;
  let sum = 0;
  let queue = [root];
  while (queue.length) {
    let current = queue.shift();
    if (current.right) queue.push(current.right);
    if (current.left) queue.push(current.left);
    sum += current.val;
  }
  return sum;
}

const a = new Node(5);
const b = new Node(7);
const c = new Node(7);
const d = new Node(8);
const e = new Node(1);
const f = new Node(8);
const g = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
c.left = g;

console.log(treeSumDepthFirst(a));
console.log(treeSumDepthFirstRecursive(a));

const l = new Node(3);
const j = new Node(11);
const k = new Node(4);
const o = new Node(4);
const n = new Node(-2);
const m = new Node(1);

l.left = j;
l.right = k;
j.left = o;
j.right = n;
k.right = m;
console.log(treeSumDepthFirstRecursive(l));

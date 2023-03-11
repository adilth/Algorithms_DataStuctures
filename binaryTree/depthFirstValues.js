/*Description //depth first values
Write a function, depthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in depth-first order.

Hey. This is our first binary tree problem, so you should be liberal with watching the Approach and Walkthrough. Be productive, not stubborn. -AZ

*/
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function getAllValue(root) {
  if (root === null) return [];
  let stack = [root];
  let value = [];
  while (stack.length > 0) {
    let current = stack.pop();
    if (current.right !== null) stack.push(current.right);
    if (current.left !== null) stack.push(current.left);
    value.push(current.val);
  }
  return value;
}

function depthFirstValues(root) {
  if (root === null) return [];
  const left = depthFirstValues(root.left);
  const right = depthFirstValues(root.right);
  return [root.val, ...left, ...right];
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

console.log(getAllValue(a));
//output
//[5, 7, 8, 1, 7, 1, 8];

const i = new Node("i");
const j = new Node("j");
const k = new Node("k");
const m = new Node("m");
const n = new Node("n");
const o = new Node("o");

i.left = j;
i.right = k;
j.left = m;
j.right = n;
k.right = o;

//      i
//    /   \
//   j     k
//  / \     \
// m   n     o

console.log(depthFirstValues(i));
//    -> ['i', 'j', 'm', 'n', 'k', 'o']

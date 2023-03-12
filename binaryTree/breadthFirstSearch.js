/*Description //Breadth first Values

Write a function, breadthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in breadth-first order.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function breadthFirstValues(root) {
  if (root === null) return [];
  let queue = [root];
  let values = [];
  while (queue.length) {
    let shift = queue.shift();
    values.push(shift.val);
    if (shift.right) queue.push(shift.right);
    if (shift.left) queue.push(shift.left);
  }
  return values;
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

console.log(breadthFirstValues(a));
//output
//[5, 7, 7, 8, 1, 1, 8];

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

console.log(breadthFirstValues(i));
//[ 'i', 'k', 'j', 'o', 'n', 'm' ]

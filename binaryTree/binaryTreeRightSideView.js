/*Description //tree Right Side View 
Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
function rightSideView(root) {
  if (root == null) return null;
  let queue = [root];
  let leafs = [];
  while (queue.length) {
    // let len = queue.length;
    let current = queue.shift();
    leafs.push(current.val);

    if (current.right) queue.push(current.right);
    // }
  }
  return leafs;
}

function rightSideViewRec(root) {
  if (root == null) return [];
  let right = rightSideView(root.right);
  return [root.val, ...right];
}

const a = new Node(5);
const b = new Node(-1);
const c = new Node(7);
const d = new Node(11);
const e = new Node(4);
const f = new Node(8);
const g = new Node(0);
const i = new Node(22);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
c.left = g;
f.right = i;
console.log(rightSideView(a)); //[ 5, 7, 8, 22 ]
console.log(rightSideViewRec(a)); //[ 5, 7, 8, 22 ]
let root;
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.right.left.right = new Node(8);

console.log(rightSideView(root)); //[ 1, 3, 7 ]

/**Description //  Populating Next Right Pointers in Each Node

You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:
 * @param {Node} root
 * @return {Node}
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }
  print() {
    let root = this;
    let res = "";
    while (root) {
      let current = root;
      console.log(`level root ${root.val} `);
      root = null;
      while (current) {
        if (root === null) {
          if (current.left) root = current.left;
          else if (current.right) root = current.right;
        }
        console.log(`${current.next && current.next.val}`);
        current = current.next;
      }
    }
  }
}

//bottom-Up
function connectTreeLevelOrderSibling(root) {
  if (root === null) return null;
  let queue = [root];

  while (queue.length) {
    let len = queue.length;
    let prevNode = null;
    for (let i = 0; i < len; i++) {
      let current = queue.shift();
      if (prevNode) {
        prevNode.next = current;
      }
      prevNode = current;

      if (current.right) queue.push(current.right);
      if (current.left) queue.push(current.left);
    }
  }
  return root;
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
var connect = function (root) {
  let ptr = root;
  while (root && root.left) {
    let temp = root;
    while (temp) {
      temp.left.next = temp.right;
      temp.right.next = temp.next ? temp.next.left : null;
      temp = temp.next;
    }
    root = root.left;
  }
  return ptr;
};
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

console.log(connect(a));

a.print();

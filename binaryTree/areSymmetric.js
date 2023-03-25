/*Description //are Symmetric
given a binary tree root check if it's symmetric around the center (a mirror of itself)

*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function areSymmetric(root1, root2) {
  if (
    (!root1 && root2) ||
    (root1 && !root2) ||
    (root1 && root2 && root2.val !== root1.val)
  ) {
    return false;
  }
  if (root1 && root2) {
    return (
      areSymmetric(root1.left, root2.right) &&
      areSymmetric(root1.right, root2.left)
    );
  }
  return true;
}

function isSymmetric(root) {
  if (!root) return true;
  return areSymmetric(root.left, root.right);
}

const a = new Node(5);
const b = new Node(7);
const c = new Node(7);
const d = new Node(8);
const e = new Node(1);
const f = new Node(8);
const j = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
c.left = j;
console.log(a);
console.log(isSymmetric(a));

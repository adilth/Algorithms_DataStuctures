/*Description //Tree Leafs
git all leaf nodes in tree in array format
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
function treeLeafs(root) {
  if (root == null) return null;
  let queue = [root];
  let leafs = [];
  while (queue.length) {
    let len = queue.length;
    leafs.push(queue.map((node) => node.val));
    while (len--) {
      let current = queue.shift();
      if (current.right) queue.push(current.right);
      if (current.left) queue.push(current.left);
    }
  }
  return leafs[leafs.length - 1];
}

const a = new Node(5);
const b = new Node(-1);
const c = new Node(7);
const d = new Node(11);
const e = new Node(4);
const f = new Node(8);
const g = new Node(0);
const i = new Node(3);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
c.left = g;
// f.right = i;

console.log(treeLeafs(a)); //[ 8, 0, 4, 11 ]

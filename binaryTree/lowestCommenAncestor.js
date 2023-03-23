/**Description //Lowest Comment Ancestor

get the lowest comment ancestor for two node the lowest parent 
*@param {node String or number} root node
*@param {node String or number} p
*@param {node String or number} q
*@return {node String or number} 
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) return root;

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  return left && right ? root.val : left || right;
}

const a = new Node(5);
const b = new Node(7);
const c = new Node(0);
const d = new Node(8);
const e = new Node(1);
const f = new Node(9);
const g = new Node(6);
const i = new Node(3);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
c.left = g;
// b.right = i;
console.log(lowestCommonAncestor(a, e, d));

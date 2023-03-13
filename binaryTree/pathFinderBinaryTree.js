/*Description //Path Finder 
find the path to the target node and return the path in array format

*/
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function PathFinder(root, target) {
  if (root === null) return null;
  const stack = [[root, [root.val]]];
  while (stack.length) {
    const [node, path] = stack.pop();
    if (node.val === target) return path;
    if (node.left) stack.push([node.left, path.concat(node.left.val)]);
    if (node.right) stack.push([node.right, path.concat(node.right.val)]);
  }
  return null;
}
function PathFinderRec(root, target) {
  let res = [];
  helper(root, target, res);
  return res;
}
const helper = (root, target, res) => {
  if (root === null) return;
  res.push(root.val);
  if (root.val === target) return true;
  if (helper(root.left, target, res)) return true;
  if (helper(root.right, target, res)) return true;
  res.pop();
  return false;
};
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

console.log(getAllValue(a));
console.log(PathFinder(a, 8));
console.log(PathFinderRec(a, 8));

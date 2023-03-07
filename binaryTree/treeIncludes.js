/*Description // tree Includes
Write a function, treeIncludes, that takes in the root of a binary tree and a target value. The function should return a boolean indicating whether or not the value is contained in the tree.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
function treeIncludesDepthFirst(root, target) {
  if (root === null) return false;
  let queue = [root];
  while (queue.length) {
    let current = queue.pop();
    if (current.val === target) return true;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return false;
}
function treeIncludesDepthFirstRecursive(root, target) {
  if (root === null) return false;
  if (root.val === target) return true;
  return (
    treeIncludesDepthFirstRecursive(root.left, target) ||
    treeIncludesDepthFirstRecursive(root.right, target)
  );
}

function treeIncludesBreadthFirst(root, target) {
  if (root === null) return false;
  let queue = [root];
  while (queue.length) {
    let current = queue.shift();
    if (current.val === target) return true;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return false;
}

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

console.log(treeIncludesDepthFirst(i, "o")); //true
console.log(treeIncludesDepthFirst(i, "l")); //false
console.log(treeIncludesDepthFirstRecursive(i, "m")); //true
console.log(treeIncludesBreadthFirst(i, "n")); //true

/*Description // InOrder Successor In BTS
Given a BST, find the inorder successor of a given key in it. If the given key does not lie in the BST, then return the next greater node (if any) present in

*/
class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
/*
function inOrderSuccessor(root, p) {
  if (!root) return null;
  if (p.right) {
    let curr = p.right;
    let prev = null;
    while (curr) {
      prev = curr;
      curr = curr.left;
    }
    return prev;
  }
  let curr = root;
  let prev = null;
  while (curr) {
    if (p.val < curr.val) {
      prev = curr;
      curr = curr.left;
    } else {
      prev = curr;
      curr = curr.right;
    }
  }
  return prev;
}
*/
function inOrderSuccessor(root, n) {
  // step 1 of the above algorithm
  if (n.right != null) return minValue(n.right);

  let succ = null;

  // Start from root and search for
  // successor down the tree
  while (root != null) {
    if (n.val < root.val) {
      succ = root;
      root = root.left;
    } else if (n.val > root.val) root = root.right;
    else break;
  }
  return succ;
}

function minValue(node) {
  let current = node;

  /* loop down to find the leftmost leaf */
  while (current.left != null) {
    current = current.left;
  }
  return current;
}

let root = new Node(7);
root.left = new Node(11);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(15);
// root.right.right.right = new Node(11);

console.log(inOrderSuccessor(root, root.left));

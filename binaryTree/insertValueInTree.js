/*Description //Insert into a Binary Search Tree
You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function insertInToBST(root, val) {
  let node = new Node(val);
  if (root === null) return node;
  let cur = root;
  let prev = null;
  while (cur) {
    console.log(prev);

    if (cur.val < val) {
      prev = cur;
      cur = root.right;
    } else {
      prev = cur;
      cur = root.left;
    }
  }
  if (prev.val > val) {
    prev.left = node;
  } else {
    prev.right = node;
  }
  return root;
}

function insertInToBST(root, val) {
  let node = new Node(val);
  if (root === null) return node;
  if (root.val < val) {
    root.right = insertInToBST(root.right, val);
  } else if (root.val > val) {
    root.left = insertInToBST(root.left, val);
  }
  // your code here
  return root;
}
let root = new Node(5);
root.left = new Node(8);
root.right = new Node(12);
root.left.left = new Node(22);
root.left.right = new Node(66);
root.right.right = new Node(9);

console.log(insertInToBST(root, 13));
console.log(root.right);

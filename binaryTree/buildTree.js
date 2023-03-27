/*Description //Construct Binary Tree from Preorder and Inorder Traversal

Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

 example
 Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function buildTree(preOrder, inOrder) {
  if (!preOrder.length || !inOrder.length) return null;
  let root = new Node(preOrder[0]);
  let mid = inOrder.indexOf(root.val);
  root.left = buildTree(preOrder.slice(0, mid + 1), inOrder.slice(0, mid));
  root.right = buildTree(preOrder.slice(mid + 1), inOrder.slice(mid + 1));
  return root;
}
function buildTree(preOrder, inOrder) {
  let p = 0;
  let i = 0;
  let build = function (stop) {
    if (inOrder[i] != stop) {
      let root = new Node(preOrder[p++]);
      root.left = build(root.val);
      i++;
      root.right = build(stop);
      return root;
    }
    return null;
  };
  return build();
}
console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));

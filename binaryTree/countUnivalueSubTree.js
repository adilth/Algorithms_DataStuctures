/*Description // Counting Univalued Subtrees

We are given a binary tree. The challenge is to count all the univalued subtrees in the tree. Just to recall, a subtree is any node along with its descendants. The root and all its descendants form the entire tree. A univalued subtree is therefore a subtree in which all the nodes have the same keys. The figure below shows all the univalued subtrees of the binary tree of the previous figure.
Can you count all the univalued subtrees in a binary tree, as shown in the figure below?

*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function countUniValueSubtree(root) {
  if (root === null) return 0;
  let count = 0;
  const helper = (root) => {
    if (root.left === null && root.right === null) {
      count++;
      return true;
    }
    let isTrue = true;
    if (root.left) {
      isTrue = helper(root.left) && isTrue && root.val === root.left.val;
    }
    if (root.right) {
      isTrue = helper(root.right) && isTrue && root.val === root.right.val;
    }
    if (isTrue) count++;
    return isTrue;
  };
  helper(root);
  return count;
}

let root = new Node(5);
root.left = new Node(4);
root.right = new Node(5);
root.left.left = new Node(1);
root.left.right = new Node(4);
root.right.right = new Node(5);

console.log(countUniValueSubtree(root)); //4

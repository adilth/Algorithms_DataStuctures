/*Description //Binary Search Tree 




*/
class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }
  insert(data) {
    let newNode = new Node(data);
    if (this.root === null) return (this.root = newNode);
    let current = this.root;
    while (current) {
      if (current.val === data) return undefined;
      if (current.val > data) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  findNode(val) {
    if (this.root === null) return undefined;
    let stack = [this.root];
    while (stack.length) {
      let current = stack.pop();
      if (current.val === val) return current;
      if (current.right) stack.push(current.right);
      if (current.left) stack.push(current.left);
    }
    return undefined;
  }
  removeNode(cur = this.root, val) {
    if (cur === val) return null;
    if (cur.val > val) {
      cur.left = this.removeNode(cur.left, val);
      return;
    } else if (cur.val < val) {
      cur.right = this.removeNode(cur.right, val);
      // return cur;
    } else {
      //if it has one child
      if (cur.left === null) return cur.right;
      if (cur.right === null) return cur.left;
      var min = cur.right;

      while (min.left != null) {
        succParent = min;
        min = min.left;
      }
      // cur.val = this.minValue(cur.right);
      cur.right = this.removeNode(cur.right, min.val);
    }

    return cur;
  }
  totalNode() {
    if (!this.root) return 0;
    let left = totalNodes(this.root.left);
    let right = totalNodes(this.root.right);
    return 1 + left + right;
  }
  minValue(root = this.root) {
    let min = root.val;
    while (root.left != null) {
      min = root.left.val;
      root = root.left;
    }
    return min;
  }
}
const getLeftMostNode = (root) => {
  if (!root) return null;
  let node = getLeftMostNode(root.left);
  return node ? node : root;
};
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */

var deleteNode = function (root, key) {
  if (!root) return null;
  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else {
    if (!root.left) return root.right;
    if (!root.right) return root.left;
    let suc_node = getLeftMostNode(root.right);
    root.val = suc_node.val;
    root.right = deleteNode(root.right, suc_node.val);
  }
  return root;
};

let root = new BinarySearchTree();

root.insert(4);
root.insert(8);
root.insert(9);
root.insert(1);
root.insert(2);
root.insert(7);

console.log(deleteNode(root.root, 4));
console.log(root.root);

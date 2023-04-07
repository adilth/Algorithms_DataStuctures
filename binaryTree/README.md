# Binary Tree

The tree represents the nodes connected by edges. We will discuss binary tree or binary search tree specifically.

Binary Tree is a special data structure used for data storage purposes. A binary tree has a special condition that each node can have a maximum of two children. A binary tree has the benefits of both an ordered array and a linked list as search is as quick as in a sorted array and insertion or deletion operations are as fast as in a linked list.

## Structure of a Binary Tree

A binary tree is made up of nodes, each of which contains a value and pointers to its left and right children (if they exist). The topmost node in a binary tree is called the root, and it has no parent node. Each node in a binary tree can have at most two children, so the tree is called "binary".

The left child of a node is the node that appears directly to the left of it, and the right child is the node that appears directly to the right of it. If a node has no left or right child, the pointer to that child is null.

Here's an example of a binary tree:
![Binary Tree](https://www.tutorialspoint.com/data_structures_algorithms/images/binary_tree.jpg)

## Important Terms

The following are the important terms concerning trees.

- Path − Path refers to the sequence of nodes along the edges of a tree.

- Root − The node at the top of the tree is called the root. There is only one root per tree and one path from the root node to any node.

- **Parent** − Any node except the root node has one edge upward to a node called a parent.

- **Child** − The node below a given node connected by its edge downward is called its child node.

- **Leaf** − The node which does not have any child node is called the leaf node.

- **Subtree** − Subtree represents the descendants of a node.

- **Visiting** − Visiting refers to checking the value of a node when control is on the node.

- **Traversing** − Traversing means passing through nodes in a specific order.

- **Levels** - The level of a node represents the generation of a node. If the root node is at level 0, then its next child node is at level 1, its grandchild is at level 2, and so on.

- **keys** - the Key represents a value of a node based on which a search operation is to be carried out for a node.

## Traversing a Binary Tree

There are several ways to traverse a binary tree, which means visiting each node in the tree exactly once. The three most common ways are:

### **In-order Traversal**

`an in-order traversal of the example tree: 2 3 4 5 6 7 8`

In an in-order traversal, the left subtree is visited first, then the root, and then the right subtree. This produces the nodes in ascending order (if the values in the tree are ordered).

### Pre-order Traversal

In a pre-order traversal, the root node is visited first, then the left subtree, and then the right subtree.

`pre-order traversal of the example tree: 5 3 2 4 7 6 8`

### Post-order Traversal

In a post-order traversal, the left subtree is visited first, then the right subtree, and then the root.

`post-order traversal of the example tree: 2 4 3 6 8 7 5`

## Applications of Binary Trees

Binary trees have many applications in computer science, including:

- Binary search trees: a binary tree where the values in the left subtree are less than the value in the root, and the values in the right subtree are greater than the value in the root. This allows for efficient searching and sorting of data.
- Huffman coding: a compression algorithm that uses a binary tree to represent characters in a message.
- Expression trees: a binary tree used to represent mathematical expressions, with operators as internal nodes and operands as leaves.
- Decision trees: a binary tree used in machine learning to make decisions based on a set of input features.

## Conclusion

Binary trees are a fundamental data structure in computer science, with many applications in algorithms, data structures, and machine learning. Understanding binary trees and their properties is an important part of any computer science curriculum.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Cycle_sort)
- [GeeksForGeeks](https://www.geeksforgeeks.org/binary-tree-data-structure/)

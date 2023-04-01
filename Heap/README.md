# Heaps Max Heap and Min Heap

A heap is a specialized tree-based data structure that is used to implement priority queues, where elements with higher priority are dequeued first. A heap can be either a Max Heap or a Min Heap.

## Max Heap

In a Max Heap, the value of each parent node is greater than or equal to the values of its children nodes. Therefore, the root node of the heap has the largest value.

![Maxheap](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Max-Heap-new.svg/1200px-Max-Heap-new.svg.png)

The Max Heap property ensures that the maximum element can be quickly accessed and removed from the heap. Max Heap is used in applications where we need to find the maximum element quickly, such as finding the k-largest elements in an array.

## Min Heap

In a Min Heap, the value of each parent node is less than or equal to the values of its children nodes. Therefore, the root node of the heap has the smallest value.

![Min heap](https://media.geeksforgeeks.org/wp-content/uploads/20201106115157/MinHeap.jpg)

The Min Heap property ensures that the minimum element can be quickly accessed and removed from the heap. Min Heap is used in applications where we need to find the minimum element quickly, such as finding the k-smallest elements in an array.

## Operations

The basic operations that can be performed on a heap are insertion and deletion. In a Max Heap, insertion is done by adding the new element at the bottom of the heap and then bubbling it up to its correct position. Deletion is done by removing the root node and then bubbling down the new root node to its correct position. The same operations are performed in a Min Heap, but the bubbling up and down is done in the opposite direction.

## Complexity

The time complexity of inserting an element into a heap is O(log n), where n is the number of elements in the heap. The time complexity of deleting the maximum (or minimum) element from a heap is also O(log n).

## References

- [wikipedia](https://en.wikipedia.org/wiki/Heap_%28data_structure%29)
- [GeeksForGeeks](https://www.geeksforgeeks.org/heap-data-structure/)

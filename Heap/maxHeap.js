/*Description //max Heap 

write mac heap class with there method 
*/

class MaxHeap {
  constructor() {
    this.values = [];
    this.size = 0;
  }
  getParentIdx(index) {
    return Math.floor(index - 1 / 2);
  }
  getLeftIdx(index) {
    return 2 * index + 1;
  }
  getRightIdx(index) {
    return 2 * index + 2;
  }
  hasParent(index) {
    return this.getParentIdx(index) >= 0;
  }
  isLeaf(index) {
    return (
      index >= Math.floor(this.values.length / 2) &&
      index <= this.values.length - 1
    );
  }
  hasLeft(index) {
    return this.getLeftIdx(index) < this.size;
  }
  hasRight(index) {
    return this.getRightIdx(index) < this.size;
  }
  parent(index) {
    return this.values[this.getParentIdx(index)];
  }
  left(index) {
    return this.values[this.getLeftIdx(index)];
  }
  right(index) {
    return this.values[this.getRightIdx(index)];
  }
  peek() {
    if (this.size === 0) return null;
    return this.values[0];
  }
  insert(element) {
    this.values.push(element);
    this.size += 1;
    this.heapifyUp(this.values.length - 1);
  }
  swap(index1, index2) {
    [this.values[index1], this.values[index2]] = [
      this.values[index2],
      this.values[index1],
    ];
  }
  // heapifyUp(index) {
  //   let curr = index;
  //   let parent = this.getParentIdx(curr);
  //   while (curr > 0 && this.values[parent] < this.values[curr]) {
  //     this.swap(curr, parent);
  //     curr = parent;
  //     parent = this.getParentIdx(parent);
  //   }
  // }
  heapifyUp(index) {
    let currentIndex = index,
      parentIndex = this.getParentIdx(currentIndex);

    // while we haven't reached the root node and the current element is greater than its parent node
    while (
      currentIndex > 0 &&
      this.values[currentIndex] > this.values[parentIndex]
    ) {
      // swap
      this.swap(currentIndex, parentIndex);
      // move up the binary heap
      currentIndex = parentIndex;
      parentIndex = this.getParentIdx(parentIndex);
    }
  }
  heapifyDown() {
    let index = 0;
    // while (this.hasLeft(index)) {
    //   let max = this.getLeftIdx(index);
    //   if (this.hasRight(index) && this.right(index) > this.left(index)) {
    //     max = this.getRightIdx(index);
    //   }
    //   if (this.values[index] > this.values[max]) break;
    //   else this.swap(index, max);
    //   index = max;
    // }
    if (!this.isLeaf(index)) {
      let leftChild = this.getLeftIdx(index);
      let rightChild = this.getRightIdx(index);
      largest = index;
      if (this.values[leftChild] > this.values[largest]) {
        largest = leftChild;
      }
      if (this.values[rightChild] >= this.values[largest]) {
        // reassign largest index to right child index
        largest = rightChild;
      }
      if (largest !== index) {
        // swap
        this.swap(index, largest);
        // recursively move down the heap
        this.heapifyDown();
      }
    }
  }
  removeMax() {
    if (this.values.length < 1) return "heap is empty";
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;

    // let index = 0;
    // const length = this.values.length;
    // const current = this.values[0];
    this.heapifyDown();
    // while (true) {
    //   let leftChild, rightChild;
    //   let swap = null;

    //   if (this.getLeftIdx(index) < length) {
    //     leftChild = this.values[this.getLeftIdx(index)];
    //     if (leftChild > current) swap = this.getLeftIdx(index);
    //   }
    //   if (this.getRightIdx(index) < length) {
    //     rightChild = this.values[this.getRightIdx(index)];
    //     if (
    //       (swap === null && rightChild > current) ||
    //       (swap !== null && rightChild > leftChild)
    //     )
    //       swap = this.getRightIdx(index);
    //   }
    //   if (swap === null) break;
    //   this.values[index] = this.values[swap];
    //   this.values[swap] = current;
    //   index = swap;
    // }

    this.size--;
    return max;
  }
  remove() {
    if (this.size === 0) return null;
    const item = this.values[0];
    this.values[0] = this.values[this.size - 1];
    this.values.pop();
    this.size--;
    this.heapifyDown();
    return item;
  }
  print() {
    let i = 0;
    while (!this.isLeaf(i)) {
      console.log("PARENT:", this.values[i]);
      console.log("LEFT CHILD:", this.values[this.getLeftIdx(i)]);
      console.log("RIGHT CHILD:", this.values[this.getRightIdx(i)]);
      i++;
    }
  }
}

let maxHeap = new MaxHeap();

maxHeap.insert(80);
maxHeap.insert(70);
maxHeap.insert(40);
maxHeap.insert(20);
maxHeap.insert(10);
maxHeap.insert(60);
maxHeap.insert(50);
maxHeap.insert(30);
// console.log(maxHeap.print());

// maxHeap.removeMax();
// maxHeap.removeMax();
// maxHeap.remove();
// maxHeap.removeMax();
console.log(maxHeap);

class MaxHeaps {
  constructor() {
    // this is where the array that represents our heap will be stored
    this.values = [];
  }
  // index of the parent node
  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  // index of the left child node
  leftChild(index) {
    return index * 2 + 1;
  }

  // index of the right child node
  rightChild(index) {
    return index * 2 + 2;
  }
  // returns true if index is of a node that has no children
  isLeaf(index) {
    return (
      index >= Math.floor(this.values.length / 2) &&
      index <= this.values.length - 1
    );
  }
  // swap using ES6 destructuring
  swap(index1, index2) {
    [this.values[index1], this.values[index2]] = [
      this.values[index2],
      this.values[index1],
    ];
  }
  add(element) {
    // add element to the end of the heap
    this.values.push(element);
    // move element up until it's in the correct position
    this.heapifyUp(this.values.length - 1);
  }

  heapifyUp(index) {
    let currentIndex = index,
      parentIndex = this.parent(currentIndex);

    // while we haven't reached the root node and the current element is greater than its parent node
    while (
      currentIndex > 0 &&
      this.values[currentIndex] > this.values[parentIndex]
    ) {
      // swap
      this.swap(currentIndex, parentIndex);
      // move up the binary heap
      currentIndex = parentIndex;
      parentIndex = this.parent(parentIndex);
    }
  }
  // removes and returns max element
  extractMax() {
    if (this.values.length < 1) return "heap is empty";

    // get max and last element
    const max = this.values[0];
    const end = this.values.pop();
    // reassign first element to the last element
    this.values[0] = end;
    // heapify down until element is back in its correct position
    this.heapifyDown(0);

    // return the max
    return max;
  }
  heapifyDown(index) {
    // if the node at index has children
    if (!this.isLeaf(index)) {
      // get indices of children
      let leftChildIndex = this.leftChild(index),
        rightChildIndex = this.rightChild(index),
        // start out largest index at parent index
        largestIndex = index;

      // if the left child > parent
      if (this.values[leftChildIndex] > this.values[largestIndex]) {
        // reassign largest index to left child index
        largestIndex = leftChildIndex;
      }

      // if the right child > element at largest index (either parent or left child)
      if (this.values[rightChildIndex] >= this.values[largestIndex]) {
        // reassign largest index to right child index
        largestIndex = rightChildIndex;
      }

      // if the largest index is not the parent index
      if (largestIndex !== index) {
        // swap
        this.swap(index, largestIndex);
        // recursively move down the heap
        this.heapifyDown(largestIndex);
      }
    }
  }
  buildHeap(array) {
    this.values = array;
    // since leaves start at floor(nodes / 2) index, we work from the leaves up the heap
    for (let i = Math.floor(this.values.length / 2); i >= 0; i--) {
      this.heapifyDown(i);
    }
  }
  peek() {
    return this.values[0];
  }
  print() {
    let i = 0;
    while (!this.isLeaf(i)) {
      console.log("PARENT:", this.values[i]);
      console.log("LEFT CHILD:", this.values[this.leftChild(i)]);
      console.log("RIGHT CHILD:", this.values[this.rightChild(i)]);
      i++;
    }
  }
}

let maxHeaps = new MaxHeaps();

maxHeaps.add(80);
maxHeaps.add(70);
maxHeaps.add(40);
maxHeaps.add(20);
maxHeaps.add(10);
maxHeaps.add(60);
maxHeaps.add(50);
maxHeaps.add(30);
console.log(maxHeaps.print());

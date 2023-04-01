/*Description //min Heap



*/

class MinHeap {
  constructor() {
    this.items = [];
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
  hasLeft(index) {
    return this.getLeftIdx(index) < this.size;
  }
  hasRight(index) {
    return this.getRightIdx(index) < this.size;
  }
  parent(index) {
    return this.items[this.getParentIdx(index)];
  }
  left(index) {
    return this.items[this.getLeftIdx(index)];
  }
  right(index) {
    return this.items[this.getRightIdx(index)];
  }
  swap(index1, index2) {
    let tmp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = tmp;
  }
  // insert(item) {
  //   this.items.push(item);
  //   if (this.items.length > 2) {
  //     let i = this.items.length - 1;
  //     let mid = Math.floor(i / 2);
  //     while (i >= 1 && this.items[mid] > this.items[i]) {
  //       [this.items[mid], this.items[i]] = [this.items[i], this.items[mid]];

  //       i = mid;
  //     }
  //   }
  // }
  insert(data) {
    this.items[this.size] = data;
    this.size += 1;
    this.heapifyUp(this.size - 1);
  }
  heapifyUp(index) {
    while (this.hasParent(index) && this.parent(index) > this.items[index]) {
      this.swap(this.getParentIdx(index), index);
      index = this.getParentIdx(index);
      this.heapifyUp(this.getParentIdx(index));
    }
  }
  // remove() {
  //   let smallest = this.items[1];
  //   let len = this.items.length;
  //   if (len > 2) {
  //     this.items[1] = this.items[len - 1];
  //     this.items.splice(len, 1);
  //     if (len === 3) {
  //       if (this.items[1] > this.items[2]) {
  //         [this.item[1], this.items[2]] = [this.items[2], this.item[1]];
  //       }
  //       return smallest;
  //     }
  //     let i = 1;
  //     let left = 2 * i;
  //     let right = 2 * i + 1;
  //     while (
  //       (this.items[left] &&
  //         this.items[right] &&
  //         this.items[i] >= this.items[left]) ||
  //       this.items[i] >= this.items[right]
  //     ) {
  //       if (this.items[left] < this.items[right]) {
  //         [this.item[i], this.items[left]] = [this.items[left], this.item[i]];
  //         i = 2 * i;
  //       } else {
  //         [this.item[i], this.items[right]] = [this.items[right], this.item[i]];
  //         i = 2 * i + 1;
  //       }
  //       left = 2 * i;
  //       right = 2 * i;

  //       if (this.items[left] === undefined || this.items[right] === undefined) {
  //         break;
  //       }
  //     }
  //   } else if (len === 2) {
  //     this.items.splice(1, 1);
  //   } else {
  //     return null;
  //   }
  //   return smallest;
  // }
  removeMin() {
    if (this.size == 0) throw new Error("Heap is empty");

    let data = this.items[0];
    this.items[0] = this.items[this.size - 1];
    this.size--;
    this.heapifyDown();
    return data;
  }
  heapifyDown() {
    let index = 0;
    while (this.hasLeft(index)) {
      let smallest = this.getLeftIdx(index);
      if (this.hasRight(index) && this.right(index) < this.left(index)) {
        smallest = this.getRightIdx(index);
      }
      if (this.items[index] < this.items[smallest]) break;
      else this.swap(index, smallest);
      index = smallest;
    }
  }
  sort() {
    let res = [];
    while (this.items.length > 1) {
      res.push(this.remove());
    }
    return res;
  }
}

let heap = new MinHeap();

heap.insert(3);
heap.insert(4);
heap.insert(6);
heap.insert(1);
heap.insert(8);
heap.insert(20);
heap.insert(15);

console.log(heap);
heap.removeMin();
console.log(heap);

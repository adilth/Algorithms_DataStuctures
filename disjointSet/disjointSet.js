/*Description //disjoint Set 
implementation of disjoint Set. and is called either A union–find algorithm is an algorithm that performs two useful operations on such a data structure: Find: Determine which subset a particular element is in.

*/

class DisjointSetLength {
  constructor(size) {
    this.parent = new Array(size).fill().map((_, i) => i);
    this.rank = new Array(size).fill(1);
    this.size = size;
  }
  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }
  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    if (rootX == rootY) return;
    this.size--;
    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }
  }
  printSets(n) {
    let res = new Map();
    for (let i = 0; i < n; i++) {
      let p = this.find(i);
      if (res.get(p) == null) res.set(p, new Set());
      res.get(p).add(i);
    }
    console.log(res);
  }
}

class DisjointSet {
  // Constructor, Time O(1), Space O(1)
  constructor() {
    this.rank = new Map();
    this.parent = new Map();
  }

  //Create disjoint sets from the list,
  // Time O(n), Space O(n), n is length of the list
  makeSet(list) {
    for (let x of list) {
      this.parent.set(x, x);
      this.rank.set(x, 0);
    }
  }
  find(x) {
    if (this.parent.get(x) !== x) {
      this.parent.set(x, this.find(this.parent.get(x))); // path compression
    }
    return this.parent.get(x);
  }
  union(a, b) {
    let x = this.find(a); //find the root of the sets of a and b
    let y = this.find(b);
    if (x == y) return; // if x and y are present in same set
    if (this.rank.get(x) < this.rank.get(y)) {
      //union by rank
      this.parent.set(x, y);
    } else if (this.rank.get(x) > this.rank.get(y)) {
      this.parent.set(y, x);
    } else {
      this.parent.set(x, y);
      this.rank.set(y, this.rank.get(y) + 1);
    }
  }
  printSets(list) {
    let res = new Map();
    for (let i of list) {
      let p = this.find(i);
      if (res.get(p) == null) res.set(p, new Set());
      res.get(p).add(i);
    }
    console.log(res);
  }
}

export { DisjointSet, DisjointSetLength };

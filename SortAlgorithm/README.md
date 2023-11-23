# Sorting Algorithms

Sorting is a fundamental operation in computer science that involves arranging elements in a specific order, typically ascending or descending. There are various sorting algorithms, each with its own advantages, disadvantages, and use cases. This README provides an overview of several sorting algorithms, including a brief explanation of each algorithm and its complexity.

## Table of Contents

- [Sorting Algorithms](#sorting-algorithms)
  - [Table of Contents](#table-of-contents)
  - [1. Bubble Sort](#1-bubble-sort)
    - [Complexity](#complexity)
  - [2. Selection Sort](#2-selection-sort)
    - [Complexity](#complexity-1)
  - [3. Insertion Sort](#3-insertion-sort)
    - [Complexity](#complexity-2)
  - [4. Merge Sort](#4-merge-sort)
    - [Complexity](#complexity-3)
  - [5. Quicksort](#5-quicksort)
    - [Complexity](#complexity-4)
  - [6. Counting Sort](#6-counting-sort)
    - [Complexity](#complexity-5)
  - [7. Radix Sort](#7-radix-sort)
    - [Complexity](#complexity-6)
  - [8. Bucket Sort](#8-bucket-sort)
    - [Complexity](#complexity-7)
  - [9. Heap Sort](#9-heap-sort)
    - [Complexity](#complexity-8)
  - [10. Shell Sort](#10-shell-sort)
    - [Complexity](#complexity-9)
  - [References](#references)

## 1. Bubble Sort

Bubble Sort is a simple comparison-based sorting algorithm. It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

### Complexity

- **Time**: worst-![](<https://latex.codecogs.com/svg.latex?O(n^2)>), best-![](<https://latex.codecogs.com/svg.latex?O(n)>), average-![](<https://latex.codecogs.com/svg.latex?O(n^2)>)
- **Space**: worst ![](<https://latex.codecogs.com/svg.latex?O(1)>) auxiliary

## 2. Selection Sort

Selection Sort is an in-place, unstable sorting algorithm. It works by dividing the input list into two parts: a sorted and an unsorted region. The algorithm repeatedly selects the smallest (or largest) element from the unsorted region and swaps it with the first element in the unsorted region.

### Complexity

- **Time**: worst-![](<https://latex.codecogs.com/svg.latex?O(n^2)>), best-![](<https://latex.codecogs.com/svg.latex?O(n^2)>), average-![](<https://latex.codecogs.com/svg.latex?O(n^2)>)
- **Space**: worst ![](<https://latex.codecogs.com/svg.latex?O(1)>) auxiliary

## 3. Insertion Sort

Insertion Sort is a simple and efficient in-place sorting algorithm. It builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

### Complexity

- **Time**: worst-![](<https://latex.codecogs.com/svg.latex?O(n^2)>), best-![](<https://latex.codecogs.com/svg.latex?O(n)>), average-![](<https://latex.codecogs.com/svg.latex?O(n^2)>)
- **Space**: worst ![](<https://latex.codecogs.com/svg.latex?O(1)>) auxiliary

## 4. Merge Sort

Merge Sort is an efficient, stable, and comparison-based sorting algorithm. Most implementations produce a stable sort, meaning that the implementation preserves the input order of equal elements in the sorted output.

### Complexity

- **Time**: worst-![](<https://latex.codecogs.com/svg.latex?O(n\log~n)>), best-![](<https://latex.codecogs.com/svg.latex?O(n\log~n)>), average-![](<https://latex.codecogs.com/svg.latex?O(n\log~n)>)
- **Space**: worst ![](<https://latex.codecogs.com/svg.latex?O(n)>) auxiliary

## 5. Quicksort

Quicksort is an efficient, in-place, and comparison-based sorting algorithm. It uses a divide-and-conquer strategy to sort elements. The basic idea is to partition the array into two smaller sub-arrays and then recursively sort the sub-arrays.

### Complexity

- **Time**: worst-![](<https://latex.codecogs.com/svg.latex?O(n^2)>), best-![](<https://latex.codecogs.com/svg.latex?O(n\log~n)>), average-![](<https://latex.codecogs.com/svg.latex?O(n\log~n)>)
- **Space**: worst-![](<https://latex.codecogs.com/svg.latex?O(\log~n)>) auxiliary

## 6. Counting Sort

Counting Sort is a non-comparison-based sorting algorithm that operates in linear time. It works well for integers when the range of potential values is known in advance. Counting Sort counts the number of occurrences of each element and uses that information to reconstruct a sorted sequence.

### Complexity

- **Time**: worst-![](<https://latex.codecogs.com/svg.latex?O(n+k)>), best-![](<https://latex.codecogs.com/svg.latex?O(n+k)>), average-![](<https://latex.codecogs.com/svg.latex?O(n+k)>)
- **Space**: worst-![](<https://latex.codecogs.com/svg.latex?O(k)>) auxiliary

## 7. Radix Sort

Radix Sort is a non-comparison-based sorting algorithm that works by distributing elements into buckets based on their individual digits. It can be applied to integers or strings by processing the digits or characters from the least significant digit to the most significant digit.

### Complexity

- **Time**: worst-![](<https://latex.codecogs.com/svg.latex?O(nk)>), best-![](<https://latex.codecogs.com/svg.latex?O(nk)>), average-![](<https://latex.codecogs.com/svg.latex?O(nk)>)
- **Space**: worst-![](<https://latex.codecogs.com/svg.latex?O(n+k)>) auxiliary

## 8. Bucket Sort

Bucket Sort is a distribution-based sorting algorithm that distributes the elements of an array into a number of buckets. Each bucket is then sorted individually, either using a different sorting algorithm or by recursively applying the bucket sort algorithm.

### Complexity

- **Time**: worst-![](<https://latex.codecogs.com/svg.latex?O(n^2)>), best-![](<https://latex.codecogs.com/svg.latex?O(n+k)>), average-![](<https://latex.codecogs.com/svg.latex?O(n+k)>)
- **Space**: worst-![](<https://latex.codecogs.com/svg.latex?O(n+k)>) auxiliary

## 9. Heap Sort

Heap Sort is an in-place, comparison-based sorting algorithm that uses a binary heap data structure to build a max-heap or min-heap. The heap is then repeatedly reduced while elements are extracted and placed at the end of the array.

### Complexity

- **Time**: worst-![](<https://latex.codecogs.com/svg.latex?O(n\log~n)>), best-![](<https://latex.codecogs.com/svg.latex?O(n\log~n)>), average-![](<https://latex.codecogs.com/svg.latex?O(n\log~n)>)
- **Space**: worst ![](<https://latex.codecogs.com/svg.latex?O(1)>) auxiliary

## 10. Shell Sort

Shell Sort is an in-place, comparison-based sorting algorithm that generalizes the insertion sort algorithm by allowing the comparison and exchange of elements that are far apart. It starts by sorting pairs of elements far apart from each other and progressively reduces the gap between elements to be compared.

### Complexity

- **Time**: worst-![](<https://latex.codecogs.com/svg.latex?O(n^2)>), best-![](<https://latex.codecogs.com/svg.latex?O(n\log~n)>), average-![](<https://latex.codecogs.com/svg.latex?O(n^{\frac{4}{3}})>)

- **Space**: worst ![](<https://latex.codecogs.com/svg.latex?O(1)>) auxiliary

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Sorting_algorithm)
- [GeeksForGeeks](https://www.geeksforgeeks.org/sorting-algorithms/)

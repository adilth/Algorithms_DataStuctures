# Stack

A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. This means that the last element added to the stack is the first element to be removed. The stack data structure can be thought of as a pile of objects where objects are placed on top of each other, and the only object that can be accessed is the one on the top of the pile.

## Basic Operations

There are two basic operations that can be performed on a stack:

### Push

This operation adds an element to the top of the stack. The new element becomes the top of the stack.

### Pop

This operation removes the element from the top of the stack. The element that was added last is removed first.

### Example

Consider a stack of books placed on a table. The first book that was placed on the table is at the bottom, and the last book that was placed is at the top. If we want to add a new book to the stack, we place it on top of the last book. If we want to remove a book from the stack, we remove the book that is on top.

## Advantages

Stacks are useful for solving problems that require temporary storage of data. Some common applications of stacks include:

- Implementing recursive algorithms
- Expression evaluation
- Backtracking algorithms
- Compiler syntax checking

## Implementation

Stacks can be implemented using arrays or linked lists. In both cases, we only need to keep track of the index of the top element of the stack. The push and pop operations can be implemented as follows:

## Push

Check if the stack is full.
If the stack is not full, increment the index of the top element and add the new element to the top of the stack.

## Pop

Check if the stack is empty.
If the stack is not empty, remove the element from the top of the stack and decrement the index of the top element.

## Conclusion

Stacks are simple and powerful data structures that can be used to solve a wide range of problems. They are easy to implement and understand, making them an essential tool for any programmer.

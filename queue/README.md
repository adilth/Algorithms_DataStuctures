# Queue

A **queue** is a linear data structure that follows the First-In-First-Out (FIFO) principle. This means that the first element to be inserted in the **queue** will be the first one to be removed.

A **queue** can be visualized as a line of people waiting for their turn. The person who arrived first (the oldest element) will be the first one to be served (removed from the **queue**).

![queue](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221213113312/Queue-Data-Structures.png)

## Operations on a Queue

The main operations that can be performed on a queue are:

1. **Enqueue**: This operation adds an element to the tail end of the queue.

2. **Dequeue**: This operation removes an element from the head end of the queue.

3. **Peek**: This operation returns the element at the head end of the queue without removing it.

4. **Size**: This operation returns the number of elements currently present in the queue.

5. **IsEmpty**: This operation returns a boolean value indicating whether the queue is empty or not.

## Implementation of Queue

A queue can be implemented using various data structures such as arrays, linked lists, and stacks. The most common implementations are using arrays and linked lists.

## Implementation using Arrays

In this implementation, an array is used to store the elements of the queue. Two pointers called `head` and `tail` are used to keep track of the `head` and `tail` ends of the queue. Initially, both pointers are set to -1 to indicate that the queue is empty.

Enqueue operation:

- Increment the `tail` pointer by 1.
- Add the new element to the `tail` position.

Dequeue operation:

- Increment the `head` pointer by 1.
- Return the element to the `head` position.

## Implementation using Linked List

In this implementation, a linked list is used to store the elements of the queue. Each node in the linked list contains an element and a reference to the next node. Two pointers called `head` and `tail` are used to keep track of the `head` and `tail` ends of the queue. Initially, both pointers are set to None to indicate that the queue is empty.

Enqueue operation:

- Create a new node with the new element.
- If the queue is empty, set both `head` and `tail` pointers to the new node.
- Otherwise, add the new node to the end of the linked list and update the `tail` pointer.

Dequeue operation:

- If the queue is empty, return an error.
- Otherwise, return the element at the `head` position and update the `head` pointer to the next node in the linked list.

## Conclusion

In conclusion, a queue is a simple and powerful data structure that can be used in a wide range of applications. It is easy to understand and implement using arrays or linked lists. By using a queue, we can easily manage a collection of elements that need to be processed in a specific order.

## References

- [Wikipedia](<https://en.wikipedia.org/wiki/Queue_(abstract_data_type)>)
- [GeeksForGeeks](https://www.geeksforgeeks.org/queue-data-structure/)

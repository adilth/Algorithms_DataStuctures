# Sliding Window

The sliding Window Algorithm is a technique for reducing the complexity of algorithms. It is used such that the need for reusing the loops gets reduced and hence the program gets optimized. In this technique, we reuse the result of the previous step to compute the result of the next step.

[sliding window](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.scaler.com%2Ftopics%2Fsliding-window-algorithm%2F&psig=AOvVaw0CvMU-1GO0B6gd5a06MWKv&ust=1679092588054000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPjZ17zB4f0CFQAAAAAdAAAAABAE)

## Basic Steps to Solve Sliding Window Problems

The steps for using the Sliding window technique are as follows:

- Find the size of the window on which the algorithm has to be performed.
- Calculate the result of the first window, as we calculate in the naive approach.
- Maintain a pointer on the start position.
- Then run a loop and keep sliding the window by one step at a time and also sliding that pointer one at a time, and keep -track of the results of every window.

### the benefit of sliding window

-The use of the Sliding Window Algorithm is very much concentrated,i.e. where the size of the window for calculation of any problem or analysis of an algorithm is fixed throughout the program. Then the complexity can be reduced by this technique and the naive algorithm can be optimized with the help of the Sliding Window Technique.

- The Time Complexity of running this Sliding Window technique algorithm is O(N) where N is the number of elements present.

- It should always be applied when the size of the window is fixed.

- We can implement this algorithm in many ways based on our convenience and the requirement of the problem like iterating from left to right or right to left, etc.

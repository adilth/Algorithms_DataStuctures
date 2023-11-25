/**Description // sum sequence
Your task is to write a function which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step.

If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

Examples

2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)
@param {Number} start 
@param {Number} end 
@param {Number} step 
@returns {Number}
*/

export default function sumOfSequence(start, end, step) {
  if (start > end || step < 1) return 0;
  let sum = 0;
  for (let i = start; i <= end; i += step) {
    sum += i;
  }
  return sum;
}

export const sequenceSum = (begin, end, step) => {
  if (begin > end || step < 1) {
    return 0;
  }
  return begin + sequenceSum(begin + step, end, step);
};

console.log(sumOfSequence(2, 2, 2)); //2
console.log(sumOfSequence(5, 5, 1)); //12
console.log(sumOfSequence(10, 5, 1)); //15
console.log(sumOfSequence(1, 100, 0)); //5
// expect().toBe(0); // Start is greater than end

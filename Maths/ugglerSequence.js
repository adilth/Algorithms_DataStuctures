/**Description // JugglerSequence
 * function jugglerSequence
 * Juggler Sequence is a series of integer number in which the first term starts with a positive integer number n
 * and the remaining terms are generated from the immediate previous term using the recurrence relation
 * Produce Juggler Sequence using number n as the first term of the sequence and store in an array
 * @param {Number} n
 * @returns {Number[] | Error}
 */

export default function jugglerSequence(n) {
  if (typeof n !== "number") {
    throw new Error("please provide number");
  }
  const sequence = [];
  sequence.push(n);
  while (n !== 1) {
    n = Math.floor(n ** ((n % 2) + 0.5));
    sequence.push(n);
  }
  return sequence;
}

console.log(jugglerSequence(10)); // returns [3, 5, 11, 36, 6, 2, 1 ]
console.log(jugglerSequence(9)); // returns [9, 27, 140, 11, 36, 6, 2, 1]
console.log(jugglerSequence(15)); // returns [15, 58, 7, 18, 4, 2, 1]

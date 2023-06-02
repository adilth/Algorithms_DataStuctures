/**Description // partition palindrome
 *
 * Given a string str, partition str such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of str.
 * @param {string} str
 * @return {string[][]}
 */

function partition(str) {
  let result = [];
  const backtrack = (s, partition) => {
    if (s.length === 0) result.push(partition);
    for (let i = 1; i <= s.length; i++) {
      const substr = s.slice(0, i);
      if (isPalindrome(substr)) {
        backtrack(s.slice(i), [...partition, substr]);
      }
    }
  };
  // Initial call to the helper function
  backtrack(str, []);
  return result;
}

const isPalindrome = (s) => {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) return false;
    i++;
    j--;
  }
  return true;
};

console.log(partition("aab")); //[ [ 'a', 'a', 'b' ], [ 'aa', 'b' ] ]
console.log(partition("rreeb"));
/*
[
  [ 'r', 'r', 'e', 'e', 'b' ],
  [ 'r', 'r', 'ee', 'b' ],
  [ 'rr', 'e', 'e', 'b' ],
  [ 'rr', 'ee', 'b' ]
]*/

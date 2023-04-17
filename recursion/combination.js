/*Description // combinations
make a function that generate all passible combinations each comb need to be in array


*/

function combinations(arr) {
  if (!arr.length) return [[]];
  let [first, ...rest] = arr;
  let combWithoutFirst = combinations(rest);

  let combWithFirst = [];
  combWithoutFirst.forEach((comb) => {
    let allComb = [...comb, first];
    combWithFirst.push(allComb);
  });
  return [...combWithFirst, ...combWithoutFirst];
}

console.log(combinations(["a", "b", "c", "d"]));
/* output
[
  [ 'd', 'c', 'b', 'a' ],
  [ 'c', 'b', 'a' ],
  [ 'd', 'b', 'a' ],
  [ 'd', 'c', 'a' ],
  [ 'd', 'c', 'b' ],
  [ 'b', 'a' ],
  [ 'c', 'a' ],
  [ 'd', 'a' ],
  [ 'c', 'b' ],
  [ 'd', 'b' ],
  [ 'd', 'c' ],
  [ 'a' ],
  [ 'b' ],
  [ 'c' ],
  [ 'd' ],
  []
]
*/

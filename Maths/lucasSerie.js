/*Description // lucas series 
Lucas numbers are similar to Fibonacci numbers. Lucas numbers are also defined as the sum of its two immediately previous terms. But here the first two terms are 2 and 1 whereas in Fibonacci numbers the first two terms are 0 and 1 respectively. 
*/

function lucasSeries(idx) {
  if (idx < 0) throw new TypeError("Index cannot be Negative");

  let a = 2;
  let b = 1;
  let arr = [];
  for (let i = 0; i < idx; i++) {
    const temp = a + b;
    a = b;
    b = temp;
    arr.push(a);
  }
  return a;
}

console.log(lucasSeries(20)); //15127
console.log(lucasSeries(0)); //2
console.log(lucasSeries(45)); //2537720636

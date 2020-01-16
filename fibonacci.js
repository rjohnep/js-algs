function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(5)); // -> 8



/************************************/
// MEMOISED RECURSION
function fibonacciM(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return memo[num] = fibonacciM(num - 1, memo) + fibonacciM(num - 2, memo);
}

console.log(fibonacciM(5)); // -> 8



/************************************/
// WHILE
function fibonacciW(num) {
  let a = 1, b = 0, temp;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

console.log(fibonacciW(5)); // -> 8

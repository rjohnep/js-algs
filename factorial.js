const factorial = (x) => {
  if (x < 2) return 1;

  return x * factorial(x - 1);
}

console.log(factorial(5)); // -> 120
console.log(factorial(6)); // -> 720

/**************************************/
// WITCH CACHE

const cache = {};

const factorial = (x) => {
  if (x < 2) return 1;
  if (!(x in cache)) {
    cache[x] = x * factorial(x - 1);
  }
  return cache[x];
}

console.log(factorial(5)); // -> 120
console.log(factorial(6)); // -> 720
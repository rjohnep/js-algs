const isPowerOfTwoBit = (number) => {
  return number & (number - 1) === 0;
}


const isPowerOfTwo = (number) => {
  return number % 2 === 0;
}

console.log(isPowerOfTwo(4)); // true
console.log(isPowerOfTwo(64)); // true
console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(0)); // false
console.log(isPowerOfTwo(-1)); // false
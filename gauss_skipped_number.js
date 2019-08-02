const array = [2, 5, 1, 4, 9, 6, 3, 7];

// find high and low range if those are undefined
// const top = Math.max.apply(null, array);
const top = Math.max(...array);
const low = Math.min.apply(null, array);

const getGaussSum = (from, to) => (to - from + 1) * ((from + to) / 2);

const a1 = (arr, low, top) => {
  const controlSumm = getGaussSum(low, top);
  const arraySum = arr.reduce((acc, n) => acc + n, 0);

  return controlSumm - arraySum;
};

console.log(a1(array, low, top)); // => 8

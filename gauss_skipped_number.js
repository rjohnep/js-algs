const array = [2, 5, 1, 4, 9, 6, 3, 7];
const top = 9;
const low = 1;

const getGaussSum = (from, to) => ((to - from) + 1) * ((from + to) / 2);

const a1 = (arr, low, top) => {
    const controlSumm = getGaussSum(low, top);
    const arraySum = arr.reduce((acc, n) => acc + n, 0);

    return controlSumm - arraySum;
}

console.log(a1(array, low, top));
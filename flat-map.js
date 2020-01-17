// RECURSION
const deepFlatMapR = (arr) => {
  return arr.reduce((acc, i) => {
    if (Array.isArray(i)) {
      // return deepFlatMapR([...acc, ...i]); // 7 iterations
      // 'concat(...i)' vs 'concat(i)' - '...i' is optimising iteration counts
      return deepFlatMapR(acc.concat(...i));
    }

    return acc.concat(i);
  }, []);
};

assert.deepEqual(deepFlatMapR([1, [2], [[3]], [[[4]]]]), [1, 2, 3, 4]);

// ITERATIVELY
const deepFlatMap = (arr) => {
  const result = [];
  const stack = arr;

  while (stack.length) {
    console.log('iterate'); // 10
    const item = stack.shift();

    if (Array.isArray(item)) {
      stack.unshift(...item);
    } else {
      result.push(item);
    }
  }

  return result;
};

assert.deepEqual(deepFlatMap([1, [2], [[3]], [[[4]]]]), [1, 2, 3, 4]);

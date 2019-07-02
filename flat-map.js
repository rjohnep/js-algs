// #Recursion
const deepFlatMapR = (arr) => {
  return arr.reduce((acc, i) => {
    if (Array.isArray(i)) {
      return [...acc, ...deepFlatMap(i)];
    } else {
      acc.push(i);
    }

    return acc;
  }, []);
};

assert.deepEqual(deepFlatMapR([1, 2, [3, [4], 5]]), [1, 2, 3, 4, 5]);


// #Recursion with tail
const deepFlatMap = (arr, tail = []) => {
  return arr.reduce((acc, i) => {
    if (Array.isArray(i)) {
      return deepFlatMap(i, acc);
    } else {
      acc.push(i);
    }

    return acc;
  }, tail);
};

assert.deepEqual(deepFlatMap([1, 2, [3, [4], 5]]), [1, 2, 3, 4, 5]);


// #Iteratively
const deepFlatMap = (arr) => {
  const result = [];
  let stack = arr;

  while (stack.length) {
    const item = stack.shift();

    if (Array.isArray(item)) {
      stack.unshift(...item);
    } else {
      result.push(item);
    }
  }

  return result;
};

assert.deepEqual(deepFlatMap([1, 2, [3, [4], 5]]), [1, 2, 3, 4, 5]);

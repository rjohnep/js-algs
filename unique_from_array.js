const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

const unique = (arr) => {
  const hashTable = {};
  const result = [];

  arr.forEach((n) => {
    if (!hashTable[n]) {
      result.push(n);
    }

    hashTable[n] = n;
  });

  // Object.keys returns key as a string ['1', '2' ...]
  // if ES6 use Object.values 
  // return Object.keys(hashTable); 

  // else 
  return result
};

console.log(unique(array));
console.log([...new Set(array)]);
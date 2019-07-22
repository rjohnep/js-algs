// find intersection

const firstArray = [2, 2, 4, 1];
const secondArray = [1, 2, 0, 2];

const getIntersection = (first, second) => {
  const hashMap = {};
  const result = [];

  for (let i = 0; i < first.length; i++) {
    hashMap[first[i]] = 1;
  }

  for (let i = 0; i < second.length; i++) {
    if (hashMap[second[i]] === 1) {
      result.push(second[i]);
      hashMap[second[i]]++;
    }
  }

  return result;
};

console.log(getIntersection(firstArray, secondArray));
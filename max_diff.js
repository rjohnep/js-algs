const fixture = [8, 4, 9, 9, 15, 3, 1, 10];

/*********************************************/
// MAX DIFF IN ARRAY FOR SIBLINGS
let maxSiblingsDiffInArray = (arr) => {
  let diff = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) > diff) {
      diff = Math.abs(arr[i] - arr[i + 1]);
    }
  }

  return diff;
}

console.log(maxSiblingsDiffInArray(fixture)); // -> 12



/*********************************************/
// MAX DIFF IN THE WHOLE ARRAY
const maxDiffInWholeArray = (arr) => {
  const sortedArray = arr.sort((a, b) => a - b);

  return sortedArray[sortedArray.length - 1] - sortedArray[0];
};

console.log(maxDiffInWholeArray(fixture)); // -> 14



/*********************************************/
// MAX DIFF IN CASE WHEN MIN VALUE IS PLACED BEFORE MAX VALUE

const maxDiffWhenMinIsBeforeMax = (arr) => {
  let minValue = arr[0];
  let diff = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= minValue) {
      minValue = arr[i];
    } else if (arr[i] - minValue > diff) {
      diff = arr[i] - minValue;
    }
  }

  return diff;
};

console.log(maxDiffWhenMinIsBeforeMax(array)); // -> 11

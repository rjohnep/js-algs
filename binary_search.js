const fixture = [1, 2, 3, 4, 5];

// #1 while
const binarySearch = (array, value) => {
  let middle = Math.floor(array.length / 2);

  while (array[middle] !== value && (middle > 0 && middle < array.length)) {
    if (array[middle] < value) {
      middle = Math.floor(middle + middle / 2);
    } else {
      middle = Math.floor(middle - middle / 2);
    }
  }

  return array[middle] === value ? middle : -1;
};
console.log(binarySearch(fixture, 5));


// #2 recursive
const recursiveBinarySearch = (array, value, middle = Math.floor(array.length / 2)) => {
  if (middle > array.length || middle < 0 || (middle === 0 && array[middle] !== value)) return -1;

  if (array[middle] === value) {
    return middle;
  } else if (array[middle] > value) {
    return recursiveBinarySearch(array, value, Math.floor(middle - middle / 2));
  } else {
    return recursiveBinarySearch(array, value, Math.floor(middle + middle / 2));
  }
}

console.log(recursiveBinarySearch(fixture, 5));
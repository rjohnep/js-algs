const makeCounter = () => {
  let count = 0;
  return () => count++;
};

const counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

const makeAdd = (start) => {
  return (x) => start + x;
};

const add = makeAdd(5);
console.log(add(5));
console.log(add(10));
console.log(add(3));

// sum
const makeSum = () => {
  let prev = 0;
  return (x) => {
    prev += x;
    return prev;
  };
};

const sum = makeSum();

console.log(sum(5));
console.log(sum(10));
console.log(sum(3));
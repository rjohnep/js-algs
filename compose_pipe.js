//PIPE
const pipeWithOneArg = (...fns) => (x) => {
  return fns.reduce((acc, fn) => fn(acc), x);
};
const pipe = (first, ...fns) => (...args) => {
  return fns.reduce((acc, fn) => fn(acc), first(...args));
};

//COMPOSE
//MULTIPLE ARGUMENTS
const compose = (first, ...fns) => (...args) => {
  // const first = fns.pop();
  return fns.reduceRight((acc, fn) => fn(acc), first(...args));
};

//WITH ONE ARGUMENT
const composeWithOneArg = (...fns) => (x) => {
  return fns.reduceRight((acc, fn) => fn(acc), x);
};

const composeFromPipe = (...fns) => pipe(...fns.reverse());

const sum = n => n * 2;
const multiply = (a, b) => a * b;
const multiplyOne = n => n * n;

assert.equal(
  pipe(
    multiply,
    sum
  )(2, 2),
  8
);
assert.equal(
  compose(
    sum,
    multiply
  )(2, 2),
  8
);

assert.equal(composeFromPipe(sum, multiply)(2, 2), 8);
assert.equal(composeWithOneArg(sum, multiplyOne)(2), 8);

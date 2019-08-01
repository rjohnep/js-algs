const sum = (n) => n*2;
const multiply = (a,b) => a*b;
const multiplyOne = (n) => n*n;

const compose = (...fns) => (...args) => {
  const first = fns.pop();
  return fns.reduceRight((acc, fn) => fn(acc), first(...args));
};

const pipe = (first, ...fns) => (...args) => {
  return fns.reduce((acc, fn) => fn(acc), first(...args));
};

const composeFromPipe = (...fns) => pipe(...fns.reverse());

const composeWithOneArg = (...fns) => (args) => {
  return fns.reduceRight((acc, fn) => fn(acc), args);
};

assert.equal(pipe(multiply, sum)(2, 2), 8);
assert.equal(compose(sum, multiply)(2, 2), 8);
assert.equal(composeFromPipe(sum, multiply)(2, 2), 8);
assert.equal(composeWithOneArg(sum, multiplyOne)(2), 8);

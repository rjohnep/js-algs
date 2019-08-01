const sum = (n) => n*2;
const multiply = (n) => n*n;

const compose = (...fns) => (...args) => {
  const first = fns.pop();
  return fns.reduceRight((acc, fn) => fn(acc), first(...args));
};

const pipe = (first, ...fns) => (...args) => {
  return fns.reduce((acc, fn) => fn(acc), first(...args));
};

assert.equal(pipe(multiply, sum)(2), 8);
assert.equal(compose(sum, multiply)(2), 8);

//CURRY INFINITE CALLS
const multiply = (x) => {
  const fn = (y) => multiply(x * y);
  fn.valueOf = fn.toString = () => x;
  return fn;
};

console.log(`${multiply(5)(2)}`);

/***************************************/
// CURRY WRAPPER, simple
const curry = fn => (...args) => fn.bind(null, ...args);

const map = curry((fn, arr) => arr.map(fn));
const join = curry((str, arr) => arr.join(str));
const toLowerCase = str => str.toLowerCase();
const split = curry((splitOn, str) => str.split(splitOn));

const makeTest = (str) =>
  join('-')(
    map(toLowerCase)(
      split(' ')(
        str
      )
    )
  );

console.log(makeTest('Hola Frank')); // -> 'hola-frank'

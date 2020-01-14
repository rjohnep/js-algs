const multiply = (x) => {
  const fn = (y) => multiply(x * y);
  fn.valueOf = fn.toString = () => x;
  return fn;
};

console.log(`${multiply(5)(2)}`);

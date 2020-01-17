var objIterator = {
  0: 'a',
  1: 'b',
  2: 'c',
  [Symbol.iterator]() {
    const data = Object.values(objIterator);

    return {
      next() {
        if (!data.length) {
          return {
            value: undefined,
            done: true
          };
        }

        return {
          value: data.shift(),
          done: false
        };
      }
    };
  }
};

for (let val of objIterator) {
  console.log(val)
}

// -> a, b, c

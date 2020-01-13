var sad = {
  0: 'a',
  1: 'b',
  2: 'c',
  [Symbol.iterator]() {
    const data = Object.values(sad);
    let index = 0;

    return {
      next() {
        if (index > data.length - 1) {
          return {
            value: undefined,
            done: true
          };
        }

        const value = data[index];
        index++;
        return {
          value,
          done: false
        };
      }
    };
  }
};

for (let val of sad) {
  console.log(val)
}

// -> a, b, c

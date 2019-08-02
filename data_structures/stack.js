const makeStack = () => {
  const array = [];

  return {
    push(item) {
      array.push(item);
    },
    pop() {
      array.pop();
    },
    peek() {
      return array[array.length - 1];
    },
    get isEmpty() {
      return array.length === 0;
    },
    get length() {
      return array.length;
    }
  };
};

const stack = makeStack();

assert.strictEqual(stack.isEmpty, true);

stack.push("Hola");
stack.push("Petuch");
stack.push("!");

assert.strictEqual(stack.isEmpty, false);
assert.strictEqual(stack.length, 3);
assert.strictEqual(stack.peek(), "!");

stack.pop();
stack.pop();

assert.strictEqual(stack.length, 1);
assert.strictEqual(stack.peek(), "Hola");

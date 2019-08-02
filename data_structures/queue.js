const makeQueue = () => {
  const queue = [];

  return {
    enqueue(item) {
      queue.unshift(item);
    },
    dequeue() {
      queue.pop();
    },
    get peek() {
      return queue[queue.length - 1];
    },
    get length() {
      return queue.length;
    },
    get isEmpty() {
      return queue.length === 0;
    }
  };
};
const queue = makeQueue();

assert.strictEqual(queue.isEmpty, true);
assert.strictEqual(queue.length, 0);

queue.enqueue('Hola');
queue.enqueue('Petuch');
queue.enqueue('Italiano');
queue.enqueue('!');

assert.strictEqual(queue.isEmpty, false);
assert.strictEqual(queue.length, 4);
assert.strictEqual(queue.peek, 'Hola');

queue.dequeue();
queue.dequeue();

assert.strictEqual(queue.peek, 'Italiano');
assert.strictEqual(queue.length, 2);

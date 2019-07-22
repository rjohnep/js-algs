class Queue {
  constructor(...args) {
    this.queue = [...args].reverse();
  }

  set(n) {
    return this.queue.unshift(n);
  }

  get() {
    return this.queue.pop();
  }
}

const queue = new Queue(1, 2, 3);

console.log(queue.set(4));
console.log(queue.get()); // -> 1
console.log(queue.get()); // -> 2
console.log(queue.get()); // -> 3
console.log(queue.get()); // -> 4
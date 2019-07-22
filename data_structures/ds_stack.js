class Stack {
  constructor(...items) {
    this.stack = [...items];
  }

  push(...items) {
    return this.stack.push(...items);
  }

  pop() {
    return this.stack.pop();
  }
}

const stack = new Stack(1, 2, 3);

console.log(stack.push(4)); //=> length 4
console.log(stack.push(5)); //=> length 5
console.log(stack.pop()); //=>5
console.log(stack.pop()); //=>4
console.log(stack.pop()); //=>3
console.log(stack.pop()); //=>2
console.log(stack.pop()); //=>1

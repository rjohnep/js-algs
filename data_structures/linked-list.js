const makeNode = value => ({
  value,
  next: null
});

const makeLinkedList = () => {
  return {
    head: null,
    tail: null,
    length: 0,
    push(value) {
      const node = makeNode(value);

      if (this.isEmpty()) {
        this.head = node;
        this.tail = node;

        this.length++;

        return node;
      }

      this.tail.next = node;
      this.tail = node;
      this.length++;

      return node;
    },
    pop() {
      if (this.isEmpty()) return null;

      const node = this.tail;

      if (this.head === this.tail) {
        this.tail = null;
        this.head = null;
        this.length--;

        return node;
      }

      let iteratingdNode = this.head;

      while (iteratingdNode.next !== this.tail) {
        iteratingdNode = iteratingdNode.next;
      }

      iteratingdNode.next = null;
      this.tail = iteratingdNode;
      this.length--;

      return node;
    },
    delete(index) {
      if (index > this.length || index < 0) return null;

      if (index === 0) {
        const deleted = this.head;

        this.head = this.head.next;
        this.length--;

        return deleted;
      }

      let i = 0;
      let previousIterating;
      let iteratingdNode = this.head;

      while (i !== index) {
        previousIterating = iteratingdNode;
        iteratingdNode = iteratingdNode.next;
        i++;
      }

      previousIterating.next = iteratingdNode.next;
      this.length--;

      return iteratingdNode;
    },
    get(index) {
      if (index > this.length || index < 0) return null;
      if (this.length === 1 || index === 0) return this.head;

      let i = 0;
      let iteratingdNode = this.head;
      while (i !== index) {
        iteratingdNode = iteratingdNode.next;
        i++;
      }

      return iteratingdNode;
    },
    includes(value) {
      if (this.length === 0) return false;
      if (this.length === 1) return this.head.value === value;

      let iteratingdNode = this.head;
      while (iteratingdNode) {
        if (iteratingdNode.value === value) return true;

        iteratingdNode = iteratingdNode.next;
      }

      return false;
    },
    print() {
      const values = [];

      for (
        let i = 0, iteratingdNode = this.head;
        i < this.length;
        i++ , iteratingdNode = iteratingdNode.next
      ) {
        values.push(iteratingdNode.value);
      }

      return values.join('=>');
    },
    isEmpty() {
      return this.length === 0;
    }
  };
};

const linkedList = makeLinkedList();

assert.strictEqual(linkedList.isEmpty(), true);

linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.push(5);

assert.strictEqual(linkedList.isEmpty(), false);
assert.strictEqual(linkedList.length, 5);

assert.strictEqual(linkedList.pop().value, 5);
assert.strictEqual(linkedList.length, 4);

assert.strictEqual(linkedList.get(2).value, 3);
assert.strictEqual(linkedList.delete(1).value, 2);

assert.strictEqual(linkedList.print(), '1=>3=>4');

assert.strictEqual(linkedList.includes(5), false);
assert.strictEqual(linkedList.includes(1), true);

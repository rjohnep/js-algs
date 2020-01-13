const makeNode = key => ({
  key,
  left: null,
  right: null,
  addLeft(key) {
    const leftNode = makeNode(key);
    this.left = leftNode;

    return leftNode;
  },
  addRight(key) {
    const rightNode = makeNode(key);
    this.right = rightNode;

    return rightNode;
  }
});

const traversalTypes = {
  IN_ORDER(node, applyFn) {
    if (node !== null) {
      this.IN_ORDER(node.left, applyFn);

      applyFn(node);

      this.IN_ORDER(node.right, applyFn);
    }
  },
  PRE_ORDER(node, applyFn) {
    if (node !== null) {
      applyFn(node);

      this.PRE_ORDER(node.left, applyFn);
      this.PRE_ORDER(node.right, applyFn);
    }
  },
  POST_ORDER(node, applyFn) {
    if (node !== null) {
      this.POST_ORDER(node.left, applyFn);
      this.POST_ORDER(node.right, applyFn);

      applyFn(node);
    }
  }
};

const makeBinaryTree = rootKey => {
  const root = makeNode(rootKey);

  return {
    root,
    print(TRAVERSAL_TYPE = 'IN_ORDER') {
      let result = '';

      const logKey = node => {
        result += result.length === 0 ? node.key : '=>' + node.key;
      };

      traversalTypes[TRAVERSAL_TYPE](this.root, logKey);

      return result;
    }
  };
};

const binaryTree = makeBinaryTree(0);

const one = binaryTree.root.addLeft(1);
const two = binaryTree.root.addRight(2);

const three = one.addLeft(3);
const four = one.addRight(4);

const five = two.addLeft(5);
const six = two.addRight(6);

const seven = three.addLeft(7);
const eight = three.addRight(8);

assert.strictEqual(binaryTree.print(), '7=>3=>8=>1=>4=>0=>5=>2=>6');
assert.strictEqual(binaryTree.print('PRE_ORDER'), '0=>1=>3=>7=>8=>4=>2=>5=>6');
assert.strictEqual(binaryTree.print('POST_ORDER'), '7=>8=>3=>4=>1=>5=>6=>2=>0');

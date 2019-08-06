const makeNode = key => ({
  key,
  children: [],
  addChild(node) {
    const child = makeNode(node);
    this.children.push(child);

    return child;
  }
});

const makeTree = rootKey => {
  const root = makeNode(rootKey);

  return {
    root,
    print() {
      let result = '';

      const traverse = (node, applyFn, depth) => {
        applyFn(node, depth);

        if (node.children.length) {
          node.children.forEach(child => {
            traverse(child, applyFn, depth++);
          });
        }
      };

      const renderToResult = (node, depth) => {
        result += result.length === 0 ? node.key : `\n${' '.repeat(depth * 2)}`;
      };

      traverse(this.root, renderToResult, 1);

      return result;
    }
  };
};

const DOMTree = makeTree('html');

const head = DOMTree.addChild('head');
DOMTree.addChild('title:: Tree Structure');

const body = DOMTree.addChild('body');
const header = body.addChild('header');
header.addChild('H1 - Main Page');

const mainSection = body.addChild('section');
mainSection.addChild('p page content');

const footer = body.addChild('footer');
footer.addChild(`span - Copyright ${new Date().getFullYear()}`);

DOMTree.print();

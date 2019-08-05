import { makeQueue } from './queue';

const makeNode = key => ({
  key,
  neighbors: [],
  addNeighbor(node) {
    this.neighbors.push(node);
  }
});

const makeGraph = (directed = false) => {
  return {
    nodes: [],
    edges: [],
    directed,
    addNode(key) {
      this.nodes.push(makeNode(key));
    },
    getNode(key) {
      return this.nodes.find(node => node.key === key);
    },
    addEdge(key1, key2) {
      const node1 = this.getNode(key1);
      const node2 = this.getNode(key2);

      node1.addNeighbor(node2);

      if (!this.directed) {
        node2.addNeighbor(node1);
      }

      this.edges.push(`${node1} - ${node2}`);
    },
    print() {
      return this.nodes
        .filter(item => item.neighbors.length)
        .map(node => {
          return `${node.key}=>${node.neighbors
            .map(item => item.key)
            .join(',')}`;
        })
        .join(' | ');
    },
    //SEARCHES
    breadthFirstSearch(startNodeKey, applyFn) {
      const startNode = this.getNode(startNodeKey);

      // avoid double visit
      const visited = this.nodes.reduce((acc, node) => {
        acc[node.key] = false;
        return acc;
      }, {});

      const queue = makeQueue();
      queue.enqueue(startNode);
      let currentNode;

      while (!queue.isEmpty()) {
        currentNode = queue.dequeue();

        if (!visited[currentNode.key]) {
          applyFn(currentNode);
          visited[currentNode.key] = true;
        }

        currentNode.neighbors.forEach(node => {
          if (!visited[node.key]) {
            queue.enqueue(node);
          }
        });
      }
    }
  };
};

const directedGraph = makeGraph(true);
const unDirectedGraph = makeGraph();

// directedGraph
directedGraph.addNode(0);
directedGraph.addNode(1);
directedGraph.addNode(2);

directedGraph.addEdge(0, 2);
directedGraph.addEdge(1, 2);

assert.strictEqual(directedGraph.print(), '0=>2 | 1=>2');

// unDirectedGraph
unDirectedGraph.addNode(0);
unDirectedGraph.addNode(1);
unDirectedGraph.addNode(2);

unDirectedGraph.addEdge(0, 2);
unDirectedGraph.addEdge(1, 2);

assert.strictEqual(unDirectedGraph.print(), '0=>2 | 1=>2 | 2=>0,1');

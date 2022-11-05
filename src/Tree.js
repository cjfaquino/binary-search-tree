import Node from './Node.js';

export default class Tree {
  constructor(array) {
    this.root = array ? this.buildTree(array) : null;
  }

  buildTree(array) {
    if (!array.length) return null;

    const mid = Math.floor(array.length / 2);
    const node = new Node(array[mid]);

    node.left = this.buildTree(array.slice(0, mid));
    node.right = this.buildTree(array.slice(mid + 1));

    return node;
  }
}

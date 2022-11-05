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

  insert(value) {
    this.root = this.insertRec(value, this.root);
  }

  insertRec(value, node) {
    if (node === null) return new Node(value);

    if (value < node.data) node.left = this.insertRec(value, node.left);
    else if (value > node.data) node.right = this.insertRec(value, node.right);

    return node;
  }
}

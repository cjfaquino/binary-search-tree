/* eslint-disable no-param-reassign */
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

  delete(value) {
    this.root = this.deleteRec(value, this.root);
  }

  deleteRec(value, node) {
    if (node === null) return node;

    if (value < node.data) node.left = this.deleteRec(value, node.left);
    else if (value > node.data) node.right = this.deleteRec(value, node.right);
    else {
      // one or no branches
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      // two braches
      node.data = this.minValue(node.right);
      node.right = this.deleteRec(node.data, node.right);
    }

    return node;
  }

  minValue(node = this.root) {
    while (node.left != null) {
      node = node.left;
    }
    return node.data;
  }

  find(value, node = this.root) {
    if (node === null) return 'none';

    if (value < node.data) node = this.find(value, node.left);
    else if (value > node.data) node = this.find(value, node.right);

    return node;
  }
}

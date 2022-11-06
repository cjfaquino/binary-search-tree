/* eslint-disable no-cond-assign */
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

  levelOrder() {
    const node = this.root;
    if (node === null) return null;
    const q = [node];
    const print = [];

    while (q.length) {
      const frontQ = q.shift();
      print.push(frontQ.data);
      if (frontQ.left !== null) q.push(frontQ.left);
      if (frontQ.right !== null) q.push(frontQ.right);
    }

    return print;
  }

  preOrder(node = this.root, array = []) {
    if (node === null) return node;
    array.push(node.data);
    this.preOrder(node.left, array);
    this.preOrder(node.right, array);
    return array;
  }

  inOrder(node = this.root, array = []) {
    if (node === null) return node;
    this.inOrder(node.left, array);
    array.push(node.data);
    this.inOrder(node.right, array);
    return array;
  }

  postOrder(node = this.root, array = []) {
    if (node === null) return node;
    this.postOrder(node.left, array);
    this.postOrder(node.right, array);
    array.push(node.data);
    return array;
  }

  #height = -1;

  #findHeight(value, node) {
    if (node === null) return -1;
    const leftHeight = this.#findHeight(value, node.left);
    const rightHeight = this.#findHeight(value, node.right);

    const num = Math.max(leftHeight, rightHeight) + 1;

    if (value === node.data) {
      this.#height = num;
    }
    return num;
  }

  height(value = this.root.data, node = this.root) {
    this.#findHeight(value, node);
    return this.#height;
  }

  depth(value = this.root.data, node = this.root) {
    if (node === null) return -1;
    let dist = -1;
    if (
      node.data === value ||
      (dist = this.depth(value, node.left)) >= 0 ||
      (dist = this.depth(value, node.right)) >= 0
    ) {
      return dist + 1;
    }
    return dist;
  }

  isBalanced() {
    const node = this.root;
    const leftHeight = this.#findHeight(node.data, node.left);
    const rightHeight = this.#findHeight(node.data, node.right);

    if (leftHeight - rightHeight > 1 || leftHeight - rightHeight < -1) {
      return false;
    }
    return true;
  }

  rebalance(root = this.root) {
    if (!this.isBalanced()) {
      const newArr = this.inOrder();
      this.root = this.buildTree(newArr);
    }
    return root;
  }
}

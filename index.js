/* eslint-disable no-console */

// import Tree from './Tree.js';
const Tree = require('./Tree');

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const tree = new Tree(array);

console.log(`Start from unsorted array with duplicates ${array}`);
console.log(
  '\n',
  `const newTree = new Tree(array)\n`,
  'or newTree.buildTree(array)\n'
);
console.log('Array gets sorted and removed of duplicates');

tree.prettyPrint();

tree.insert(2);
tree.insert(199);
tree.insert(1000);
tree.insert(200);
tree.insert(222);
tree.insert(201);
tree.delete(5);
tree.delete(4);

console.log('insert(2), insert(199)... - Insert 2, 199, 1000, 200, 222, 201');
console.log('delete(5), delete(4) - Delete 5, 4');
tree.prettyPrint();
console.log(
  '\nfind(1)',
  tree.find(1),
  '\nfind(6',
  tree.find(6),
  '\nheight() - Height of root:',
  tree.height(),
  '\nheight(1) - Height of 1:',
  tree.height(1),
  '\ndepth() - Depth of root:',
  tree.depth(),
  '\ndepth(1) - Depth of 1:',
  tree.depth(1)
);

console.log(
  'levelOrder()',
  tree.levelOrder(),
  '\npreOrder()',
  tree.preOrder(),
  '\ninOrder()',
  tree.inOrder(),
  '\npostOrder()',
  tree.postOrder(),
  '\nisBalanced()',
  tree.isBalanced()
);

tree.rebalance();
console.log(
  '\n',
  'rebalance() - Rebalancing tree\n',
  'isBalanced() - Rebalcanced tree is balanced?',

  tree.isBalanced()
);

tree.prettyPrint();

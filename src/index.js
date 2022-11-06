/* eslint-disable no-console */

import Tree from './Tree.js';

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

const merge = (sortedLeft, sortedRight) => {
  const newArr = [];

  // sort two sorted arrays
  while (sortedLeft.length && sortedRight.length) {
    if (sortedLeft[0] < sortedRight[0]) {
      newArr.push(sortedLeft.shift());
    } else if (sortedLeft[0] > sortedRight[0]) {
      newArr.push(sortedRight.shift());
    }
  }

  // add remaining if other array is empty
  return [...newArr, ...sortedLeft, ...sortedRight];
};

const mergeSort = (array) => {
  if (array.length < 2) return array;

  // split array
  const mid = Math.round(array.length / 2);
  const leftArr = array.slice(0, mid);
  const rightArr = array.slice(mid, array.length);

  // sort split
  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

const removeDupes = (array) => [...new Set(array)];

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const uniqueArry = removeDupes(array);
const sorted = mergeSort(uniqueArry);

const tree = new Tree(sorted);

tree.insert(2);
tree.delete(67);

console.log(
  tree,
  'Find 1',
  tree.find(1),
  'Find 6',
  tree.find(6),
  'Level Order',
  tree.levelOrder(),
  'Preorder',
  tree.preOrder(),
  'InOrder',
  tree.inOrder(),
  'Postorder',
  tree.postOrder(),
  tree.postOrder() // check for duplication of data in array
);
prettyPrint(tree.root);

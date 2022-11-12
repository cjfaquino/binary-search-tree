/* eslint-disable no-undef */
const Tree = require('./Tree');

describe('Binary Search Tree methods', () => {
  const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const tree = new Tree();

  it('buildTree() - Build tree from array', () => {
    expect(tree.buildTree(array)).toMatchObject({
      data: 8,
      left: {
        data: 4,
        left: {
          data: 3,
          left: { data: 1, left: null, right: null },
          right: null,
        },
        right: {
          data: 7,
          left: { data: 5, left: null, right: null },
          right: null,
        },
      },
      right: {
        data: 67,
        left: {
          data: 23,
          left: { data: 9, left: null, right: null },
          right: null,
        },
        right: {
          data: 6345,
          left: { data: 324, left: null, right: null },
          right: null,
        },
      },
    });
  });

  it('insert(2) - insert 2', () => {
    expect(tree.insert(2)).toMatchObject({
      data: 8,
      left: {
        data: 4,
        left: {
          data: 3,
          left: {
            data: 1,
            left: null,
            right: { data: 2, left: null, right: null },
          },
          right: null,
        },
        right: {
          data: 7,
          left: { data: 5, left: null, right: null },
          right: null,
        },
      },
      right: {
        data: 67,
        left: {
          data: 23,
          left: { data: 9, left: null, right: null },
          right: null,
        },
        right: {
          data: 6345,
          left: { data: 324, left: null, right: null },
          right: null,
        },
      },
    });
  });

  it('delete(5) - delete 5', () => {
    expect(tree.delete(5)).toMatchObject({
      data: 8,
      left: {
        data: 4,
        left: {
          data: 3,
          left: {
            data: 1,
            left: null,
            right: { data: 2, left: null, right: null },
          },
          right: null,
        },
        right: { data: 7, left: null, right: null },
      },
      right: {
        data: 67,
        left: {
          data: 23,
          left: { data: 9, left: null, right: null },
          right: null,
        },
        right: {
          data: 6345,
          left: { data: 324, left: null, right: null },
          right: null,
        },
      },
    });
  });

  it('delete(1000) - delete a value not found', () => {
    expect(tree.delete(1000)).toMatchObject({
      data: 8,
      left: {
        data: 4,
        left: {
          data: 3,
          left: {
            data: 1,
            left: null,
            right: { data: 2, left: null, right: null },
          },
          right: null,
        },
        right: { data: 7, left: null, right: null },
      },
      right: {
        data: 67,
        left: {
          data: 23,
          left: { data: 9, left: null, right: null },
          right: null,
        },
        right: {
          data: 6345,
          left: { data: 324, left: null, right: null },
          right: null,
        },
      },
    });
  });

  it('minValue() - min value of root', () => {
    expect(tree.minValue()).toBe(1);
  });

  it('minValue(tree.root.right) - min value of right branch', () => {
    expect(tree.minValue(tree.root.right)).toBe(9);
  });

  it('find(1) - find 1', () => {
    expect(tree.find(1)).toMatchObject({
      data: 1,
      left: null,
      right: { data: 2, left: null, right: null },
    });
  });

  it('find(6) - find none existing value', () => {
    expect(tree.find(6)).toBe('none');
  });

  it('height() - height of root', () => {
    expect(tree.height()).toBe(4);
  });

  it('height(1) - height of 1', () => {
    expect(tree.height(1)).toBe(1);
  });

  it('depth() - depth of root', () => {
    expect(tree.depth()).toBe(0);
  });

  it('depth(1) - depth of 1', () => {
    expect(tree.depth(1)).toBe(3);
  });

  it('levelOrder() - BFS traversal', () => {
    expect(tree.levelOrder()).toEqual([8, 4, 67, 3, 7, 23, 6345, 1, 9, 324, 2]);
  });

  it('preOrder() - DFS pre-order traversal', () => {
    expect(tree.preOrder()).toEqual([8, 4, 3, 1, 2, 7, 67, 23, 9, 6345, 324]);
  });

  it('inOrder() - DFS in-order traversal', () => {
    expect(tree.inOrder()).toEqual([1, 2, 3, 4, 7, 8, 9, 23, 67, 324, 6345]);
  });

  it('postOrder() - DFS post-order traversal', () => {
    expect(tree.postOrder()).toEqual([2, 1, 3, 7, 4, 9, 23, 324, 6345, 67, 8]);
  });

  it('isBalanced() - check if balanced tree', () => {
    expect(tree.isBalanced()).toBe(true);
  });

  it('isBalanced() - check if balanced tree after inserting values', () => {
    tree.insert(199);
    tree.insert(200);
    tree.insert(201);
    tree.insert(202);
    expect(tree.isBalanced()).toBe(false);
  });

  it('rebalance() - rebalance an unbalanced tree', () => {
    tree.rebalance();
    expect(tree.isBalanced()).toBe(true);
  });
});

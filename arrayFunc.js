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

module.exports = { mergeSort, removeDupes };

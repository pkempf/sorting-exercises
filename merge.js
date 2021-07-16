function merge(firstArray, secondArray) {
  let res = [];
  let firstIndex = 0;
  let secondIndex = 0;

  while (firstIndex < firstArray.length && secondIndex < secondArray.length) {
    if (secondArray[secondIndex] > firstArray[firstIndex]) {
      res.push(firstArray[firstIndex]);
      firstIndex += 1;
    } else {
      res.push(secondArray[secondIndex]);
      secondIndex += 1;
    }
  }

  while (firstIndex < firstArray.length) {
    res.push(firstArray[firstIndex]);
    firstIndex += 1;
  }

  while (secondIndex < secondArray.length) {
    res.push(secondArray[secondIndex]);
    secondIndex += 1;
  }

  return res;
}

function mergeSort(array) {
  if (array.length <= 1) return array;

  const middle = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, middle));
  const right = mergeSort(array.slice(middle));

  return merge(left, right);
}

module.exports = { merge, mergeSort };

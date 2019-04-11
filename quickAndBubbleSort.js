function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}  
quickSort([14, 17, 13, 15, 19, 10, 3, 16, 9,12]);
function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  console.log(middle);
  console.log(array);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
}

function partition(array, start, end) {// starts to move everything bigger than pivot to right side then swaps pivot with J to make everything on right of pivot bigger and less on left

  const pivot = array[end - 1];
  let j = start; //i =0 
  for (let i = start; i < end - 1; i++) {

    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }

  }
  swap(array, end-1, j);
  return j;
}


function bubbleSort(array) {
  let swaps = 0;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      swap(array, i, i + 1);
      swaps++;
    }
  }

  if (swaps > 0) {
    return bubbleSort(array);
  }
  return array;
}
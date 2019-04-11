'use strict';

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


function qSort(array, start = 0, end = array.length){
  if(start >= end){
    return array;
  }
  const middle = partitionFront(array, start, end);
  qSort(array, start, middle - 1);
  qSort(array, middle + 1, end);
  return array;
}

function partitionFront(array, start, end) {
  const pivot = array[start];
  let j = start + 1;
  for(let i = j; i < end -1; i++){
    if(array[i] <= pivot){
      swapFront(array, i, j);
      j++;
    }
  }
  swapFront(array, start, j);
  return j;
}

function swapFront(array, i, j){
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

console.log(qSort([30, 25, 32, 89, 72, 70, 51, 42, 25]));


/*
middle = pF(arr, 0 , 9)
pF [
  pivot: 30;
  j = 1;
  i = 1;

  hit 25, j++

  when we hit second 25: 
  j = 2
  i=8

  [30, 25, 25, 32, 89, 72, 70, 51, 42, 32]

  array after pF call:
  [25, 25, 30, 32, 89, 72, 70, 51, 42, 32]
  j = 2;
  pF returns 2;

  second qSort: qsort(array, 0, 1);
    [25, 25, 30, 32, 89, 72, 70, 51, 42, 32]
  pF: 


]





*/
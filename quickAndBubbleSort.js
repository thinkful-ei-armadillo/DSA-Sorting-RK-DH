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

function msort(array){

}

const array = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];

// console.log(msort(array));

// Math.random() * (max - min) + min

function randomShuffle(array){
  for(let i = 0; i < array.length -1; i++){
    let randomIndex= Math.floor(Math.random()*(array.length));
    let temp = array[i];
    let random = array[randomIndex];
    if(i !== randomIndex){
      array[i] = random;
      array[randomIndex] = temp;
    }
  }
  return array;
}

const array2 = [89, 30, 25, 32, 72, 70];

console.log(randomShuffle(array2));
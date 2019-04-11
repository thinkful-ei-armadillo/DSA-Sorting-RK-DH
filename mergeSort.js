'use strict';

function mergeSort(array) { //seperates each number to pairs of two then works its way back up by merging the pairs
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left); 
  right = mergeSort(right); 
  return merge(left, right, array);
} 


function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    }
    else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
}


class _Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
         and the item is not on the list */
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }
  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
  insertBefore(newValue, beforeTarget) {
    if (!this.head) {
      this.insertFirst(newValue);
    }
    let currNode = this.head;
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== beforeTarget) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Target not found');
      return;
    }
    previousNode.next = new _Node(newValue, previousNode.next);
  }
  insertAfter(newValue, afterTarget) {
    if (!this.head) {
      this.insertFirst(newValue);
    }
    let currNode = this.head;
    while (currNode.next !== null && currNode.value !== afterTarget) {
      currNode = currNode.next;
    }
    if (currNode.next === null) {
      console.log('Target not found');
      return;
    }
    let newNode = new _Node(newValue, currNode.next);
    currNode.next = newNode;
  }
  insertAt(newValue, position) {
    let count = 1;
    let currNode = this.head;
    while (count < position) {
      if (currNode.next === null) {
        console.log('Could not find that position');
        return;
      }
      count++;
      currNode = currNode.next;
    }
    currNode.next = new _Node(newValue, currNode.next);
  }
}

const ll = new LinkedList();
ll.insertLast(89);
ll.insertLast(30);
ll.insertLast(25);
ll.insertLast(32);
ll.insertLast(72);
ll.insertLast(70);
ll.insertLast(51);
ll.insertLast(42);
ll.insertLast(25);
ll.insertLast(24);

function findMiddle(list){
  if(list === null){
    return list;
  }
  let slow = list;
  let fast = list.next;
  while(fast !== null){
    fast = fast.next;
    if(fast !== null){
      slow = slow.next;
      fast = fast.next;
    }
  }
  return slow;
}

function mergeList(list){
  if(list.next === null || list === null){
    return list;
  }

  // const middle = findMiddle(list);
  const left = list.head;
  const leftMiddle = findMiddle(left);
  const right = leftMiddle.next;
  leftMiddle.next = null;

  const first = mergeList(left);
  const second = mergeList(right);

  return sortLl(first, second);
}

function sortLl(first, second) {
  let result = null;
  if(first === null){
    return second;
  }
  if(second === null){
    return first;
  }

  if(first.value <= second.value){
    result = first;
    result.next = sortLl(first.next, second);
  } else {
    result = second;
    result.next = sortLl(first, second.next);
  }

  return result;
}

console.log(mergeList(ll));

// 1,2,3,3,4,6,8,9
// slow = 1; slow++;
// fast = 1; fast++++
// keep going until fast.next.next != null;

// list2 = new ll(slow.next)
// list1 = ll
// list2 = ll
// 
// slow.next = null;
// 
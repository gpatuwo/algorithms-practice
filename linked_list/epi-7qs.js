// 7. Linked Lists
function ListNode(val){
  this.data = val;
  this.next = null;
}

// 7.4 test for overlapping lists (lists are cycle-free)
/* see if common node

- iterate thru each list, see if there's a match
  - create hash table of nodes
  - iterate thru both at same time ( O(n^2) )
- or, if overlap if one tail is included in another
*/


/////////////////////////////////////////////////

// finding kth from last element// O(n) time, O(1) space
function findKthNodeFromLast(head, k){
  let length = 0, currentNode = head;

  // traverse thru list to find len
  while (currentNode !== null) {
    length++;
    currentNode = currentNode.next;
  }

  // restart traverse
  currentNode = head;

  if (length < k) return;

  // iterate up to length - k - 1
  for (let i = 0; i < length - k - 1; i++){
    currentNode = currentNode.next;
  }

  return currentNode;
}



/////////////////////////////////////////////////


// 7.7 Remove the kth last element from list
// WITHOUT finding the length PPP

/*
approaches:
- iterate through, find length,
  - itr again until length - kth
    - reassign length - k - 1's head to length - k + 1

- itr once, two pointers
*/

// this is the brute force solution!!!
function removeKthNodeFromLast(head, k) {
  let length = 0, countTempNode = head,
  prevNode = head, kthNode = head, nextNode = head;

  while (countTempNode !== null) {
    length++;
    countTempNode = countTempNode.next;
  }
  countTempNode = head;

  if (length < k) return;

  // finding the nodes
  for (let i = 0; i <= length - k; i++){
    if (i === length - k - 2 ) {
      prevNode = countTempNode;
      countTempNode = countTempNode.next;
    }
    else if (i === length - k - 1) {
      kthNode = countTempNode;
      countTempNode = countTempNode.next;
    }
    else if (i === length - k) {
      nextNode = countTempNode;
    }
    countTempNode = countTempNode.next;
  }

  // reassinging nodes
  prevNode.next = nextNode;
}

// more efficient
function removeKthLastNode(head, k){
  let prevNode = head, nextNode = head;

  // finding nextNode
  while (k-- > 0) {
    nextNode = nextNode.next;
  }

  // iterating until nextNode is last
  while (nextNode !== null) {
    prevNode = prevNode.next;
    nextNode = nextNode.next;
  }

  // reassign nodes, nextNode has over-indexed at this pt
  prevNode.next = prevNode.next.next;
}



/////////////////////////////////////////////////
// 7.10 implrement even-odd merge
/*
- create pointers: end of even, beginning of odd, end of odd
- itr thru list,
*/



/////////////////////////////////////////////////
// 7.11 singly linked list palindromic? 

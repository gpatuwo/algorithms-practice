// 7. Linked Lists

// 7.4 test for overlapping lists (lists are cycle-free)
/* see if common node

- iterate thru each list, see if there's a match
  - create hash table of nodes
  - iterate thru both at same time ( O(n^2) )
- or, if overlap if one tail is included in another
*/


// 7.7 Remove the kth last element from list
// WITHOUT knowing the length

/*
approaches:
- iterate through, find length,
  - itr again until length - kth
    - reassign length - k - 1's head to length - k + 1

- itr once, two pointers
*/

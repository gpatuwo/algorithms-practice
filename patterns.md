## Problem solving patterns

#### reversing
- two indicies, one forward one backward, swap w/temp

#### symmetry
- test two sides for equality

#### palindromicity
- comparison of first and last elements until center
- split into 2 parts, test if part one and reverse of part 2 are equal

#### recursion
- want to do work repeatedly?
  - is there a subset that needs to be repeated?
    - y: break off recursion into subproblem
    - n: do recursion now
- what's the base case? what happens at the elemental level?
  - return base case
- assume the work's almost done. what's the last case?
  - return last case
- any steps needed in between?
  - make it happen

#### choosing data structures:
- heaps
  - care about **largest** or **smallest** elements
  - and no need for fast lookup/delete/search
  - O(log n) insertion
  - O(log n) deletion (of root)

#### choosing a sort
##### iterative comparison sorts
compares pairs of elements and decides to swap or not.
Time: O(n^2)
Space: O(1)
- [bubble sort](sorts/bubblesort.js)
  1. while arr is not sorted
  2. assign isSorted to true and iterate arr
  3. compare adjacent pairs
  4. if i+1 > i, swap and assign isSorted to false
  5. once finish iteration, largest el will be in the last idx and repeats 2-5
  6. if itr thru arr and isSorted not reassigned to false, then whole arr is now sorted

- selection sort
  1. assigns sorted/unsorted boundary `L`, initially to 0
  2. steps thru arr to assign and find the smallest num
  3. once at the end, if smallest num <  `arr[L + 1]` then swaps
  4. `L` is incremented up
  5. repeats until `L` is at the end

- [insertion sort](sorts/insertion.js)
  1. compares el to the previous num/s until hits one that's smaller than el
  2. insert it after this smallest el
  3. repeats until end

##### recursive comparison sorts
divides n conquers recursively.
Time: O(n log n)
Space: O(n)

- merge sort
  1. divide unsorted arr down to elemental stage
  2. merge each el into pairs
  3. merge pairs into group of 4
  4. finally, merge 2 n/2 groups together to get final sorted arr

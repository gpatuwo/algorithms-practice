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

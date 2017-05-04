/*
What does this algorithm do? -> if any 3 consecutive nums add up to x

What's the runtime? -> O(n ^ 3)
How can you improve on the runtime?

*/
function foo(a, x){
  for (var i = 0; i < a.length; ++i){
    for (var j = i + 1; j < a.length; ++j){
      for (var k = j + 1; k < a.length; ++k){
        if (a[i] + a[j] + a[k] === x) return true;
      }
    }
  }
  return false;
}

/*
- initialize indices: one = 0, two = 1, three = 2
- loop while three < a.length
  - check if a[one] + a[two] + a[three] === x
    - yes, return true
    - no, increment vars up by one
- return false at end outside loop
*/

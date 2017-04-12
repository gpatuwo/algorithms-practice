// Primitives

/*
4.8 REVERSED DIGITS

Write a program which takes an integer and returns
the integer corresponding to the digits of the input
written in reverse order (eg 42 is 24, -345 is -543)
*/
function reverseDigits(num) {
  let numArr = `${Math.abs(num)}`.split('').reverse().map((el) => Number(el));
  let result = Number(numArr.join(''));

  return num < 0 ? -result : result;

}

// console.log(reverseDigits(342) === 243);
// console.log(reverseDigits(-321) === -123);

/////////////////////////////////////////////////

// 5. ARRAYS

// rearrange array in place with even numbers in front (aka O(1) space)
// PPPP
function evenFirst(arr) {
  let front = 0,  back = arr.length - 1;

  while (front < back) {
    if (arr[front] % 2 === 0) {
      front++;
    } else {
      let temp = arr[front]; // 1, 3
      arr[front] = arr[back]; // 4
      arr[back] = temp; // [3, 2, 5, 4, 1], [4, 2, 5, 3, 1]
      back--;
    }
  }

  return arr;
}

// console.log(evenFirst([1, 2, 5, 4, 3]));


// 5.2 increment an arbitrary-precision integer
function incrementNum (arr) {
  let numNow = parseInt(arr.join(''));
  let numNext = numNow + 1;
  return numNext.toString().split('').map((el) => parseInt(el));
}

// console.log(incrementNum([1, 2, 9]).toString() === [1, 3, 0].toString());

// 5.5 delete dups from sorted arr /PPPP
// *** pay attention to what actually needs to be output so no unnec work done!!
/*
  - bc it's a sorted arr, dups are placed after the first mention
  - what we want to output is number of undup'd numbers

  - if arr empty, return 0
  - est count = 1
  - itr thru arr
    - if previous != current, then count++
*/

// 5.7 sudoku checker


/////////////////////////////////////////////////

// 6. STRINGS

// check in-place if palindrome
function isPalindrome(str) {
  for (var i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str.charAt(i) !== str.charAt(j)) return false;
  }

  return true;
}

// console.log(isPalindrome('cat') === false);
// console.log(isPalindrome('hannah') === true);


// 6.5 test palindromicity
function isPalindromic(str) {
  // remove non letters
  // start from front of string, compare to back of string

  let i = 0, j = str.length - 1;
  while (i < j) {
    if (str[i].match(/^[a-z0-9]+$/i) && str[j].match(/^[a-z0-9]+$/i)) {
      if (str[i].toLowerCase() === str[j].toLowerCase()) {
        i++;
        j--;
      } else {
        return false;
      }
    }
    else if (!str[i].match(/^[a-z0-9]+$/i)) {i++;}
    else {j--;}
  }

  return true;
}

// console.log(isPalindromic('hannah'));
// console.log(isPalindromic('cat'));
// console.log(isPalindromic('hannah han nah'));


// 6.6 reverse sentence
function revSentence(str) {
  let strArr = str.split(' ');
  return strArr.reverse().join(' ');
}

// console.log(revSentence('Bob likes Alice') === 'Alice likes Bob');




/////////////////////////////////////////////////

// 12. HASH TABLES

// 12.1 test for palindromic permutations
/*
edified -> deified
hannnah
- itr thru letters
  - store letters and their counts into hash table
- if word lenght is even, then see if count of every letter is divisible by 2
- if odd, is count of every but ONE letter is an odd count ?
*/

function isPermPalindrome(str){
  let letterCount = {};

  str.split('').forEach( (letter) => {
    if (letterCount[letter]) {
      // bc now you've seen the letter an even num of times!!
      delete letterCount[letter];
    } else {
      letterCount[letter] = 1;
    }
  });

  return Object.keys(letterCount).length <= 1;
}

// console.log(isPermPalindrome('edified') === true);
// console.log(isPermPalindrome('dog') === false);


// 12.6 find nearest repeated in arr
/* */

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

// Arrays

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


// 5.7 sudoku checker


/////////////////////////////////////////////////

// 6 Strings

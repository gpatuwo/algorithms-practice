// EPI

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

console.log(reverseDigits(342) === 243);
console.log(reverseDigits(-321) === -123);

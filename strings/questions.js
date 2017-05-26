/* given “foo(bar(zoo))”, reverse any string inside parens —> foo(barooz) -> foozoorab  */
function reverser(str){
  // handle str
  let strArr = str.split("(");
  let lastidx = strArr.length - 1;
  let lastword = strArr[lastidx];

  // get rid of pesky end parens
  let parenNum = lastword.length - (lastidx);
  strArr[lastidx] = lastword.substring(0, parenNum);

  // recursive fct to reverse
  return handleReverse(strArr);
}

function handleReverse(arr){
  if (arr.length === 1 ) return arr[0];

  // reverse return value
  let reversed = handleReverse(arr.slice(1)).split("").reverse().join("");

  return arr[0].concat(reversed);
}

// console.log(reverser("foo(bar(zoo))"));
// console.log(reverser("foo(bar(zoo(bat)))"));

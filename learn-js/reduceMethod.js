var arr = [10, 20, 30, 40];
var s = ["a", "b", "c"];



function sumOfArray(sum, num) { 
  return sum + num;
}

function concatString(myStr, c) {
  return myStr + c;
}



console.log("arr = " + arr);

console.log("arr.reduce(sumOfArray) = " + arr.reduce(sumOfArray));

console.log("s = " + s);
console.log("s.reduce(concatString) = " + s.reduce(concatString));




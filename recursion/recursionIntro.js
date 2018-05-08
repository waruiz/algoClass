//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
const loopDownWhile = (n) => {
  while (n >= 0) {
    n--;
  }
};
loopDownWhile(5);

//2. Next, try looping just like above except using recursion
const loopDownRecurse = (n) => {
  !n ? null : loopDownRecurse(n - 1);
};
loopDownRecurse(5);

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
const exponent = (base, expo) => {
  let result = 1;
  while (expo >= 1) {
    result *= base;
    expo--;
  }
  return result;
};
// console.log(exponent(2, 3) === 2**3); // testing

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
const recursiveExponent = (base, expo) => {
  return expo === 1 ? base : base * recursiveExponent(base, expo - 1);
};
// console.log(recursiveExponent(2, 3) === 2**3); // testing

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
const recursiveMultiplier = (arr, num) => {
  if (arr.length === 1) {
    return [arr[0] * num];
  } else {
    return [arr[0] * num].concat( recursiveMultiplier(arr.slice(1), num) );
  }
};
// console.log( JSON.stringify(recursiveMultiplier([2, 3, 4], 2)) === JSON.stringify([4, 6, 8]) ) // testing

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
const recursiveReverse = (arr) => {
  return arr.length === 1 ? arr : [arr[arr.length - 1]].concat( recursiveReverse(arr.slice(0, arr.length - 1)) );
};
// console.log( JSON.stringify(recursiveReverse([2, 3, 4, 5])) === JSON.stringify([5, 4, 3, 2]) ); // testing

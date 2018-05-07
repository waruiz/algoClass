/*
Implement factorial.

factorial(5) => 5*4*3*2*1 => 120
*/

const factorial = (num) => {
  return num <= 1 ? 1 : num * factorial(num - 1);
};

console.log( factorial(5) );

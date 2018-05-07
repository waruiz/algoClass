/*
Implement a function that will reverse a string recursively.

reverse('abcdefg')
=> 'gfedcba'
*/

const reverse = (str) => {
  return str.length === 1 ? str : ( str[str.length - 1] + reverse(str.slice(0, str.length - 1)) );
};

console.log( reverse('abcdefg') );
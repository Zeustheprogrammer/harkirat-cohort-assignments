/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z]/g,'');
  let low =0;
  let high = str.length-1;
  while(low<high) {
    if(str[low++]!=str[high--]) return false;
  }
  return true;
}

module.exports = isPalindrome;

/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if(!numbers || numbers.length == 0) return;
    const res = numbers.reduce((acc, num)=> acc<num? num:acc)
    return res;
}

module.exports = findLargestElement;
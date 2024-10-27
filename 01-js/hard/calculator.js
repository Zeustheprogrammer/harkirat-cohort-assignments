/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.res = 0;
  }

  validate(num) {
    return typeof num === "number";
  }

  add(num) {
    if (!this.validate(num)) return new Error("Invalid Input");
    this.res += num;
  }
  subtract(num) {
    if (!this.validate(num)) return new Error("Invalid Input");
    this.res -= num;
  }

  multiply(num) {
    if (!this.validate(num)) return new Error("Invalid Input");
    this.res *= num;
  }

  divide(num) {
    if (!this.validate(num)) throw new Error("Invalid Input");
    if (num === 0) throw new Error("Division by zero is not allowed");
    this.res /= num;
  }

  clear() {
    this.res = 0;
  }

  getResult() {
    return this.res;
  }

  calculate(str) {
    str = str.replace(/\s+/g, "");
    if (str.includes("/0")) {
      throw new Error("Division by zero is not allowed");
    }
    this.res = eval(str);
    if (this.res === Infinity) return new Error("Infinity");
    return this.res;
  }
}

module.exports = Calculator;

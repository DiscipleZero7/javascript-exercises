const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((a, b) => {
    return a + b;
  }, 0)
};

const multiply = function(arr) {
  return arr.reduce((a, b) => {
    return a * b;
  }, 1)
};

const power = function(base, exponent) {
  let total = base;
	for (let i = 1; i < exponent; i++) {
    total = total * base;
  }

  return total;
};

const factorial = function(num) {
	if (num <= 0) {
    return 1;
  };

  let total = 1;
  for (let i = 1; i <= num; i++) {
    total = total * i  
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

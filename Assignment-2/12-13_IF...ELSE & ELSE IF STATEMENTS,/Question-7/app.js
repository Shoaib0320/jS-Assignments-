// let input = prompt('Enter a number or uppercase or lowercase letter')
// let onlyLetters = /^[a-zA-Z]/
// const upperCase = input.toUpperCase()
// const lowerCase = input.toLowerCase()
// const numInput = Number(input)

// if (Number.isInteger(numInput) == true) {
//   alert(input + ' is a number')
// } else if (input === upperCase || lowerCase) {
//   if (input === upperCase) {
//     alert(input + ' is an uppercase letter')
//   } else if (input === lowerCase) {
//     alert(input + ' is a lowercase letter')
//   }
// } else {
//   alert(input + ' is a special character')
// }

// program for a simple calculator

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
alert(`${number1} ${operator} ${number2} = ${result}`);
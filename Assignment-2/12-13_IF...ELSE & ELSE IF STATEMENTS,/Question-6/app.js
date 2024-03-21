let input = prompt('Enter a number or uppercase or lowercase letter')
let onlyLetters = /^[a-zA-Z]/
const upperCase = input.toUpperCase()
const lowerCase = input.toLowerCase()
const numInput = Number(input)

if (Number.isInteger(numInput) == true) {
  alert(input + ' is a number')
} else if (input === upperCase || lowerCase) {
  if (input === upperCase) {
    alert(input + ' is an uppercase letter')
  } else if (input === lowerCase) {
    alert(input + ' is a lowercase letter')
  }
} else {
  alert(input + ' is a special character')
}
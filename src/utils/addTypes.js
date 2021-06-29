const specialChars = require('./charTypes');
const replaceChar = require('./replaceChar');
const { hasNumber, hasLowerCase } = require('./regex');

module.exports = function addTypes(input) {
  for (var i = 0; i < 40; i++) {
    const char = input.charAt(i);
    if (hasLowerCase(char) && !(i % 2) && i < 30) {
      input = replaceChar(input, char.toUpperCase(), i);
    } else if (hasNumber(char) && i % 2 && i > 8) {
      input = replaceChar(input, specialChars[i - char], i);
    }
  }
  return input.slice(0, 45);
};

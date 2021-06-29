const addTypes = require('./addTypes');
const createHash = require('./createHash');
const replaceChar = require('./replaceChar');
const { hasNumber, hasLowerCase, hasSpecialCharacter } = require('./regex');

module.exports = {
  addTypes,
  hasSpecialCharacter,
  createHash,
  replaceChar,
  hasLowerCase,
  hasNumber,
};

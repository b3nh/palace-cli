/*eslint-disable no-useless-escape*/

function hasNumber(string) {
  return /\d/.test(string);
}

function hasLowerCase(string) {
  return /[a-z]/.test(string);
}

function hasUpperCase(string) {
  return /[A-Z]/.test(string);
}

function hasSpecialCharacter(string) {
  return /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(string);
}

module.exports = {
  hasNumber,
  hasLowerCase,
  hasUpperCase,
  hasSpecialCharacter,
};

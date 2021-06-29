const crypto = require('crypto');

module.exports = function createHash(input) {
  if (!input) return;
  return crypto.createHash('sha256').update(input).digest('hex');
};

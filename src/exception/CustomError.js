const { ERROR_HEADER } = require('../constants/error');

class CustomError extends Error {
  constructor(message, name = 'CustomError') {
    super(`${ERROR_HEADER} ${message}`);
    this.name = name;
  }
}

module.exports = CustomError;
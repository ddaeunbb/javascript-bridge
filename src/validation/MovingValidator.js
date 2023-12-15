const { REGEX_UPPER } = require('../constants/regex');
const CustomError = require('../exception/CustomError');
const { ERROR_MESSAGE } = require('../constants/error');
const { STR_BRIDGE } = require('../constants/string');

/**
 * @classdesc MovingValidator
 * 움직이는 방향 값을 검증한다.
*/
class MovingValidator {
  /**
   * 대문자인지 판별한다.
   * @param {string} direction
  */
  static isUpperCase(direction) {
    if(!REGEX_UPPER.test(direction)) throw new CustomError(ERROR_MESSAGE.shouldBeUpperCase);
  }
  /**
   * 'U' or 'D' 인지 판별한다.
   * @param {string} direction
  */
  static isUpOrDown(direction) {
    const  { up, down } = STR_BRIDGE;
    if(!(direction === up || direction === down)) throw new CustomError(ERROR_MESSAGE.shouldBeUorD);
  }

  static validateMoving(direction) {
    this.isUpperCase(direction)
    this.isUpOrDown(direction);
  }
}

module.exports = MovingValidator;
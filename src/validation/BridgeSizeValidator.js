const { REGEX_NUM } = require('../constants/regex');
const CustomError = require('../exception/CustomError');
const { ERROR_MESSAGE } = require('../constants/error');
const { NUM_BRIDGE } = require('../constants/number');
/**
 * @classdesc BridgeSizeValidator
 * 다리 사이즈 입력값을 검증한다.
*/
class BridgeSizeValidator {
  /**
   * 숫자인지 판별한다.
   * @param {string} num
  */
  static isNumber(num) {
    if(!REGEX_NUM.test(num)) throw new CustomError(ERROR_MESSAGE.shouldBeNumber);
  }
  /**
   * 3이상 20이하의 숫자인지 판별한다.
   *  @param {string} num
  */
  static isNumInRange(num) {
    const { start, end } = NUM_BRIDGE;
    const number = Number(num);
    if(!(number >= start && number <= end)) throw new CustomError(ERROR_MESSAGE.shouldBeInRange);
  }

  static validateBridgeSize(num) {
    this.isNumber(num);
    this.isNumInRange(num);
  }
}

module.exports = BridgeSizeValidator;
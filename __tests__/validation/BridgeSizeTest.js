const { ERROR_MESSAGE } = require('../../src/constants/error');
const BridgeSizeValidator = require('../../src/validation/BridgeSizeValidator');

describe('다리 길이 입력 테스트', () => {
  // given
  const notNum = ['이십이', '삼십사', 'seven', '70정도', '네개', '!', '@#', '2123@#$']

  test.each(notNum)
  ('숫자가 아닌 값은 입력할 수 없습니다.', (input) => {
    expect(() => BridgeSizeValidator.validateBridgeSize(input).toThrow(ERROR_MESSAGE.shouldBeNumber))
  })

  // given
  const notInRangeNum = ['1', '2', '24', '100', '21', '32341', '124312341243'];

  test.each(notInRangeNum)
  ('3이상 20이하가 아닌 숫자는 입력할 수 없습니다.', (input) => {
    expect(() => BridgeSizeValidator.validateBridgeSize(input).toThrow(ERROR_MESSAGE.shouldBeInRange))
  })
});
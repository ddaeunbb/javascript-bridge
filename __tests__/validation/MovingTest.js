const { ERROR_MESSAGE } = require('../../src/constants/error');
const MovingValidator = require('../../src/validation/MovingValidator');

describe('다리 길이 입력 테스트', () => {
  // given
  const notUpperCase = ['up', 'down', 'u', 'd', '업', '다운'];

  test.each(notUpperCase)
  ('대문자가 아닌 값은 입력할 수 없습니다.', (input) => {
    expect(() => MovingValidator.validateMoving(input).toThrow(ERROR_MESSAGE.shouldBeUpperCase))
  })

  // given
  const notUorD = ['A', 'B', 'C', 'D', 'UU', 'DD', 'UUU', 'ASDF'];

  test.each(notUorD)
  ('U나 D가 아닌 값은 입력할 수 없습니다.', (input) => {
    expect(() => BridgeSizeValidator.validateBridgeSize(input).toThrow(ERROR_MESSAGE.shouldBeUorD))
  })
});
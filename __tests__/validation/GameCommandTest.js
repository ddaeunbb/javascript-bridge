const { ERROR_MESSAGE } = require('../../src/constants/error');
const GameCommandValidator = require('../../src/validation/GameCommandValidator');

describe('다리 길이 입력 테스트', () => {
  // given
  const notUpperCase = ['quit', 'restart', 'r', 'q', '다시', '그만'];

  test.each(notUpperCase)
  ('대문자가 아닌 값은 입력할 수 없습니다.', (input) => {
    expect(() => GameCommandValidator.validateGameCommand(input).toThrow(ERROR_MESSAGE.shouldBeUpperCase))
  })

  // given
  const notRorQ = ['A', 'B', 'RR', 'QQ', 'RRRR', 'RQRQ', 'UUU', 'ASDF'];

  test.each(notRorQ)
  ('R나 Q가 아닌 값은 입력할 수 없습니다.', (input) => {
    expect(() => GameCommandValidator.validateGameCommand(input).toThrow(ERROR_MESSAGE.shouldBeRorQ))
  })
});
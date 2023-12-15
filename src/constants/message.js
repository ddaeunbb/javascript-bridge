const OUTPUT_MESSAGE = Object.freeze({
  printPlay: `다리 건너기 게임을 시작합니다.\n`,
  printTotalResult: '게임 성공 여부: ',
  printTotalTryCount: '총 시도한 횟수: ',
  printResultPhrase: '최종 게임 결과',
});

const INPUT_MESSAGE = Object.freeze({
  readBridgeSize: `다리의 길이를 입력해주세요.\n`,
  readMoving: `이동할 칸을 선택해주세요. (위: U, 아래: D)\n`,
  readGameCommand: `게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n`,
});

exports.OUTPUT_MESSAGE = OUTPUT_MESSAGE;
exports.INPUT_MESSAGE = INPUT_MESSAGE;
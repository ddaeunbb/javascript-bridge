const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const BridgeSizeValidator = require('../validation/BridgeSizeValidator');
const MovingValidator = require('../validation/MovingValidator');
const BridgeGame = require('../domain/BridgeGame');
const { STR_GAMEPROCESS, STR_GAMERESULT } = require('../constants/string');
const GameCommandValidator = require('../validation/GameCommandValidator');

class BridgeGameController {
  #bridgeGame;
  #tryCount = 1;

  /**
   * 사용자에게 다리 길이를 입력받고 검증한다. 검증되었다면 BridgeGame의 필드로 저장한다.
   */
  buildBridge() {
    OutputView.printPlay();
    const size = InputView.readBridgeSize();
    BridgeSizeValidator.validateBridgeSize(size);
    this.#bridgeGame = new BridgeGame(size);
  }

  /**
   * 사용자에게 움직일 방향을 입력받고 검증한다. 그리고 결과를 출력한다.
   */
  announceResult(total) {
    const direction = InputView.readMoving();
    MovingValidator.validateMoving(direction);
    const result = this.#bridgeGame.move(direction);
    total.push(result);
    OutputView.printMap(total);
    return result.process;
  }

  /**
   * 게임을 재개하는 메서드. 도전한 숫자를 갱신하고 재도전한다.
   */
  tryAgain() {
    this.#bridgeGame.retry();
    this.#tryCount += 1;
    this.moveOneByOne();
  }

  /**
   * 게임을 종료한다. 종료즉시 결과와 성공유무를 출력한다.
   */
  quitGame(total) {
    OutputView.printResultPhrase();
    OutputView.printMap(total);
    OutputView.printResult(STR_GAMERESULT.fail, this.#tryCount);
  }

  /**
   * 게임이 성공하면 결과를 출력한다.
   */  
  judgeFinalMatch(total) {
    OutputView.printResultPhrase();
    OutputView.printMap(total);
    OutputView.printResult(STR_GAMERESULT.success, this.#tryCount);
  }

  /**
   * 게임이 실패했을 경우, 재개할지 그만둘지 입력을 받고 입력값을 검증한다.
   * 값에 따라 재개하거나 아니면 게임을 종료한다.
   */
  askToRestarOrQuit(total) {
    const restartOrQuit = InputView.readGameCommand();
    GameCommandValidator.validateGameCommand(restartOrQuit);
    if(restartOrQuit === STR_GAMEPROCESS.restart) this.tryAgain();
    else this.quitGame(total);
  }

  /**
   * 게임을 실패하거나 성공하기 전까지 사용자에게 입력값을 받고, 게임을 재개하거나 게임을 종료한다.
   */
  moveOneByOne() {
    const total = [];
    let process = STR_GAMEPROCESS.continue;
    while(process === STR_GAMEPROCESS.continue) process = this.announceResult(total);
    if(process === STR_GAMEPROCESS.fail) this.askToRestarOrQuit(total);
    else if(process === STR_GAMEPROCESS.success) this.judgeFinalMatch(total);
  }
}

module.exports = BridgeGameController;
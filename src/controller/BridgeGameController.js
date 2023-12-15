const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const BridgeSizeValidator = require('../validation/BridgeSizeValidator');
const MovingValidator = require('../validation/MovingValidator');
const BridgeGame = require('../domain/BridgeGame');
const { STR_GAMEPROCESS } = require('../constants/string');
const GameCommandValidator = require('../validation/GameCommandValidator');

class BridgeGameController {
  #bridgeGame;
  #tryCount = 1;

  buildBridge() {
    OutputView.printPlay();
    const size = InputView.readBridgeSize();
    BridgeSizeValidator.validateBridgeSize(size);
    this.#bridgeGame = new BridgeGame(size);
  }

  announceResult(total) {
    const direction = InputView.readMoving();
    MovingValidator.validateMoving(direction);
    const result = this.#bridgeGame.move(direction);
    total.push(result);
    OutputView.printMap(total);
    return result.process;
  }

  tryAgain() {
    this.#bridgeGame.retry();
    this.#tryCount += 1;
    this.moveOneByOne();
  }

  quitGame(total) {
    OutputView.printResultPhrase();
    OutputView.printMap(total);
    OutputView.printResult('실패', this.#tryCount);
  }

  judgeFinalMatch(total) {
    OutputView.printResultPhrase();
    OutputView.printMap(total);
    OutputView.printResult('성공', this.#tryCount);
  }

  askToRestarOrQuit(total) {
    const restartOrQuit = InputView.readGameCommand();
    GameCommandValidator.validateGameCommand(restartOrQuit);
    if(restartOrQuit === STR_GAMEPROCESS.restart) this.tryAgain();
    else this.quitGame(total);
  }

  moveOneByOne() {
    const total = [];
    let process = STR_GAMEPROCESS.continue;
    while(process === STR_GAMEPROCESS.continue) process = this.announceResult(total);
    if(process === STR_GAMEPROCESS.fail) this.askToRestarOrQuit(total);
    else if(process === STR_GAMEPROCESS.success) this.judgeFinalMatch(total);
  }
}

module.exports = BridgeGameController;
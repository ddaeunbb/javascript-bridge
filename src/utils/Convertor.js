const { STR_BRIDGE, SYMBOL } = require('../constants/string')
/**
 * 사용자가 입력한 방향이 무엇이고, 맞췄는지 여부에 따라 위에 들어갈 문자와 아래에 들어갈 문자를 반환한다.
 * @param {string} direction // 'U' | 'D'
 * @param {boolean} match
 * @return {{up: string, down: string}} // 문자는 'O', 'X', ' ' 중 하나
*/
const upAndCheckMatch = (direction, match) => {
  const { up, down, O, X }  = STR_BRIDGE;
  if(direction === up && match) return { up: O, down: SYMBOL.space};
  if(direction === up && !match) return { up: X, down: SYMBOL.space};
  if(direction === down && match) return { up: SYMBOL.space, down: O};
  return { up: ' ', down: X};
}

/**
 * 배열에 담긴 각 객체를 돌면서 위방향과 아래방향이 출력해야할 문구를 담는다.
 * 최종적으로는 길이가 2인 배열을 반환하는데, idx가 0인 것은 위방향, 1은 아래방향이다.
 * 예시 ['O O ', ' O '] / ['OX', '  ']
 * @param {{direction: string, match: boolean, process: string}[]} total
 * @return {string[]}
*/
const totalMapTostrArr = (total) => {
  const map = [SYMBOL.blank, SYMBOL.blank];
  total.forEach(({direction, match}) => {
    const { up, down } = upAndCheckMatch(direction, match);
    map[0] += up;
    map[1] += down;
  })
  return map;
};

exports.totalMapTostrArr = totalMapTostrArr;
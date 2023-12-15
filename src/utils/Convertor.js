const { STR_BRIDGE, SYMBOL } = require('../constants/string')

const upAndCheckMatch = (direction, match) => {
  const { up, down, O, X }  = STR_BRIDGE;
  if(direction === up && match) return { up: O, down: SYMBOL.space};
  if(direction === up && !match) return { up: X, down: SYMBOL.space};
  if(direction === down && match) return { up: SYMBOL.space, down: O};
  return { up: ' ', down: X};
}

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
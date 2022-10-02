const findBlockLength = (id, position) => {
  const temp_length = Number(id.substring(position, position + 1)) * 2;
  return temp_length.toString().length;
};

const evaluateBlock = (blockValue, id, position) => {
  const trimValue = Number(id.substring(position, position + 1));
  if (blockValue === 1) {
    return trimValue * 2;
  } else if (blockValue === 2) {
    const sum = trimValue * 2;
    const firstPlace = Number(sum.toString().substring(0, 1));
    let secondPlace = 0;
    if (sum.toString().length > 1) {
      secondPlace = Number(sum.toString().substring(1, 2));
    }
    return firstPlace + secondPlace;
  }
  return 0;
};

export const validateID = id => {
  if (id.length !== 10) return false;

  let sum =
    Number(id.substring(1, 2)) +
    Number(id.substring(3, 4)) +
    Number(id.substring(5, 6)) +
    Number(id.substring(7, 8));

  const tempS1 = evaluateBlock(findBlockLength(id, 0), id, 0);
  sum += tempS1;
  const tempS2 = evaluateBlock(findBlockLength(id, 2), id, 2);
  sum += tempS2;
  const tempS3 = evaluateBlock(findBlockLength(id, 4), id, 4);
  sum += tempS3;
  const tempS4 = evaluateBlock(findBlockLength(id, 6), id, 6);
  sum += tempS4;
  const tempS5 = evaluateBlock(findBlockLength(id, 8), id, 8);
  sum += tempS5;

  let remainder = 10 - (sum % 10);
  if (remainder === 10) {
    remainder = 0;
  }

  const tempS6 = Number(id.substring(9, 10));
  return tempS6 === remainder;
};

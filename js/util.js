const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


function checkStringLength (string, length) {
  return string.length <= length;
}

checkStringLength('', 140);


const getRandomArrayElement = (elements) => elements [getRandomPositiveInteger(0, elements.length - 1)];

export {getRandomPositiveInteger,getRandomArrayElement};

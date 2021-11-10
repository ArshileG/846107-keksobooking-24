const randNumber = (min, max) => {
  if (min <= max) {
    const randomN = Math.random() * (max - min) + min;
    return Math.floor(randomN);
  } else {
    return NaN;
  }
};

const randFloatingNumber = (min, max) => {
  const highlightedNumber = (Math.random() * (max - min) + min).toFixed(5);
  return highlightedNumber;
};

const checkStrLength = function(string, length) {
  return string.length < length;
};
const getRandomItemsArray = (array, itemsNumber) => {

  const randArray = [];

  const numbers = Array(array.length).fill().map((_, index) => index );
  const arrShuffledNumbers = numbers.sort(() => Math.random() - 0.5);

  for (let i = 0; i < itemsNumber; i++) {
    randArray[i] = array[arrShuffledNumbers[i]];
  }
  return randArray;
};

export {randNumber, randFloatingNumber, checkStrLength,getRandomItemsArray};

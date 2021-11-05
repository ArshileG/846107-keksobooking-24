const randNumber = (min, max) => {
  if (min < max) {
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


export {randNumber, randFloatingNumber, checkStrLength};

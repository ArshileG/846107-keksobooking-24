// Source of Function - https://stackabuse.com/javascript-generate-random-number-in-range/
const randomNumber = function(min, max) {
  if(min < max){
    const randomN = Math.random()*(max-min) + min;
    return Math.floor(randomN);
  } else {
    return NaN;
  }
};

const checkStrLength = (string,length) => string.length < length;


randomNumber();
checkStrLength(10, 5);

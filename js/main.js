// Source of Function - https://stackabuse.com/javascript-generate-random-number-in-range/
function randomNumber(min, max) {
  if(min < max){
    const randomN = Math.random()*(max-min) + min;
    return Math.floor(randomN);
  } else {
    return NaN;
  }
}

function checkStrLength(string, length) {
  if(string.length > length) {
    return false;
  }
  return true;
}

randomNumber();
checkStrLength(10, 5);

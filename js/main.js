// Source of Function - https://stackabuse.com/javascript-generate-random-number-in-range/
const randNumber = function(min, max) {
  if(min < max){
    const randomN = Math.random()*(max-min) + min;
    return Math.floor(randomN);
  } else {
    return NaN;
  }
};
const randFloatingNumber = function(min, max){
  const highlightedNumber = (Math.random() * (max - min) + min).toFixed(5);
  return highlightedNumber;
};

const checkStrLength = (string,length) => string.length < length;

const getAvatarid = function(number){
  const convertedN = number.toString().padStart(2, '0');
  return `img/avatars/user${convertedN}.png`;
};

const roomTitles = ['Studio apartment in old Tbilisi','Trendy Apartment in the Heart of Old Tbilisi','Apartment atoneli','400 Tiny Apartment in Central Tbilisi with Terrace'];
const roomDesc = ['Sunny and cozy apartment in historic part of Tbilisi', 'Calm, nice and beautiful place of Samegrelo', 'Studio typed rooms for workign environment'];
const offerType = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const objFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const checkinTime = ['12:00', '13:00', '14:00'];
const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const randObjects = [];

function generateRandObj() {
  for(let i = 0; i < 10; i++ ){
    randObjects[i] = {
      author: {
        avatar: getAvatarid(i+1),
      },
      offer: {
        title: roomTitles[randNumber(0, roomTitles.length - 1)],
        address: '',
        price: randNumber(100, 10000),
        type: offerType[randNumber(0, offerType.length - 1)],
        rooms: randNumber(1, 10),
        guests: randNumber(1, 10),
        checkin: checkinTime[randNumber(0, checkinTime.length - 1)],
        checkout: checkinTime[randNumber(0, checkinTime.length - 1)],
        features: objFeatures[randNumber(0, objFeatures.length - 1)],
        description: roomDesc[randNumber(0, roomDesc.length - 1)],
        photos: photos[randNumber(0, photos.length - 1)],
      },
      location: {
        lat:  randFloatingNumber(35.65000,35.70000),
        lng: randFloatingNumber(139.70000,139.80000),
      },

    };
  }
}

checkStrLength(10, 5);
generateRandObj();

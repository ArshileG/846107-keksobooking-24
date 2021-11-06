import  {randNumber, randFloatingNumber} from './utils.js';

const ROOMTITLES = [
  'Studio apartment in old Tbilisi',
  'Trendy Apartment in the Heart of Old Tbilisi',
  'Apartment atoneli',
  '400 Tiny Apartment in Central Tbilisi with Terrace',
];
const DESCRIPTION = [
  'Sunny and cozy apartment in historic part of Tbilisi',
  'Calm, nice and beautiful place of Samegrelo',
  'Studio typed rooms for workign environment',
];
const OFFERS = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const CHECKINTIME = [
  '12:00',
  '13:00',
  '14:00',
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const getAvatarid = (number) => {
  const convertedN = number.toString().padStart(2, '0');
  return `img/avatars/user${convertedN}.png`;
};

function generateRandObj(count) {
  const randObjects = [];
  for(let i = 0; i < count; i++ ){
    randObjects[i] = {
      author: {
        avatar: getAvatarid(i+1),
      },
      offer: {
        title: ROOMTITLES[randNumber(0, ROOMTITLES.length - 1)],
        address: '',
        price: randNumber(100, 10000),
        type: OFFERS[randNumber(0, OFFERS.length - 1)],
        rooms: randNumber(1, 10),
        guests: randNumber(1, 10),
        checkin: CHECKINTIME[randNumber(0, CHECKINTIME.length - 1)],
        checkout: CHECKINTIME[randNumber(0, CHECKINTIME.length - 1)],
        features: FEATURES[randNumber(0, FEATURES.length - 1)],
        description: DESCRIPTION[randNumber(0, DESCRIPTION.length - 1)],
        photos: PHOTOS[randNumber(0, PHOTOS.length - 1)],
      },
      location: {
        lat:  randFloatingNumber(35.65000,35.70000),
        lng: randFloatingNumber(139.70000,139.80000),
      },

    };
  }
  return randObjects;
}

export {generateRandObj};

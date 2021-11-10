import  {randNumber, randFloatingNumber, getRandomItemsArray} from './utils.js';

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
    const lat = randFloatingNumber(35.65000,35.70000);
    const lng = randFloatingNumber(139.70000,139.80000);
    randObjects[i] = {
      author: {
        avatar: getAvatarid(randNumber(1, 10)),
      },
      offer: {
        title: ROOMTITLES[randNumber(0, ROOMTITLES.length - 1)],
        address: `${lat}, ${lng}`,
        price: randNumber(100, 10000),
        type: OFFERS[randNumber(0, OFFERS.length - 1)],
        rooms: randNumber(1, 10),
        guests: randNumber(1, 10),
        checkin: CHECKINTIME[randNumber(0, CHECKINTIME.length - 1)],
        checkout: CHECKINTIME[randNumber(0, CHECKINTIME.length - 1)],
        features: getRandomItemsArray(FEATURES, randNumber(1, FEATURES.length)),
        description: DESCRIPTION[randNumber(0, DESCRIPTION.length - 1)],
        photos: getRandomItemsArray(PHOTOS, randNumber(1, PHOTOS.length+1)),
      },
      location: {
        lat:  lat,
        lng: lng,
      },

    };
  }
  return randObjects;
}

export {generateRandObj};

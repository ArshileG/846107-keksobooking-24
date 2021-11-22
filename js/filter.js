import { resetAll } from './forms.js';

const PRICE_TYPES = {
  low: 10000,
  middle: {min: 10000, max: 50000},
  high: 50000,
};


const filterByType = (offerItemValue, filterValue) => {
  if (offerItemValue.offer.type === filterValue || filterValue === 'any') {
    return true;
  }
};

const filterByPrice = (array, filterValue) => {
  switch (filterValue) {
    case 'any':
      return true;
    case 'low':
      if (array.offer.price < PRICE_TYPES[filterValue]) {
        return true;
      }
      break;
    case 'middle':
      if (array.offer.price < PRICE_TYPES[filterValue].max && array.offer.price > PRICE_TYPES[filterValue].min) {
        return true;
      }
      break;
    case 'high':
      if (array.offer.price > PRICE_TYPES[filterValue]) {
        return true;
      }
      break;
    default:
      return false;
  }
};

const filterByRooms = (offerItemValue, filterValue) => {
  if (offerItemValue.offer.rooms <= filterValue || filterValue === 'any') {
    return true;
  }
};

const filterByGuests = (offerItemValue, filterValue) => {
  if (offerItemValue.offer.guests === +filterValue || filterValue === 'any') {
    return true;
  }
};

const checkFeatures = (element) => {

  const filterWifi = document.querySelector('#filter-wifi').checked;
  const filterDishwasher = document.querySelector('#filter-dishwasher').checked;
  const filterWasher = document.querySelector('#filter-washer').checked;
  const filterParking = document.querySelector('#filter-parking').checked;
  const filterElevator = document.querySelector('#filter-elevator').checked;
  const filterConditioner = document.querySelector('#filter-conditioner').checked;

  const requiredFilters = [];

  if (filterConditioner) {
    requiredFilters.push('conditioner');
  }
  if (filterElevator) {
    requiredFilters.push('elevator');
  }
  if (filterParking) {
    requiredFilters.push('parking');
  }
  if (filterWasher) {
    requiredFilters.push('washer');
  }
  if (filterDishwasher) {
    requiredFilters.push('dishwasher');
  }
  if (filterWifi) {
    requiredFilters.push('wifi');
  }

  let rank = 0;
  const featuresArray = element.offer.features;

  if (featuresArray !== undefined) {
    featuresArray.forEach((featureItem) => {
      for (let i = 0; i < requiredFilters.length; i++) {
        if (featureItem === requiredFilters[i]) {
          rank++;
        }
      }
    });
  }
  return rank;


};
const compareByFeatures = (el1, el2) => {
  const rankA = checkFeatures(el1);
  const rankB = checkFeatures(el2);

  return rankB - rankA;
};

const filterMap = (data, cb) => {
  const mapForm = document.querySelector('.map__filters');
  const resetBtn = document.querySelector('.ad-form__reset');
  mapForm.addEventListener('change', () => {

    const housingType = document.querySelector('#housing-type');
    const housingPrice = document.querySelector('#housing-price');
    const housingRooms = document.querySelector('#housing-rooms');
    const housingGuests = document.querySelector('#housing-guests');


    const filtered = data.sort(compareByFeatures).filter((element) => {
      if (filterByType(element, housingType.value) &&
          filterByPrice(element, housingPrice.value) &&
          filterByRooms(element, housingRooms.value) &&
          filterByGuests(element, housingGuests.value)) {
        return true;
      }
    });

    cb(filtered);


  });

  resetBtn.addEventListener('click', (evt) => {
    evt.preventDefault();

    resetAll();
    cb(data);

  });
};

export {filterByType,filterByPrice,filterByRooms,filterByGuests,compareByFeatures, filterMap};

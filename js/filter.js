const PRICE_TYPES = {
  low: 10000,
  middle: {min: 10000, max: 50000},
  high: 50000,
};


function filterByType(offerItemValue, filterValue) {
  if (offerItemValue.offer.type === filterValue || filterValue === 'any') {
    return true;
  }
}

function filterByPrice(array, filterValue) {
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
      break;
  }
}

function filterByRooms(offerItemValue, filterValue) {
  if (offerItemValue.offer.rooms <= filterValue || filterValue === 'any') {
    return true;
  }
}

function filterByGuests(offerItemValue, filterValue) {
  if (offerItemValue.offer.guests <= filterValue || filterValue === 'any') {
    return true;
  }
}

export {filterByType,filterByPrice,filterByRooms,filterByGuests};

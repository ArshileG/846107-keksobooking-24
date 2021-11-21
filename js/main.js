import {} from './api.js';
import {createMarker, clearMarker} from './map.js';
import {createCardFromData} from './randElements.js';
import {filterByType,filterByPrice,filterByRooms,filterByGuests} from './filter.js';
import {adFormSubmit, successMsg, errorMsg, resetAll} from './forms.js';

const mapForm = document.querySelector('.map__filters');
const resetBtn = document.querySelector('.ad-form__reset');

const renderMarkers = (data) => {
  clearMarker();
  data.slice(0, 10).forEach((element) => {
    createMarker(element, createCardFromData);
  });

};

function checkFeatures(element){

  const filterWifi = document.querySelector('#filter-wifi').checked;
  const filterDishwasher = document.querySelector('#filter-dishwasher').checked;
  const filterWasher = document.querySelector('#filter-washer').checked;
  const filterParking = document.querySelector('#filter-parking').checked;
  const filterElevator = document.querySelector('#filter-elevator').checked;
  const filterConditioner = document.querySelector('#filter-conditioner').checked;

  const requiredFilters = [];

  if(filterConditioner) {
    requiredFilters.push('conditioner');
  }
  if(filterElevator) {
    requiredFilters.push('elevator');
  }
  if(filterParking) {
    requiredFilters.push('parking');
  }
  if(filterWasher) {
    requiredFilters.push('washer');
  }
  if(filterDishwasher) {
    requiredFilters.push('dishwasher');
  }
  if(filterWifi) {
    requiredFilters.push('wifi');
  }

  let rank = 0;
  const featuresArray = element.offer.features;

  if(featuresArray !== undefined){
    featuresArray.forEach(element => {
      for(let i = 0; i < requiredFilters.length; i++){
        if(element === requiredFilters[i]){
          rank++;
        }
      }
    });
  }
  return rank;


}
function compareByFeatures(el1, el2){
  const rankA = checkFeatures(el1);
  const rankB = checkFeatures(el2);

  return rankB - rankA;
}

fetch('https://24.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((data) => {

    renderMarkers(data);
    let filtered = data.slice();

    mapForm.addEventListener('change', () => {
      const housingType = document.querySelector('#housing-type');
      const housingPrice = document.querySelector('#housing-price');
      const housingRooms = document.querySelector('#housing-rooms');
      const housingGuests = document.querySelector('#housing-guests');

      //console.log(housingFeatures.checked );
      filtered = data.sort(compareByFeatures).filter((element) => {
        if (filterByType(element, housingType.value) &&
          filterByPrice(element, housingPrice.value) &&
          filterByRooms(element, housingRooms.value) &&
          filterByGuests(element, housingGuests.value)) {
          return true;
        }
      });
      console.log(filtered);
      renderMarkers(filtered);

      resetBtn.addEventListener('click', (evt) => {
  evt.preventDefault();

  resetAll();

});

    });

    resetBtn.addEventListener('click', (evt) => {
      evt.preventDefault();

      resetAll();
      renderMarkers(data);

    });

  })
  .catch(() => {
    //alert('Не удалось отправить форму. Попробуйте ещё раз');
  });


adFormSubmit(successMsg, errorMsg);




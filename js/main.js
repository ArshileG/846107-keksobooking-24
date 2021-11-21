import {} from './api.js';
import {createMarker, clearMarker} from './map.js';
import {createCardFromData} from './randElements.js';
import {filterByType,filterByPrice,filterByRooms,filterByGuests} from './filter.js';
import {adFormSubmit, successMsg, errorMsg, resetAll} from './forms.js';

const mapForm = document.querySelector('.map__filters');

const renderMarkers = (data) => {
  clearMarker();
  data.slice(0, 10).forEach((element) => {
    createMarker(element, createCardFromData);
  });

};


// function checkFeatures(element){

//   const filterWifi = document.querySelector('#filter-wifi');
//   const filterDishwasher = document.querySelector('#filter-dishwasher');


//   let rank = 0;
//   if(element.offer.features.wifi === undefined){

//   } else {
//     rank++;

//   }
//   return rank;


// }
// function compareByFeatures(el1, el2){
//   const rankA = checkFeatures(el1);
//   const rankB = checkFeatures(el2);

//   return rankB - rankA;
// }

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
      filtered = data.filter((element) => {
        if (filterByType(element, housingType.value) &&
          filterByPrice(element, housingPrice.value) &&
          filterByRooms(element, housingRooms.value) &&
          filterByGuests(element, housingGuests.value)) {
          return true;
        }
      });
      console.log(filtered);
      renderMarkers(filtered);

    });

  })
  .catch(() => {
    //alert('Не удалось отправить форму. Попробуйте ещё раз');
  });


adFormSubmit(successMsg, errorMsg);

const resetBtn = document.querySelector('.ad-form__reset');

resetBtn.addEventListener('click', (evt) => {
  evt.preventDefault();

  resetAll();

});

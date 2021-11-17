import {createMarker} from './map.js';
import {getData} from './api.js';
import {adFormSubmit, successMsg, errorMsg, resetAll} from './forms.js';

getData(createMarker);
adFormSubmit(successMsg, errorMsg);

const resetBtn = document.querySelector('.ad-form__reset');

resetBtn.addEventListener('click', (evt)=> {
  evt.preventDefault();

  resetAll();

});

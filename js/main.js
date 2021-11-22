import {getData} from './api.js';
import {createMarker, clearMarker} from './map.js';
import {createCardFromData} from './randelements.js';
import {filterMap} from './filter.js';
import {adFormSubmit, successMsg, errorMsg} from './forms.js';


const renderMarkers = (data) => {
  clearMarker();

  const dataRandomItems = data.slice(0,10);

  dataRandomItems.forEach((element) => {
    createMarker(element, createCardFromData);
  });

};


getData((data) => {
  renderMarkers(data);
  filterMap(data, renderMarkers);
});

adFormSubmit(successMsg, errorMsg);

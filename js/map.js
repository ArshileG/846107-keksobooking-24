import {createCardFromData} from './randElements.js';
import {activateForm, disableForm, adFormAddress} from './forms.js';

const STARTLATLNG = { lat: 35.652832, lng: 139.839478};

disableForm();
const map = L.map('map')
  .on('load', () => {
    activateForm();
  })
  .setView({
    lat: STARTLATLNG.lat,
    lng: STARTLATLNG.lng,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon ({
  iconUrl: '/img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
const pinIcon = L.icon ({
  iconUrl: '/img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mainPinMarker = L.marker(
  {
    lat: 35.652832,
    lng: 139.839478,
  },
  {
    icon: mainPinIcon,
    draggable: true,
  },
);
mainPinMarker.addTo(map);


mainPinMarker.on('move', (ev) => {
  adFormAddress.value = `${ev.latlng.lat}, ${ev.latlng.lng}`;
});


const createMarker = (point) => {
  const {location: {lat, lng}} = point;
  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon: pinIcon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(createCardFromData(point));
};


const resetMap = () => {

  mainPinMarker.setLatLng({
    lat: STARTLATLNG.lat,
    lng: STARTLATLNG.lng,
  });

  map.setView({
    lat: STARTLATLNG.lat,
    lng: STARTLATLNG.lng,
  }, 10);
  map.closePopup();

};


export {createMarker, resetMap, STARTLATLNG};

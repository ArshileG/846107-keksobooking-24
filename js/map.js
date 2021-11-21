import {activateForm, disableForm, adFormAddress} from './forms.js';

const START_LAT = 35.652832, START_LNG = 139.839478;

disableForm();
const map = L.map('map')
  .on('load', () => {
    activateForm();
  })
  .setView({
    lat: 35.652832,
    lng: 139.839478,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const markerGroup = L.layerGroup().addTo(map);

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
  adFormAddress.value = `${ev.latlng.lat.toFixed(5)}, ${ev.latlng.lng.toFixed(5)}`;
});


const createMarker = (point, datacreator) => {
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
    .addTo(markerGroup)
    .bindPopup(datacreator(point));
};


const resetMap = () => {

  mainPinMarker.setLatLng({
    lat: START_LAT,
    lng: START_LNG,
  });

  map.setView({
    lat: START_LAT,
    lng: START_LNG,
  }, 10);
  map.closePopup();

};
const clearMarker = () => {
  markerGroup.clearLayers();
};

export {createMarker, resetMap, START_LAT as startingLat, START_LNG as startingLng, clearMarker};

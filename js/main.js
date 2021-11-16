import { generateRandObj } from './data.js';
import {createCardFromData} from './randElements.js';
import {disableForm,activateForm} from './forms.js';

const randomData = generateRandObj(3);
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
  },
);
mainPinMarker.addTo(map);

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

randomData.forEach((point) => {
  createMarker(point);
});



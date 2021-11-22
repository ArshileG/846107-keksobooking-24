import {activateForm, disableForm, adFormAddress} from './forms.js';

const MAP_SETTINGS = {
  baseLat: 35.652832,
  baseLng: 139.839478,
  mapView: 10,
};
const PIN_SIZES = {
  mainPin: {
    iconSize: {width: 52, height: 52},
    iconAnchor: {width: 26, height: 52},
  },
  pin: {
    iconSize:{width: 40, height: 40},
    iconAnchor: {width: 26, height: 52},
  },
};

disableForm();
const map = L.map('map')
  .on('load', () => {
    activateForm();
  })
  .setView({
    lat: MAP_SETTINGS.baseLat,
    lng: MAP_SETTINGS.baseLng,
  }, MAP_SETTINGS.mapView);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const markerGroup = L.layerGroup().addTo(map);

const mainPinIcon = L.icon ({
  iconUrl: '/img/main-pin.svg',
  iconSize: [PIN_SIZES.mainPin.iconSize.width, PIN_SIZES.mainPin.iconSize.height],
  iconAnchor: [PIN_SIZES.mainPin.iconAnchor.width, PIN_SIZES.mainPin.iconAnchor.height],
});
const pinIcon = L.icon ({
  iconUrl: '/img/pin.svg',
  iconSize: [PIN_SIZES.pin.iconSize.width, PIN_SIZES.pin.iconSize.height],
  iconAnchor: [PIN_SIZES.pin.iconAnchor.width, PIN_SIZES.pin.iconAnchor.height],
});

const mainPinMarker = L.marker(
  {
    lat: MAP_SETTINGS.baseLat,
    lng: MAP_SETTINGS.baseLng,
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
    lat: MAP_SETTINGS.baseLat,
    lng: MAP_SETTINGS.baseLng,
  });

  map.setView({
    lat: MAP_SETTINGS.baseLat,
    lng: MAP_SETTINGS.baseLng,
  }, MAP_SETTINGS.mapView);
  map.closePopup();

};
const clearMarker = () => {
  markerGroup.clearLayers();
};

export {createMarker, resetMap, MAP_SETTINGS, clearMarker};

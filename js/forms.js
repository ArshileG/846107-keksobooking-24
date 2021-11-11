const disableForm = () => {
  const adForm = document.querySelector('.ad-form');
  adForm.classList.add('ad-form--disabled');
  const adFormElements = adForm.querySelectorAll('fieldset');
  adFormElements.forEach((adFormElement) => {
    adFormElement.toggleAttribute('disabled');
  });
  const mapFilter = document.querySelector('.map__filters');
  mapFilter.classList.add('map__filters--disabled');
  const mapFilterElements = mapFilter.children;
  Array.from(mapFilterElements).forEach((mapFilterElement) => {
    mapFilterElement.toggleAttribute('disabled');
  });
};
const activateForm = () => {
  const adForm = document.querySelector('.ad-form');
  adForm.classList.remove('ad-form--disabled');
  const adFormElements = adForm.querySelectorAll('fieldset');
  adFormElements.forEach((adFormElement) => {
    adFormElement.toggleAttribute('disabled');
  });
  const mapFilter = document.querySelector('.map__filters');
  mapFilter.classList.remove('map__filters--disabled');
  const mapFilterElements = mapFilter.children;
  Array.from(mapFilterElements).forEach((mapFilterElement) => {
    mapFilterElement.toggleAttribute('disabled');
  });
};
export {
  disableForm,
  activateForm
};

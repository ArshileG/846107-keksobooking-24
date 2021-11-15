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

const titleValdiator = () => {
  const adFormTitle = document.querySelector('#title');
  adFormTitle.addEventListener('input', ()=> {
    if(adFormTitle.validity.tooShort){
      adFormTitle.setCustomValidity('Title is too short! Use more than 30 symbol.');
    } else {
      adFormTitle.setCustomValidity('');
    }
  });
};

const timeInOutValidator = () => {
  const adFormTimeIn = document.querySelector('#timein');
  const adFormTimeOut = document.querySelector('#timeout');

  adFormTimeIn.addEventListener('change', (evt)=> {
    adFormTimeOut.value = evt.target.value;
  });
  adFormTimeOut.addEventListener('change', (evt)=> {
    adFormTimeIn.value = evt.target.value;
  });
};


const minPriceForTypes = {
  palace: 10000,
  flat: 1000,
  house: 5000,
  bungalow: 0,
  hotel: 3000,
};

const priceValidator = () =>{
  const adFormPrice = document.querySelector('#price');
  adFormPrice.addEventListener('input', ()=> {
    if(adFormPrice.validity.rangeOverflow){
      adFormPrice.setCustomValidity('Max Price is set to 1 000 000 Ruble.');
    } else {
      adFormPrice.setCustomValidity('');
    }
  });

  const adFormTypes = document.querySelector('#type');
  adFormTypes.addEventListener('change', (evt)=> {
    adFormPrice.setAttribute('min', minPriceForTypes[evt.target.value]);
    adFormPrice.setAttribute('placeholder', minPriceForTypes[evt.target.value]);
  });

};

const capacityValidator = () => {
  const adFormRooms = document.querySelector('#room_number');
  const adFormGuests = document.querySelector('#capacity');

  adFormRooms.addEventListener('change', (evt)=> {

    adFormGuests.value = evt.target.value;

    const adFormGuestsList = adFormGuests.querySelectorAll('option');
    const roomsNumber = parseInt(evt.target.value, 10);


    adFormGuestsList.forEach((element) => {

      const guestN = parseInt(element.value, 10);

      if(roomsNumber !== 100){
        if (guestN <= roomsNumber && guestN !== 0) {
          element.removeAttribute('disabled');
        } else {
          element.setAttribute('disabled', '');
        }
      } else {
        if (guestN !== 0) {
          element.setAttribute('disabled', '');
        } else {
          element.removeAttribute('disabled');
        }
      }
    });

  });
};


titleValdiator();
timeInOutValidator();
priceValidator();
capacityValidator();

export {
  disableForm,
  activateForm
};

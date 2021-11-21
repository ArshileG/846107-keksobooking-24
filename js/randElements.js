const OFFERS_RUS = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};


function createCardFromData(data) {

  const templateFragment = document.querySelector('#card').content;
  const template = templateFragment.querySelector('article');

  // Creating empty fragment
  const fragment = template.cloneNode(true);

  const popupAvatar = fragment.querySelector('.popup__avatar');
  popupAvatar.src = `/${ data.author.avatar}`;

  const popupTitle = fragment.querySelector('.popup__title');
  popupTitle.textContent = data.offer.title;

  const popupPrice = fragment.querySelector('.popup__text--price');
  popupPrice.textContent = data.offer.price;
  popupPrice.insertAdjacentHTML('beforeend', '<span> ₽/ночь</span>');

  const popupAddress = fragment.querySelector('.popup__text--address');
  popupAddress.textContent = data.offer.address;

  const popupCapacity = fragment.querySelector('.popup__text--capacity');
  popupCapacity.textContent = `${data.offer.rooms  } комнаты для ${  data.offer.guests } гостей`;

  const popupTime = fragment.querySelector('.popup__text--time');
  popupTime.textContent = `Заезд после ${  data.offer.checkin  } выезд до ${  data.offer.checkout}`;

  const popupType = fragment.querySelector('.popup__type');
  popupType.textContent = OFFERS_RUS[data.offer.type];

  const popupDesc = fragment.querySelector('.popup__description');
  '';
  if (data.offer.description) {
    popupDesc.textContent = data.offer.description;
  }

  const popupPhotos = fragment.querySelector('.popup__photos');
  popupPhotos.innerHTML = '';
  const checkPhoto = data.offer.photos;
  if (checkPhoto) {
    data.offer.photos.forEach((photoLink) => {
      const popupImg = document.createElement('img');
      popupImg.src = photoLink;
      popupImg.width = 45;
      popupImg.height = 40;
      popupImg.classList.add('popup__photo');
      popupPhotos.appendChild(popupImg);
    });
  }

  const popupFeaturesList = fragment.querySelectorAll('.popup__feature');


  popupFeaturesList.forEach((featuresItem) => {
    console.log(!data.offer.features);
    if (!data.offer.features) {
      featuresItem.remove();
      return;
    }

    const isNecessary = data.offer.features.some(
      (featureTypeItem) => featuresItem.classList.contains(`popup__feature--${  featureTypeItem}`),
    );
    if (!isNecessary) {
      featuresItem.remove();
    }

  });

  return fragment;

}

export {
  createCardFromData
};

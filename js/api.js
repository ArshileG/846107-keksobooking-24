/* eslint-disable no-mixed-spaces-and-tabs */
const getData = (onSuccess) => {
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((data) => {
	  	data.forEach((element) => {
        onSuccess(element);
	  	});
    })
    .catch(() => {
      //alert('Не удалось отправить форму. Попробуйте ещё раз');
    });
};
const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://24.javascript.pages.academy/code-and-magick',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export {getData, sendData};

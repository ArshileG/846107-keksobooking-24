
const SENDSERVER = 'https://24.javascript.pages.academy/keksobooking';
const GETSERVER = 'https://24.javascript.pages.academy/keksobooking/data';

const getData = (onSuccess) => {
  fetch(GETSERVER)
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
const sendData = (onSuccess, onFail, reset, body) => {
  fetch(
    SENDSERVER,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        reset();
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export {getData, sendData};

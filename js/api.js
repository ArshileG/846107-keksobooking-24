const HOST_SERVER = 'https://24.javascript.pages.academy/keksobooking/data';
const DESTINATION_SERVER = 'https://24.javascript.pages.academy/keksobooking';


const getData = (onSuccess) => {
  fetch(HOST_SERVER)
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      throw new Error('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(DESTINATION_SERVER,
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

export {sendData, getData};

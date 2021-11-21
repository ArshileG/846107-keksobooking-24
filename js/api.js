//const HOST_SERVER = 'https://24.javascript.pages.academy/keksobooking/data';
const DESTINATION_SERVER = 'https://24.javascript.pages.academy/keksobooking';

// const getData = (onSuccess) => {
//   fetch('https://24.javascript.pages.academy/keksobooking/data')
//     .then((response) => response.json())
//     .then((data) => {
//       data.forEach((element) => {
//         onSuccess(element);
// 	  	});
//     })
//     .catch(() => {
//       //alert('Не удалось отправить форму. Попробуйте ещё раз');
//     });
// };


const sendData = (onSuccess, onFail, body) => {
  fetch(
    DESTINATION_SERVER,
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

export {sendData};

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.querySelector('.form')
 .addEventListener('submit', function (event) {
      event.preventDefault();

      const delay = parseInt(event.target.delay.value);
      const state = event.target.state.value;

      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (state === 'fulfilled') {
            resolve(delay);
          } else {
            reject(delay);
          }
        }, delay);
      });

      promise
        .then((value) => {
          iziToast.success({
            title: 'Success',
            position: "topRight",
            messageColor: "white",
            backgroundColor: "green",
            message: `✅ Fulfilled promise in ${value}ms`,
            position: 'topRight'
          });
        })
        .catch((value) => {
          iziToast.error({
            title: 'Error',
            position: "topRight",
            messageColor: "white",
            backgroundColor: "red",
            message: `❌ Rejected promise in ${value}ms`,
            position: 'topRight'
          });
        });
    });
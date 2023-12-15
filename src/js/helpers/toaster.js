import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const ERROR_MESSAGE='Something goes wrong!';

iziToast.settings({
  timeout: 5000,
  resetOnHover: true,
  position: 'bottomCenter',
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
  maxWidth: 335,
  theme: 'dark',
  backgroundColor: '#242424',
});

function showError(message) {
  iziToast.show({
    overlay: true,
    overlayClose: true,
    progressBarColor: '#BF5858',
    message,
  });
}

function showWarning(message) {
  iziToast.show({
    progressBarColor: '#EEA10C',
    message,
  });
}

function showSuccess(message) {
  iziToast.show({
    progressBarColor: '#4FAC40',
    message,
  });
}

export { showError, showWarning, showSuccess, ERROR_MESSAGE };

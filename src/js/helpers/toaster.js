import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

iziToast.settings({
  timeout: 5000,
  resetOnHover: true,
  position: 'topCenter',
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
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

export { showError, showWarning, showSuccess };

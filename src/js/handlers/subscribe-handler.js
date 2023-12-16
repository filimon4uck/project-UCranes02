import { showError, showSuccess } from '../helpers/toaster';
import { exercisesApi } from '../services/exercises-api';
import { validate, handleValidationErrors } from './validation-handler';

const errorRef = document.querySelector('.footer-error');

async function handleSubscribe(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  const { email } = validate({ email: data.subscribe });

  if (email) {
    errorRef.classList.remove('visually-hidden');
  } else {
    e.currentTarget.reset();
    errorRef.classList.add('visually-hidden');
    try {
      const response = await exercisesApi.subscribe({
        email: data.subscribe,
      });
      showSuccess(response.message);
    } catch (error) {
      showError(error.response.data.message);
    }
  }
}

export default handleSubscribe;

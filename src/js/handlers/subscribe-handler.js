import { showError, showSuccess } from '../helpers/toaster';
import { exercisesApi } from '../services/exercises-api';

async function handleSubscribe(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  e.currentTarget.reset();
  try {
    const response = await exercisesApi.subscribe({ email: data.subscribe });
    showSuccess(response.message);
  } catch (error) {
    showError(error.response.data.message);
  }
}

export default handleSubscribe;

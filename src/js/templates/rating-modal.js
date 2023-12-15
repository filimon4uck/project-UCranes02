import { showError } from '../helpers/toaster';
import { exercisesApi } from '../services/exercises-api';

export default async function submitForm(e, onSuccess) {
  e.preventDefault();
  const formData = new FormData(e.target);

  try {
    const resp = await exercisesApi.updateExerciseRating({
      rate: Number(formData.get('rate')),
      email: formData.get('email'),
      review: formData.get('review'),
    });

    onSuccess();
  } catch (error) {
    console.log(error);
    showError();
  }
}

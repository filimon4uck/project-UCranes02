import { showSuccess } from '../helpers/toaster';
import { exercisesApi } from '../services/exercises-api';
import { exerciseDetailsMarkup } from '../templates';
import { handleFavorites } from '../handlers';

async function handleExercise(e) {
  e.preventDefault();
  if (!e.target.closest('[data-id]')) return;

  const exerciseId = e.target.closest('[data-id]').dataset.id;
  const data = await exercisesApi.getExerciseById(exerciseId);
  console.log(data);
  showSuccess(exerciseId);
  const exerciseMarkup = exerciseDetailsMarkup(data);
  document
    .querySelector('footer')
    .insertAdjacentHTML('afterend', exerciseMarkup);

  handleFavorites(data);
}

export default handleExercise;

import { showSuccess } from '../helpers/toaster';
import { exercisesApi } from '../services/exercises-api';

async function handleExercise(e) {
  e.preventDefault();
  if (!e.target.closest('[data-id]')) return;

  const exerciseId = e.target.closest('[data-id]').dataset.id;
  const data = await exercisesApi.getExerciseById(exerciseId);
  console.log(data);
  showSuccess(exerciseId);
}

export default handleExercise;

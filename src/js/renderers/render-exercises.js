import { elements } from '../elements';
import { exercisesApi } from '../services/exercises-api';
import { exercisesMarkup } from '../templates';

async function renderExercises() {
  const data = await exercisesApi.getExercises();
  elements.gallery.innerHTML = exercisesMarkup(data.results);
}

export default renderExercises;

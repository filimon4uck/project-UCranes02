import { elements } from '../elements';
import { exercisesApi } from '../services/exercises-api';
import { exercisesMarkup } from '../templates';

async function renderExercises(page, pagination) {
  exercisesApi.page = page;

  const data = await exercisesApi.getExercises();
  elements.gallery.innerHTML = exercisesMarkup(data.results);

  if (pagination) pagination(Number(data.page), data.totalPages);
}

export default renderExercises;

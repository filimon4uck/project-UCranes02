import { elements } from '../elements';
import { renderPagination } from '../helpers/pagination';
import { exercisesApi } from '../services/exercises-api';
import { exercisesMarkup } from '../templates';

async function renderExercises() {

  const data = await exercisesApi.getExercises();
  elements.gallery.innerHTML = exercisesMarkup(data.results);

  renderPagination(Number(data.page), data.totalPages);
}

export default renderExercises;

import { elements } from '../elements';
import { renderPage } from '../helpers/pagination';
import { exercisesApi } from '../services/exercises-api';
import { exercisesMarkup } from '../templates';

async function renderExercises(page) {
  if (page) exercisesApi.page = page;

  const data = await exercisesApi.getExercises();
  elements.gallery.innerHTML = exercisesMarkup(data.results);

  if (!page) renderPage(Number(data.page), data.totalPages);
}

export default renderExercises;

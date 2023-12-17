import { elements } from '../elements';
import { renderPagination } from '../helpers/pagination';
import { exercisesApi } from '../services/exercises-api';
import { exercisesMarkup } from '../templates';
import handlerAddToFavoritesBtn from '../handlers/add-to-favorites-btn-handler';
import handleFavoritesRemove from '../handlers/favorites-remove-handler';

async function renderExercises() {
  const data = await exercisesApi.getExercises();
  elements.gallery.innerHTML = exercisesMarkup(data.results);

  renderPagination(Number(data.page), data.totalPages);
  // ---------------------------------------
  elements.gallery.addEventListener('click', handlerAddToFavoritesBtn);
  elements.gallery.addEventListener('click', handleFavoritesRemove);
  // ---------------------------------------
}

export default renderExercises;

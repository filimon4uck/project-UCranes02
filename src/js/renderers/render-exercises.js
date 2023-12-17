import { elements } from '../elements';
import { renderPagination } from '../helpers/pagination';
import { showWarning } from '../helpers/toaster';
import { exercisesApi } from '../services/exercises-api';
import { gallery } from '../services/gallery';
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
  elements.gallery.classList.add('unmounting');
  try {
    const data = await exercisesApi.getExercises();
    if (data.page > data.totalPages) {
      gallery.changePage(data.totalPages);
      return;
    }
    elements.gallery.innerHTML =
      exercisesMarkup(data.results) ||
      `<img src="/img/no-foto.jpeg" alt="Not found">`;
    renderPagination(Number(data.page), data.totalPages);
  } catch (error) {
    showWarning(common.ERROR_MESSAGE);
    elements.gallery.innerHTML = `<img src="/img/no-foto.jpeg" alt="Not found">`;
  } finally {
    elements.gallery.classList.remove('unmounting');
  }
}

export default renderExercises;

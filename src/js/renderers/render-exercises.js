import { common } from '../common';
import { elements } from '../elements';
import { renderPagination } from '../helpers/pagination';
import { showError } from '../helpers/toaster';
import { exercisesApi } from '../services/exercises-api';
import { gallery } from '../services/gallery';
import { exercisesMarkup } from '../templates';

async function renderExercises() {
  elements.gallery.classList.add('unmounting');
  try {
    const { results, page, totalPages } = await exercisesApi.getExercises();
    if (!totalPages) {
      elements.gallery.innerHTML = `<img src="/img/no-foto.jpeg" alt="Not found">`;
      return;
    }
    if (page > totalPages) {
      gallery.changePage(totalPages);
      return;
    }
    elements.gallery.innerHTML = exercisesMarkup(results);
    renderPagination(Number(page), totalPages);
  } catch (error) {
    showError(common.ERROR_MESSAGE);
    elements.gallery.innerHTML = `<img src="/img/no-foto.jpeg" alt="Not found">`;
  } finally {
    elements.gallery.classList.remove('unmounting');
  }
}

export default renderExercises;

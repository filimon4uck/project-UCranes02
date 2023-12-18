import { common } from '../common';
import { elements } from '../elements';
import { renderPagination } from '../helpers/pagination';
import { showError } from '../helpers/toaster';
import { exercisesApi } from '../services/exercises-api';
import { gallery } from '../services/gallery';
import { exercisesMarkup, notFoundGalleryMarkup } from '../templates';

async function renderExercises() {
  elements.gallery.classList.add('unmounting');
  try {
    const { results, page, totalPages } = await exercisesApi.getExercises();
    if (!totalPages) {
      elements.gallery.innerHTML = notFoundGalleryMarkup();
      renderPagination(0, 0);
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
    elements.gallery.innerHTML = notFoundGalleryMarkup();
    renderPagination(0, 0);
  } finally {
    elements.gallery.classList.remove('unmounting');
  }
}

export default renderExercises;

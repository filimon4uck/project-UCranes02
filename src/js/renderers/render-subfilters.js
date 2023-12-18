import { common } from '../common';
import { elements } from '../elements';
import { renderPagination } from '../helpers/pagination';
import { showError } from '../helpers/toaster';
import { exercisesApi } from '../services/exercises-api';
import { gallery } from '../services/gallery';
import { notFoundGalleryMarkup, subfiltersMarkup } from '../templates';

async function renderSubfilters() {
  elements.gallery.classList.add('unmounting');
  try {
    const { results, page, totalPages } = await exercisesApi.getFilters();
    if (!totalPages) {
      elements.gallery.innerHTML = notFoundGalleryMarkup();
      renderPagination(0, 0);
      return;
    }
    if (page > totalPages) {
      gallery.changePage(totalPages);
      return;
    }
    elements.gallery.innerHTML = subfiltersMarkup(results);
    renderPagination(Number(page), totalPages);
  } catch (error) {
    showError(common.ERROR_MESSAGE);
    elements.gallery.innerHTML = notFoundGalleryMarkup();
    renderPagination(0, 0);
  } finally {
    elements.gallery.classList.remove('unmounting');
  }
}

export default renderSubfilters;

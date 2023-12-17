import { common } from '../common';
import { elements } from '../elements';
import { renderPagination } from '../helpers/pagination';
import { showError } from '../helpers/toaster';
import { exercisesApi } from '../services/exercises-api';
import { gallery } from '../services/gallery';
import { subfiltersMarkup } from '../templates';

async function renderSubfilters() {
  elements.gallery.classList.add('unmounting');
  try {
    const { results, page, totalPages } = await exercisesApi.getFilters();
    if (!totalPages) {
      elements.gallery.innerHTML = `<img src="/img/no-foto.jpeg" alt="Not found">`;
      return;
    }
    if (page > totalPages) {
      gallery.changePage(totalPages);
      return;
    }
    elements.gallery.innerHTML = subfiltersMarkup(results);
    renderPagination(Number(page), totalPages);
  } catch {
    showError(common.ERROR_MESSAGE);
    elements.gallery.innerHTML = `<img src="/img/no-foto.jpeg" alt="Not found">`;
  } finally {
    elements.gallery.classList.remove('unmounting');
  }
}

export default renderSubfilters;

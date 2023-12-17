import { elements } from '../elements';
import { exercisesApi } from '../services/exercises-api';
import { subfiltersMarkup } from '../templates';
import { showError } from '../helpers/toaster';
import { common } from '../common';
import { renderPagination } from '../helpers/pagination';

async function renderSubfilters() {
  elements.gallery.classList.add('unmounting');
  try {
    const data = await exercisesApi.getFilters();
    if (data.page > data.totalPages) {
      gallery.changePage(data.totalPages);
      return;
    }
    elements.gallery.innerHTML =
      subfiltersMarkup(data.results) ||
      `<img src="/img/no-foto.jpeg" alt="Not found">`;
    renderPagination(Number(data.page), data.totalPages);
  } catch {
    showError(common.ERROR_MESSAGE);
    elements.gallery.innerHTML = `<img src="/img/no-foto.jpeg" alt="Not found">`;
  } finally {
    elements.gallery.classList.remove('unmounting');
  }
}

export default renderSubfilters;

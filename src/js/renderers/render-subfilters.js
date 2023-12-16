import { elements } from '../elements';
import { exercisesApi } from '../services/exercises-api';
import { subfiltersMarkup } from '../templates';
import { showError } from '../helpers/toaster';
import { common } from '../common';
import { renderPagination } from '../helpers/pagination';

async function renderSubfilters() {
  try {
    const data = await exercisesApi.getFilters();
    elements.gallery.innerHTML = subfiltersMarkup(data.results);
    renderPagination(Number(data.page), data.totalPages);
  } catch {
    showError(common.ERROR_MESSAGE);
    elements.gallery.innerHTML = '<p>Nothing was found<p/>';
  }
}

export default renderSubfilters;

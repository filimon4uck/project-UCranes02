import { elements } from '../elements';
import { renderPage } from '../helpers/pagination';
import { exercisesApi } from '../services/exercises-api';
import { subfiltersMarkup } from '../templates';
import { showError, ERROR_MESSAGE } from '../helpers/toaster';

async function renderSubfilters(page) {
  if (page) exercisesApi.page = page;

  try {
    const data = await exercisesApi.getFilters();
    elements.gallery.innerHTML = subfiltersMarkup(data.results);
  } catch {
    showError(ERROR_MESSAGE);
  }

  if (!page) renderPage(Number(data.page), data.totalPages);
}

export default renderSubfilters;

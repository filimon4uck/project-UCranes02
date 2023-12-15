import { elements } from '../elements';
import { renderPage } from '../helpers/pagination';
import { exercisesApi } from '../services/exercises-api';
import { subfiltersMarkup } from '../templates';
import { showError} from '../helpers/toaster';
import { common } from '../common';

async function renderSubfilters(page) {
  if (page) exercisesApi.page = page;

  try {
    const data = await exercisesApi.getFilters();
    elements.gallery.innerHTML = subfiltersMarkup(data.results);
    if (!page) renderPage(Number(data.page), data.totalPages);
  } catch {
    showError(common.ERROR_MESSAGE);
    elements.gallery.innerHTML = '<p>Nothing was found<p/>'
  }
  
}

export default renderSubfilters;

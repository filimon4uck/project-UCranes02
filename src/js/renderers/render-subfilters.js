import { elements } from '../elements';
import { renderPage } from '../helpers/pagination';
import { exercisesApi } from '../services/exercises-api';
import { subfiltersMarkup } from '../templates';

async function renderSubfilters(page) {
  if (page) exercisesApi.page = page;

  const data = await exercisesApi.getFilters();
  elements.gallery.innerHTML = subfiltersMarkup(data.results);

  if (!page) renderPage(Number(data.page), data.totalPages);
}

export default renderSubfilters;

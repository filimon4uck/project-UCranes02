import { elements } from '../elements';
import { exercisesApi } from '../services/exercises-api';
import { subfiltersMarkup } from '../templates';

async function renderSubfilters() {
  const subFilters = await exercisesApi.getFilters();
  elements.gallery.innerHTML = subfiltersMarkup(subFilters.results);
}

export default renderSubfilters;
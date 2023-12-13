import 'modern-normalize';

import { exercisesApi } from './js/services/exercises-api';
import { elements } from './js/elements';
import { subfiltersMarkup } from './js/templates';
import { handleFilter, handleSubfilter, handleExercise } from './js/handlers';

elements.filter.addEventListener('click', handleFilter);
elements.gallery.addEventListener('click', handleSubfilter);
elements.gallery.addEventListener('click', handleExercise);
async function renderSubfilters() {
  const subFilters = await exercisesApi.getFilters();
  elements.gallery.innerHTML = subfiltersMarkup(subFilters.results);
}

renderSubfilters();

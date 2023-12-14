import { renderSubfilters } from '../renderers';
import { exercisesApi } from '../services/exercises-api';
import { gallery } from '../services/gallery';

function handleFilter(e) {
  if (!e.target.hasAttribute('data-filter')) return;
  exercisesApi.filter = e.target.dataset.filter;
  exercisesApi.page = 1;
  gallery.state = 'subfilters';
  renderSubfilters();
}

export default handleFilter;

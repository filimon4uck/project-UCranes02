import { renderSubfilters } from '../renderers';
import { exercisesApi } from '../services/exercises-api';

function handleFilter(e) {
  if (!e.target.hasAttribute('data-filter')) return;
  exercisesApi.filter = e.target.dataset.filter;
  renderSubfilters();
}

export default handleFilter;

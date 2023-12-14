import { exercisesApi } from '../services/exercises-api';
import { renderExercises } from '../renderers';

async function handleSubfilter(e) {
  e.preventDefault();
  if (!e.target.closest('[data-subfilter]')) return;

  exercisesApi.subFilter = e.target.closest('[data-subfilter]').dataset.subfilter;
  renderExercises();
}
export default handleSubfilter;

import { exercisesApi } from '../services/exercises-api';
import { renderExercises } from '../renderers';

async function handleSubfilter(e) {
  e.preventDefault();
  if (e.target.nodeName.toLowerCase() === 'ul') return;

  exercisesApi.subFilter = e.target.closest('li').dataset.subfilter;
  renderExercises();
}
export default handleSubfilter;

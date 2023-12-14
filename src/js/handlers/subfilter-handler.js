import { exercisesApi } from '../services/exercises-api';
import { renderExercises } from '../renderers';
import { gallery } from '../services/gallery';

async function handleSubfilter(e) {
  e.preventDefault();
  if (!e.target.closest('[data-subfilter]')) return;

  exercisesApi.subFilter =
    e.target.closest('[data-subfilter]').dataset.subfilter;
  exercisesApi.page = 1;
  gallery.state = 'exercises';
  renderExercises();
}
export default handleSubfilter;

import exercisesMarkup from '../templates/exercises-markup';
import { exercisesApi } from '../services/exercises-api';
import { elements } from '../elements';
async function handleSubfilter(e) {
  e.preventDefault();
  if (e.target.nodeName.toLowerCase() === 'ul') {
    return;
  }
  exercisesApi.subFilter = e.target.closest('li').dataset.subfilter;
  const data = await exercisesApi.getExercises();
  elements.gallery.innerHTML = exercisesMarkup(data.results);
}
export default handleSubfilter;

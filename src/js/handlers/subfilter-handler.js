import exercisesMarkup from '../templates/exercises-markup';
import { ExercisesAPI } from '../services/exercises-api';
import { elements } from '../elements';
const exercisesApi = new ExercisesAPI({});
async function handleSubfilter(e) {
  if (e.target.nodeName.toLowerCase() === 'ul') {
    return;
  }
  const data = await exercisesApi.getExercises();
  exercisesApi.subFilter = e.target.closest('li').dataset.subfilter;
  elements.gallery.innerHTML = exercisesMarkup(data.results);
}
export default handleSubfilter;

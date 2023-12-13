import 'modern-normalize';
import exercisesMarkup from './js/templates/exercises-markup';
import { ExercisesAPI } from './js/services/exercises-api';
import { elements } from './js/elements';
import { subfiltersMarkup } from './js/templates';
import { handleFilter, handleSubfilter, handleExercise } from './js/handlers';
const api = new ExercisesAPI({});

elements.filter.addEventListener('click', handleFilter);
elements.gallery.addEventListener('click', handleSubfilter);
elements.gallery.addEventListener('click', handleExercise);
elements.btnExercise.addEventListener('click', handleBodypart);
async function renderSubfilters() {
  const subFilters = await api.getFilters();
  elements.gallery.innerHTML = subfiltersMarkup(subFilters.results);
}

renderSubfilters();

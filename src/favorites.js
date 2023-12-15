import exercisesMarkup from './js/templates/exercises-markup';
import { elements } from './js/elements';
const LS_card = JSON.parse(localStorage.getItem('favorites'));
console.log(LS_card);

elements.gallery.insertAdjacentHTML(
  'beforeend',
  exercisesMarkup(LS_card, 'favorites')
);

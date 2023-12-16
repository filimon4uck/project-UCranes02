import 'modern-normalize';

import exercisesMarkup from './js/templates/exercises-markup';
import { elements } from './js/elements';
import { common } from './js/common';
import removeFavorites from './js/helpers/favorites/remove-favorites-handler';
import handleExercise from './js/handlers/exercise-handler';

const cards = JSON.parse(localStorage.getItem(common.LS_KEY_FAVORITES)) ?? [];

elements.gallery.innerHTML = exercisesMarkup(cards, 'favorites');

elements.gallery.addEventListener('click', favoritesRemoveHandler);
elements.gallery.addEventListener('click', handleExercise);

function favoritesRemoveHandler(e) {
  if (!e.target.closest('[data-delete]')) return;
  const cardId = e.target.closest('.main-item_card-exercises').dataset.id;
  removeFavorites(cardId);
  const cards = JSON.parse(localStorage.getItem(common.LS_KEY_FAVORITES)) ?? [];
  elements.gallery.innerHTML = exercisesMarkup(cards, 'favorites');
}

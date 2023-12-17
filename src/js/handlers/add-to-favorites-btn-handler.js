import { favorites } from '../services/favorites-page';
import { exercisesApi } from '../services/exercises-api';

async function handlerAddToFavoritesBtn(e) {
  e.preventDefault();
  if (!e.target.closest('[data-add]')) return;
  const addEl = e.target.closest('[data-add]');
  const delEl = addEl.previousElementSibling;
  const cardId = addEl.dataset.add;
  const isFavoritesId = favorites.isFavorite(cardId);
  if (isFavoritesId) return;
  const data = exercisesApi
    .getExerciseById(cardId)
    .then(data => favorites.addFavorite(data));

  addEl.classList.add('is-hidden');
  delEl.classList.remove('is-hidden');
}
export default handlerAddToFavoritesBtn;

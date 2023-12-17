import { favorites } from '../services/favorites-page';
import { elements } from '../elements';

function handleFavoritesRemove(e) {
  e.preventDefault();
  if (!e.target.closest('[data-delete]')) return;
  const delEl = e.target.closest('[data-delete]');
  const addEl = delEl.nextElementSibling;
  const cardId = delEl.dataset.delete;
  const isFavoritesId = favorites.isFavorite(cardId);
  if (!isFavoritesId) return;
  favorites.removeFavorite(cardId);
  const pageName = elements.body.dataset.page;
  if (pageName === 'home') {
    delEl.classList.add('is-hidden');
    addEl.classList.remove('is-hidden');
  }
}

export default handleFavoritesRemove;

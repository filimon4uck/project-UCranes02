import { favorites } from '../services/favorites-page';
import { elements } from '../elements';

function handleFavoritesRemove(e) {
  e.preventDefault();
  if (!e.target.closest('[data-delete]')) return;
  const delEl = e.target.closest('[data-delete]');
  const cardId = delEl.dataset.delete;
  const pageName = elements.body.dataset.page;

  if (pageName === 'home') {
    const addEl = delEl.nextElementSibling;
    delEl.classList.add('is-hidden');
    addEl.classList.remove('is-hidden');
    const isFavoritesId = favorites.isFavorite(cardId);
    if (!isFavoritesId) return;
    favorites.removeFavorite(cardId);
  } else {
    delEl.disabled = true;
    delEl.closest('[data-id]').classList.add('unmounting')
    setTimeout(() => {
      favorites.removeFavorite(cardId);
    }, 250);
  }
}

export default handleFavoritesRemove;

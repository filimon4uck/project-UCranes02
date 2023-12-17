import { favorites } from '../services/favorites-page';

function handleFavoritesRemove(e) {
  e.preventDefault();
  if (!e.target.closest('[data-delete]')) return;

  const cardId = e.target.closest('[data-delete]').dataset.delete;
  favorites.removeFavorite(cardId);
}

export default handleFavoritesRemove;

import { favorites } from '../services/favorites-page';

function handleFavoritePagination({ target }) {
  if (!target.hasAttribute('data-page')) return;

  const page = parseInt(target.dataset.page);
  favorites.changePage(page);
}

export default handleFavoritePagination;

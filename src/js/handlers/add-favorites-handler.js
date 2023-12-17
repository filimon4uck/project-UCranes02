import { favorites } from '../services/favorites-page';
import heartIcon from '../../img/icons.svg#icon-heart';
import removeIcon from '../../img/icons.svg#icon-remove';

function handleFavorites(data) {
  const favorite = document.querySelector('.add-favorites-btn');

  if (!favorites.isFavorite(data._id)) {
    favorites.addFavorite(data);
    favorite.style.padding = '12px 9px';
    favorite.querySelector('span').textContent = 'Remove from favorites';
    favorite.querySelector('use').setAttribute('href', removeIcon);
  } else {
    favorites.removeFavorite(data._id);
    favorite.style.padding = '12px 16px';
    favorite.querySelector('span').textContent = `Add to favorites`;
    favorite.querySelector('use').setAttribute('href', heartIcon);
  }
}

export default handleFavorites;

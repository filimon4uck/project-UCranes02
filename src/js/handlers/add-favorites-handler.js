import removeFavorites from '../helpers/favorites/remove-favorites';
import heartIcon from '../../img/icons.svg#icon-heart';
import removeIcon from '../../img/icons.svg#icon-remove';
import { renderFavorites } from '../renderers';
import { elements } from '../elements';

function handleFavorites(data) {
  const favorite = document.querySelector('.add-favorites-btn');
  const favoritesData = localStorage.getItem('favorites');
  const parsedData = JSON.parse(favoritesData);
  if (favoritesData) {
    if (!parsedData.some(obj => obj._id === data._id)) {
      parsedData.push(data);
      localStorage.setItem('favorites', JSON.stringify(parsedData));
      favorite.style.padding = '12px 9px';
      favorite.querySelector('span').textContent = 'Remove from favorites';
      favorite.querySelector('use').setAttribute('href', removeIcon);
    } else {
      removeFavorites(data._id);
      favorite.style.padding = '12px 16px';
      favorite.querySelector('span').textContent = `Add to favorites`;
      favorite.querySelector('use').setAttribute('href', heartIcon);
    }
  } else {
    const firstData = JSON.stringify([data]);
    localStorage.setItem('favorites', firstData);
  }
  if (elements.body.dataset.page === 'favorites') {
    renderFavorites();
  }
}

export default handleFavorites;

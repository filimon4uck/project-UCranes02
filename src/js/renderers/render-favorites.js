import { common } from '../common';
import { elements } from '../elements';
import { renderPagination } from '../helpers/pagination';
import { exercisesMarkup } from '../templates';

let limit = 9;

function renderFavorites(page = 1) {
  const cards = JSON.parse(localStorage.getItem(common.LS_KEY_FAVORITES)) ?? [];
  const totalPages = Math.ceil(cards.length / limit);
  const array = cards.splice((page - 1) * limit, limit);
  elements.gallery.innerHTML = exercisesMarkup(array, 'favorites');
  renderPagination(page, totalPages);
}

export default renderFavorites;

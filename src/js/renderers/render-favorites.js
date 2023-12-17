import { common } from '../common';
import { elements } from '../elements';
import { renderPagination } from '../helpers/pagination';
import { exercisesMarkup } from '../templates';

function renderFavorites(array, page, totalPages) {
  elements.gallery.innerHTML = exercisesMarkup(array, 'favorites');
  renderPagination(page, totalPages);
}

export default renderFavorites;

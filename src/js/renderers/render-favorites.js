import { elements } from '../elements';
import { renderPagination } from '../helpers/pagination';
import { exercisesMarkup } from '../templates';

function renderFavorites(array, page, totalPages) {
  elements.gallery.classList.add('unmounting');
  if (!array.length) {
    elements.gallery.innerHTML =
      "<li class='list-empty'><p>It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p></li>";
  } else {
    elements.gallery.innerHTML = exercisesMarkup(array, 'favorites');
  }
  renderPagination(page, totalPages);
  elements.gallery.classList.remove('unmounting');
}

export default renderFavorites;

import { elements } from '../elements';
import { gallery } from '../services/gallery';

function handleResetSearch() {
  gallery.resetSearch();
  elements.searchForm.elements.exercise.setAttribute('value', '');
}

export default handleResetSearch;

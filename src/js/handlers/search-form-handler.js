import { elements } from '../elements';
import { gallery } from '../services/gallery';

function handleSearch(evt) {
  evt.preventDefault();
  const textTosearch = elements.searchForm.exercise.value.trim().toLowerCase();
  if (textTosearch) {
    gallery.goSearch(textTosearch);
  }
}

export default handleSearch;

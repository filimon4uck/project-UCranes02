import { elements } from '../elements';
import { gallery } from '../services/gallery';

function handleSearch() {
  const textTosearch = elements.searchForm.exercise.value.trim();
  gallery.goSearch(textTosearch);
}

export default handleSearch;

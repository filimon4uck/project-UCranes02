import { gallery } from '../services/gallery';

function handleResetSearch() {
  this.setAttribute('value', '');
  gallery.resetSearch();
}

export default handleResetSearch;

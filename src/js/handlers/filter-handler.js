import { gallery } from '../services/gallery';

function handleFilter(e) {
  if (!e.target.hasAttribute('data-filter')) return;
  gallery.changeFilter(e.target.dataset.filter);
}

export default handleFilter;

import { changePage } from '../helpers/pagination';
import { gallery } from '../services/gallery';

function handlePagination({ target }) {
  if (!target.hasAttribute('data-page')) return;
  
  const page = parseInt(target.dataset.page);
  changePage(page);
  gallery.page = page;
}

export default handlePagination;

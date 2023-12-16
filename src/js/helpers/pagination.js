import { elements } from '../elements';
import {paginationMarkup} from '../templates';
function renderPagination(page, totalPages) {
  elements.pagination.innerHTML = paginationMarkup(page, totalPages);
}
export { renderPagination};

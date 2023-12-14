import { changePage } from '../helpers/pagination';

function handlerPagination({ target }) {
  if (!target.hasAttribute('data-page')) {
    return;
  }
  changePage(parseInt(target.dataset.page));
}

export default handlerPagination;

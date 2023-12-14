import { elements } from '../elements';
import paginationMarkup from '../templates/pagination-markup';
let page = 1;
function changePage(newPage) {
  const paginationEl = document.querySelector('.js-pagination');
  [...paginationEl.children].forEach(({ firstElementChild }) => {
    const elementPage = parseInt(firstElementChild.dataset.page);
    if (elementPage === newPage) {
      firstElementChild.disabled = 'true';
      firstElementChild.classList.replace('unactive', 'active');
    } else if (elementPage === page) {
      firstElementChild.classList.replace('active', 'unactive');
      firstElementChild.removeAttribute('disabled');
    }
  });
  page = newPage;
}

function renderPage(page, totalPages) {
  elements.pagination.innerHTML = paginationMarkup(page, totalPages);
}
export { renderPage, changePage };

function paginationMarkup(activePage, total) {
  let arrElPagin = [];
  if (total <= 5) {
    for (let currentPage = 1; currentPage <= total; currentPage += 1) {
      arrElPagin.push(
        `<li class="elm"><button type="button" class="pagination-el ${
          currentPage === activePage ? 'active' : 'unactive'
        }" data-page="${currentPage}" >${currentPage}</button></li>`
      );
    }
  } else {
    const startPage = Math.max(Math.min(activePage - 2, total - 4), 1);
    const endPage = Math.min(startPage + 4, total);
    for (
      let currentPage = startPage;
      currentPage <= endPage;
      currentPage += 1
    ) {
      if (currentPage !== activePage) {
        arrElPagin.push(
          `<li class="elm"><button type="button" class="pagination-el unactive"  data-page="${currentPage}" >${currentPage}</button></li>`
        );
      } else {
        arrElPagin.push(
          `<li class="elm"><button type="button" class="pagination-el active" disabled data-page="${currentPage}" >${currentPage}</button></li>`
        );
      }
    }
  }

  return arrElPagin.join('');
}

export default paginationMarkup;

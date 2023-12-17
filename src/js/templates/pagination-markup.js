function paginationMarkup(activePage, total) {
  let arrElPagin = [];
  let arrNumPagin = [];

  if (total <= 5) {
    for (let currentPage = 1; currentPage <= total; currentPage += 1) {
      if (!isActivePage(currentPage, activePage)) {
        arrElPagin.push(
          `<li class="elm"><button type="button" class="pagination-el ${
            isActivePage(currentPage, activePage) ? 'active' : 'unactive'
          }" data-page="${currentPage}" >${currentPage}</button></li>`
        );
      } else {
        arrElPagin.push(
          `<li class="elm"><button type="button" disabled class="pagination-el ${
            isActivePage(currentPage, activePage) ? 'active' : 'unactive'
          }" data-page="${currentPage}" >${currentPage}</button></li>`
        );
      }
    }
  } else {
    const startPage = Math.max(Math.min(activePage - 2, total - 4), 1);
    const endPage = Math.min(startPage + 4, total);
    for (
      let currentPage = startPage;
      currentPage <= endPage;
      currentPage += 1
    ) {
      arrNumPagin.push(currentPage);
      if (!isActivePage(currentPage, activePage)) {
        arrElPagin.push(
          `<li class="elm"><button type="button" class="pagination-el unactive"  data-page="${currentPage}" >${currentPage}</button></li>`
        );
      } else {
        arrElPagin.push(
          `<li class="elm"><button type="button" class="pagination-el active" disabled data-page="${currentPage}" >${currentPage}</button></li>`
        );
      }
    }
    if (!arrNumPagin.includes(1)) {
      arrElPagin.unshift(
        `<li class="elm"><button type="button" class="pagination-el unactive"  data-page="1" >1</button>&nbsp;&nbsp;...</li>`
      );
    }
    if (!arrNumPagin.includes(total)) {
      arrElPagin.push(
        `<li class="elm">...&nbsp;&nbsp;<button type="button" class="pagination-el unactive"  data-page="${total}">${total}</button></li>`
      );
    }
  }

  return arrElPagin.join('');
}

function isActivePage(current, active) {
  return current === active;
}
export default paginationMarkup;

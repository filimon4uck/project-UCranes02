function paginationMarkup(activePage, total) {
  let arrElPagin = [];
  for (let page = 1; page <= total; page += 1) {
    arrElPagin.push(
      `<li class="elm"><button type="button" class="pagination-el ${
        page === activePage ? 'active' : 'unactive'
      }" data-page="${page}" >${page}</button></li>`
    );
  }
  return arrElPagin.join('');
}

export default paginationMarkup;

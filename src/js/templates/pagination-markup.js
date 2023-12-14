function paginationMarkup(activePage, total) {
  let arrElPagin = [];
  for (let page = 1; page <= total; page += 1) {
    console.log(page);
    arrElPagin.push(
      `<li><a class="pagination-el ${
        page === activePage ? 'active' : 'unactive'
      }" data-page="${page}" >${page}</a></li>`
    );
  }
  return arrElPagin.join('');
}

export default paginationMarkup;

function quoteMarkup({ author, quote }, page) {
  return `
          ${
            page === "favorite" ? `<p class="favorite-text-quote">${quote}</p>`
                : `<p class="text-quote list-item-text">${quote}</p>`
          }
          <p class="autor-quote list-item-text">${author}</p>
        `;
}

export default quoteMarkup;

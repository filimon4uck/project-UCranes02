function quoteMarkup({ author, quote }) {
  return `
          <p class="text-quote list-item-text">${quote}</p>
          <p class="autor-quote list-item-text">${author}</p>
        `;
}

export default quoteMarkup;

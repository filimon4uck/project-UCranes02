import { renderFavorites } from "../renderers";

function handleFavoritePagination({ target }) {
    if (!target.hasAttribute('data-page')) return;
  
    const page = parseInt(target.dataset.page);
    renderFavorites(page)
}

export default handleFavoritePagination;
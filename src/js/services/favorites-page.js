import { common } from '../common';
import { renderFavorites, renderQuote } from '../renderers';
import { elements } from '../elements';
import {
  handleExercise,
  handleFavoritePagination,
  handleFavoritesRemove,
} from '../handlers';
import scrollToTopOrElement from '../helpers/scroll';
import { getDeviseType } from '../helpers/screen-resolution';

class Favorites {
  #exercises;
  #page;
  #limit;
  #navPage;

  constructor(exercises, page, limit, navPage) {
    this.#exercises = exercises;
    this.#page = page;
    this.#limit = limit;
    this.#navPage = navPage;
  }

  #savePage() {
    sessionStorage.setItem(common.SS_KEY_FAVORITES, this.#page);
  }

  #saveExercises() {
    localStorage.setItem(
      common.LS_KEY_FAVORITES,
      JSON.stringify(this.#exercises)
    );
  }

  #renderList() {
    const totalPages = Math.ceil(this.#exercises.length / this.#limit);

    if (totalPages && this.#page > totalPages) {
      this.#page = totalPages;
    }

    const array = [...this.#exercises].splice(
      (this.#page - 1) * this.#limit,
      this.#limit
    );

    renderFavorites(array, this.#page, totalPages);
    this.#savePage();
  }

  load() {
    renderQuote('favorite');
    this.#renderList();
    elements.gallery.addEventListener('click', handleExercise);
    elements.gallery.addEventListener('click', handleFavoritesRemove);
    elements.pagination.addEventListener('click', handleFavoritePagination);

    elements.navFavorites.forEach(elem => elem.setAttribute('href', "javascript:void(0)"));
  }

  isFavorite(id) {
    return this.#exercises.some(obj => obj._id === id);
  }

  removeFavorite(id) {
    const index = this.#exercises.map(obj => obj._id).indexOf(id);
    this.#exercises.splice(index, 1);
    this.#saveExercises();

    this.#navPage === 'favorites' && this.#renderList();
  }

  addFavorite(obj) {
    this.#exercises.push(obj);
    this.#saveExercises();

    this.#navPage === 'favorites' && this.#renderList();
  }

  changePage(newPage) {
    this.#page = newPage;
    this.#renderList();
    scrollToTopOrElement(elements.favoritesAnchor);
  }

  refreshLimits(limits) {
    if (limits.favorites === this.#limit) return;

    this.#limit = limits.favorites;
    this.#renderList();
  }
}

const favorites = new Favorites(
  JSON.parse(localStorage.getItem(common.LS_KEY_FAVORITES)) ?? [],
  parseInt(sessionStorage.getItem(common.SS_KEY_FAVORITES)) || 1,
  getDeviseType().favorites,
  elements.body.dataset.page
);

export { favorites };

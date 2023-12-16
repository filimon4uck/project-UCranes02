import { elements } from '../elements';
import { renderExercises, renderQuote, renderSubfilters } from '../renderers';
import { exercisesApi } from './exercises-api';
import { renderPagination } from '../helpers/pagination';
import { handleSearch } from '../handlers';
import { handleBackButton } from '../handlers';
import scrollToTopOrElement from '../helpers/scroll';
import { getDeviseType } from '../helpers/screen-resolution';

class Gallery {
  #state;
  #filter;
  #subfiltersPage;
  #subfilter;
  #searchQuery;
  #exercisesPage;
  #limits;

  constructor({
    state,
    filter,
    subfiltersPage,
    subfilter,
    searchQuery,
    exercisesPage,
    limits,
  }) {
    this.#state = state;
    this.#filter = filter;
    this.#subfiltersPage = subfiltersPage;
    this.#subfilter = subfilter;
    this.#searchQuery = searchQuery;
    this.#exercisesPage = exercisesPage;
    this.#limits = limits;
  }

  #saveStats() {
    localStorage.setItem(
      'gallery',
      JSON.stringify({
        state: this.#state,
        filter: this.#filter,
        subfiltersPage: this.#subfiltersPage,
        subfilter: this.#subfilter,
        searchQuery: this.#searchQuery,
        exercisesPage: this.#exercisesPage,
      })
    );
  }

  #showExercisesGallery(subfilter) {
    elements.gallery.dataset.cards = 'exercises';
    elements.backBtn.classList.remove('back-button-hidden');
    elements.searchForm.classList.remove('search-form-hidden');
    elements.gallerySubtitle.innerHTML = `<span class="exercises-title">&nbsp;/</span><h3 class="exercises-subtitle">${subfilter}</h3>`;

    elements.backBtn.addEventListener('click', handleBackButton);
    elements.searchForm.addEventListener('click', handleSearch);
    elements.searchForm.reset();
  }

  #showSubfiltersGallery() {
    elements.gallery.dataset.cards = 'subfilters';
    elements.backBtn.classList.add('back-button-hidden');
    elements.searchForm.classList.add('search-form-hidden');
    elements.gallerySubtitle.innerHTML = '';

    elements.backBtn.removeEventListener('click', this.goBack);
    elements.searchForm.removeEventListener('click', handleSearch);
  }

  #setFilterActive(newFilter, prevFilter) {
    [...elements.filter.children].forEach(({ firstElementChild }) => {
      switch (firstElementChild.dataset.filter) {
        case newFilter:
          firstElementChild.classList.add('filter-button-active');
          break;
        case prevFilter:
          firstElementChild.classList.remove('filter-button-active');
          break;
      }
    });
  }

  load() {
    renderQuote();
    exercisesApi.limit = this.#limits[this.#state];
    exercisesApi.filter = this.#filter;

    switch (this.#state) {
      case 'subfilters':
        exercisesApi.page = this.#subfiltersPage;
        renderSubfilters(renderPagination);
        this.#showSubfiltersGallery();
        break;
      case 'exercises':
        exercisesApi.subFilter = this.#subfilter;
        exercisesApi.keyword = this.#searchQuery;
        exercisesApi.page = this.#exercisesPage;
        elements.searchForm.elements.exercise.value = this.#searchQuery;
        console.log(elements.searchForm.elements.exercise.value);
        renderExercises(renderPagination);
        this.#showExercisesGallery(this.#subfilter);
        break;
    }

    this.#setFilterActive(this.#filter);
  }

  changeFilter(newFilter) {
    exercisesApi.filter = newFilter;
    exercisesApi.page = 1;
    exercisesApi.limit = this.#limits.subfilters;
    renderSubfilters(renderPagination);

    this.#setFilterActive(newFilter, this.#filter);
    this.#state = 'subfilters';
    this.#filter = newFilter;
    this.#subfiltersPage = 1;
    this.#showSubfiltersGallery();
    this.#saveStats();
  }

  goExercises(subfilter) {
    exercisesApi.subFilter = subfilter;
    exercisesApi.keyword = '';
    exercisesApi.page = 1;
    exercisesApi.limit = this.#limits.exercises;
    renderExercises(renderPagination);

    this.#state = 'exercises';
    this.#subfilter = subfilter;
    this.#searchQuery = '';
    this.#exercisesPage = 1;
    this.#showExercisesGallery(subfilter);
    this.#saveStats();

    scrollToTopOrElement(elements.gallerySubtitle);
  }

  goBack() {
    exercisesApi.page = this.#subfiltersPage;
    exercisesApi.limit = this.#limits.subfilters;
    renderSubfilters(renderPagination);

    this.#state = 'subfilters';
    this.#showSubfiltersGallery();
    this.#saveStats();
  }

  changePage(newPage) {
    exercisesApi.page = newPage;

    switch (this.#state) {
      case 'subfilters':
        renderSubfilters();
        this.#subfiltersPage = newPage;
        break;
      case 'exercises':
        renderExercises();
        this.#exercisesPage = newPage;
        break;
    }

    this.#saveStats();
    scrollToTopOrElement(elements.gallerySubtitle);
  }

  goSearch(query) {
    exercisesApi.keyword = query;
    exercisesApi.page = 1;
    renderExercises(renderPagination);

    this.#searchQuery = query;
    this.#exercisesPage = 1;
    this.#saveStats();
  }

  resetSearch() {
    exercisesApi.keyword = '';
    exercisesApi.page = 1;
    renderExercises(renderPagination);

    this.#searchQuery = '';
    this.#exercisesPage = 1;
    this.#saveStats();
  }

  refreshLimits(limits) {
    this.limits = limits;
    exercisesApi.limit = this.#limits[this.#state];

    switch (this.#state) {
      case 'subfilters':
        renderSubfilters(renderPagination);
        break;
      case 'exercises':
        renderExercises(renderPagination);
        break;
    }
  }
}

const gallery = new Gallery({
  ...(JSON.parse(localStorage.getItem('gallery')) ?? {
    state: 'subfilters',
    filter: 'muscles',
    subfiltersPage: 1,
    subfilter: '',
    searchQuery: '',
    exercisesPage: 1,
  }),
  limits: getDeviseType(),
});

export { gallery };

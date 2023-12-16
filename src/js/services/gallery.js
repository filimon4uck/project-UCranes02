import throttle from 'lodash.throttle';

import { elements } from '../elements';
import { renderExercises, renderQuote, renderSubfilters } from '../renderers';
import { exercisesApi } from './exercises-api';
import { renderPagination } from '../helpers/pagination';
import {
  handleBackButton,
  handleExercise,
  handleFilter,
  handlePagination,
  handlePolicyModal,
  handleSearch,
  handleSubfilter,
  handleSubscribe,
} from '../handlers';
import scrollToTopOrElement from '../helpers/scroll';
import { getDeviseType } from '../helpers/screen-resolution';
import { common } from '../common';

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
    sessionStorage.setItem(
      common.SS_KEY_FILTERS,
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

    elements.gallery.addEventListener('click', handleExercise);
    elements.backBtn.addEventListener('click', handleBackButton);
    elements.searchForm.addEventListener(
      'input',
      throttle(handleSearch, 1000, {
        leading: false,
        trailing: true,
      })
    );
    elements.gallery.removeEventListener('click', handleSubfilter);
    elements.searchForm.reset();
  }

  #showSubfiltersGallery() {
    elements.gallery.dataset.cards = 'subfilters';
    elements.backBtn.classList.add('back-button-hidden');
    elements.searchForm.classList.add('search-form-hidden');
    elements.gallerySubtitle.innerHTML = '';

    elements.gallery.addEventListener('click', handleSubfilter);
    elements.gallery.removeEventListener('click', handleExercise);
    elements.backBtn.removeEventListener('click', handleBackButton);
    elements.searchForm.removeEventListener(
      'input',
      throttle(handleSearch, 1000, {
        leading: false,
        trailing: true,
      })
    );
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

        // elements.searchForm.elements.exercise.setAttribute(
        //   'value',
        //   this.#searchQuery
        // );

        renderExercises(renderPagination);
        this.#showExercisesGallery(this.#subfilter);
        break;
    }

    elements.pagination.addEventListener('click', handlePagination);

    if (elements.body.dataset.page === 'home') {
      this.#setFilterActive(this.#filter);
      elements.filter.addEventListener('click', handleFilter);
      elements.subscribeForm.addEventListener('submit', handleSubscribe);
      elements.policyBtn.addEventListener('click', handlePolicyModal);
      elements.termsBtn.addEventListener('click', handlePolicyModal);
    }
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
  ...(JSON.parse(sessionStorage.getItem(common.SS_KEY_FILTERS)) ?? {
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

import { elements } from '../elements';
import { renderExercises, renderQuote, renderSubfilters } from '../renderers';
import { exercisesApi } from './exercises-api';
import { renderPagination } from '../helpers/pagination';
import { handleSearch } from '../handlers';
import { handleBackButton } from '../handlers';
import scrollToTopOrElement from '../helpers/scroll';

class Gallery {
  #state;
  #subfiltersPage;
  #filter;

  constructor() {
    this.#filter = 'muscles';
    this.#state = 'subfilters';
    this.#subfiltersPage = 1;
  }

  #showExercisesGallery(subfilter) {
    this.#state = 'exercises';
    elements.gallery.dataset.cards = 'exercises';
    elements.backBtn.classList.remove('back-button-hidden');
    elements.searchForm.classList.remove('search-form-hidden');
    elements.gallerySubtitle.innerHTML = `<span class="exercises-title">&nbsp;/</span><h3 class="exercises-subtitle">${subfilter}</h3>`;

    elements.backBtn.addEventListener('click', handleBackButton);
    elements.searchForm.addEventListener('click', handleSearch);
  }

  #showSubfiltersGallery() {
    this.#state = 'subfilters';
    elements.gallery.dataset.cards = 'subfilters';
    elements.backBtn.classList.add('back-button-hidden');
    elements.searchForm.classList.add('search-form-hidden');
    elements.gallerySubtitle.innerHTML = '';

    elements.backBtn.removeEventListener('click', this.goBack);
    elements.searchForm.removeEventListener('click', handleSearch);
  }

  changePage(newPage) {
    switch (this.#state) {
      case 'subfilters':
        renderSubfilters(newPage);
        this.#subfiltersPage = newPage;
        break;
      case 'exercises':
        renderExercises(newPage);
        break;
    }

    scrollToTopOrElement(elements.gallerySubtitle)
  }

  changeFilter(newFilter) {
    exercisesApi.filter = newFilter;
    exercisesApi.page = 1;
    renderSubfilters(1, renderPagination);

    [...elements.filter.children].forEach(({ firstElementChild }) => {
      switch (firstElementChild.dataset.filter) {
        case this.#filter:
          firstElementChild.classList.remove('filter-button-active');
          break;
        case newFilter:
          firstElementChild.classList.add('filter-button-active');
          break;
      }
    });

    this.#filter = newFilter;
    this.#showSubfiltersGallery();
  }

  goExercises(subfilter) {
    exercisesApi.subFilter = subfilter;
    exercisesApi.keyword = '';
    exercisesApi.page = 1;
    renderExercises(1, renderPagination);

    this.#showExercisesGallery(subfilter);
    elements.searchForm.reset();
    scrollToTopOrElement(elements.gallerySubtitle)
  }

  goSearch(query) {
    exercisesApi.keyword = query;
    exercisesApi.page = 1;
    renderExercises(1, renderPagination);
  }

  resetSearch() {
    exercisesApi.keyword = '';
    exercisesApi.page = 1;
    renderExercises(1, renderPagination);
  }

  goBack() {
    exercisesApi.filter = this.#filter;
    exercisesApi.page = this.#subfiltersPage;
    renderSubfilters(this.#subfiltersPage, renderPagination);

    this.#showSubfiltersGallery();
  }

  load() {
    renderQuote();
    renderSubfilters(1, renderPagination);
  }
}

const gallery = new Gallery();
export { gallery };

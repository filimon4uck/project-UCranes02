import { renderExercises, renderQuote, renderSubfilters } from '../renderers';
import { exercisesApi } from './exercises-api';

class Gallery {
  #page;

  constructor() {
    this.#page = 1;
    this.state = 'subfilters';
  }

  get page() {
    return this.#page;
  }

  set page(newPage) {
    switch (this.state) {
      case 'subfilters':
        renderSubfilters(newPage);
        break;
      case 'exercises':
        renderExercises(newPage);
        break;
    }

    this.#page = newPage;
  }

  load() {
    renderQuote();
    renderSubfilters();
  }
}

const gallery = new Gallery();
export { gallery };

import 'modern-normalize';

import { elements } from './js/elements';
import {
  handleFilter,
  handleSubfilter,
  handleExercise,
  handlePagination,
  handleSubscribe,
  handleSearch,
} from './js/handlers';
import { gallery } from './js/services/gallery';

elements.filter.addEventListener('click', handleFilter);
elements.gallery.addEventListener('click', handleSubfilter);
elements.gallery.addEventListener('click', handleExercise);
elements.pagination.addEventListener('click', handlePagination);
elements.subscribe_form.addEventListener('submit', handleSubscribe);


//Listener for Search
import throttle from 'lodash.throttle';
elements.searchForm.addEventListener(
  'input',
  throttle(handleSearch, 500, {
    leading: false,
    trailing: true,
  })
);

gallery.load();

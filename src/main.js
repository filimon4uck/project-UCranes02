import 'modern-normalize';

import { elements } from './js/elements';
import {
  handleFilter,
  handleSubfilter,
  handleExercise,
  handleNavigation,
  handlePagination,
  handleSubscribe,
} from './js/handlers';
import { gallery } from './js/services/gallery';

elements.filter.addEventListener('click', handleFilter);
elements.gallery.addEventListener('click', handleSubfilter);
elements.gallery.addEventListener('click', handleExercise);
elements.pagination.addEventListener('click', handlePagination);
elements.subscribe_form.addEventListener('submit', handleSubscribe);

handleNavigation();

gallery.load()

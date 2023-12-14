import 'modern-normalize';

import { elements } from './js/elements';
import {
  handleFilter,
  handleSubfilter,
  handleExercise,
  handleNavigation,
  handlePagination,
} from './js/handlers';
import { gallery } from './js/services/gallery';

elements.filter.addEventListener('click', handleFilter);
elements.gallery.addEventListener('click', handleSubfilter);
elements.gallery.addEventListener('click', handleExercise);
elements.pagination.addEventListener('click', handlePagination)

handleNavigation();

gallery.load()

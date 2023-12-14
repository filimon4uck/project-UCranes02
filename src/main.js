import 'modern-normalize';

import { elements } from './js/elements';
import {
  handleFilter,
  handleSubfilter,
  handleExercise,
  handleNavigation,
  handleSubscribe,
} from './js/handlers';
import { renderQuote, renderSubfilters } from './js/renderers';

elements.filter.addEventListener('click', handleFilter);
elements.gallery.addEventListener('click', handleSubfilter);
elements.gallery.addEventListener('click', handleExercise);
elements.subscribe_form.addEventListener('submit', handleSubscribe);

handleNavigation();
renderSubfilters();
renderQuote();

import 'modern-normalize';

import { elements } from './js/elements';
import {
  handleFilter,
  handleSubfilter,
  handleExercise,
  handleNavigation,
  handlePagination,
  handleSubscribe,
  handlePolicyModal,
} from './js/handlers';
import { gallery } from './js/services/gallery';

elements.filter.addEventListener('click', handleFilter);
elements.gallery.addEventListener('click', handleSubfilter);
elements.gallery.addEventListener('click', handleExercise);
elements.pagination.addEventListener('click', handlePagination);
elements.subscribe_form.addEventListener('submit', handleSubscribe);
elements.policy_modal_open.addEventListener('click', handlePolicyModal);
elements.terms_modal_open.addEventListener('click', handlePolicyModal);

handleNavigation();

gallery.load();

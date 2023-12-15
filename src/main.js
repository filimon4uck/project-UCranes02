import 'modern-normalize';

import { elements } from './js/elements';
import {
  handleFilter,
  handleSubfilter,
  handleExercise,
  handlePagination,
  handleSubscribe,
  handlePolicyModal,
} from './js/handlers';
import { gallery } from './js/services/gallery';

elements.filter.addEventListener('click', handleFilter);
elements.gallery.addEventListener('click', handleSubfilter);
elements.gallery.addEventListener('click', handleExercise);
elements.pagination.addEventListener('click', handlePagination);
elements.subscribeForm.addEventListener('submit', handleSubscribe);
elements.policyBtn.addEventListener('click', handlePolicyModal);
elements.termsBtn.addEventListener('click', handlePolicyModal);

gallery.load();

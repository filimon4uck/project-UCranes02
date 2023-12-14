import 'modern-normalize';

import { elements } from './js/elements';
import {
  handleFilter,
  handleSubfilter,
  handleExercise,
  handleNavigation,
  handleSubscribe,
  handleTermsModal,
  handlePolicyModal,
} from './js/handlers';
import { renderQuote, renderSubfilters } from './js/renderers';

elements.filter.addEventListener('click', handleFilter);
elements.gallery.addEventListener('click', handleSubfilter);
elements.gallery.addEventListener('click', handleExercise);
elements.subscribe_form.addEventListener('submit', handleSubscribe);
elements.terms_modal_open.addEventListener('click', handleTermsModal);
elements.terms_modal_close.addEventListener('click', handleTermsModal);
elements.policy_modal_open.addEventListener('click', handlePolicyModal);
elements.policy_modal_close.addEventListener('click', handlePolicyModal);

handleNavigation();
renderSubfilters();
renderQuote();

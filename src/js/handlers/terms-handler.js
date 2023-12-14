import { elements } from '../elements';

function handleTermsModal() {
  elements.terms_modal.classList.toggle('is-hidden');
}

export default handleTermsModal;

// ---------------------------------------------------------styles.css--------------------
// @import url('./components/policy-modal.css');

// ---------------------------------------------------------main.js----------------------
// elements.subscribe_form.addEventListener('submit', handleSubscribe);
// elements.terms_modal_open.addEventListener('click', handleTermsModal);
// elements.terms_modal_close.addEventListener('click', handleTermsModal);
// elements.policy_modal_open.addEventListener('click', handlePolicyModal);
// elements.policy_modal_close.addEventListener('click', handlePolicyModal);
// -------------------------------------------------------elements.js--------------------
//  subscribe_form: document.querySelector('.js-subscribe-form'),
//   terms_modal: document.querySelector('.js-terms-modal'),
//   terms_modal_open: document.querySelector('.js-terms-modal-open'),
//   terms_modal_close: document.querySelector('.js-terms-modal-close'),
//   policy_modal: document.querySelector('.js-policy-modal'),
//   policy_modal_open: document.querySelector('.js-policy-modal-open'),
//   policy_modal_close: document.querySelector('.js-policy-modal-close'),
// ------------------------------------------------------------index.js--------------------
// import handleTermsModal from './terms-handler';
// import handlePolicyModal from './policy-handler';
// import handleSubscribe from './subscribe-handler';

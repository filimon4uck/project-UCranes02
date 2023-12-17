import { hideLoader, showLoader } from '../helpers/loader';
import { showSuccess, showError } from '../helpers/toaster';
import { exercisesApi } from '../services/exercises-api';
import { exerciseDetailsMarkup } from '../templates';
import handleFavorites from './add-favorites-handler';
import submitForm from './rating-modal-handler';
import handleSetRating from './rating-select-handler';
import renderLoader from '../renderers/render-loader';

const popUpState = {
  detailsPopup: false,
  ratingPopup: false,
};

const stopPropagation = e => e.stopPropagation();

const handleRatingPopup = (ratingPopup, { closeCallback, submitCallback }) => {
  const closeButton = ratingPopup.querySelector('.modal__close-btn');
  const ratingForm = ratingPopup.querySelector('.give_a_rating');
  const ratingFieldset = ratingPopup.querySelector('.rating');

  ratingForm.setAttribute('novalidate', true);

  ratingFieldset.addEventListener('click', e => {
    handleSetRating(e);
  });

  closeButton.addEventListener('click', () => {
    closeCallback();
  });
  ratingForm.addEventListener('submit', e => {
    e.preventDefault();
    submitCallback(e);
  });
};

const closeDetailsPopup = backdrop => {
  popUpState.detailsPopup = false;
  popUpState.ratingPopup = false;
  backdrop?.classList.add('is-hidden');
  backdrop?.querySelector('[data-modal]')?.remove();
  backdrop?.querySelector('.exercise-modal')?.remove();
  document.documentElement.classList.remove('no-scroll');
};

const closeRatingPopup = (backdrop, ratingPopup, detailsPopup) => {
  ratingPopup.remove();
  backdrop.querySelector('[data-modal]')?.remove();
  popUpState.ratingPopup = false;
  backdrop.append(detailsPopup);
};

const handleBackdropClickAndEsc = (backdrop, ratingPopup, detailsPopup) => {
  switch (true) {
    case popUpState.detailsPopup && !popUpState.ratingPopup:
      closeDetailsPopup(backdrop);
      return;
    case popUpState.detailsPopup && popUpState.ratingPopup:
      closeRatingPopup(backdrop, ratingPopup, detailsPopup);
      return;
    default:
      closeDetailsPopup(backdrop);
      return;
  }
};

const handleListeners = (detailsPopupHtml, data, backdrop) => {
  backdrop.insertAdjacentHTML('beforeend', detailsPopupHtml);


  const detailsPopup = backdrop.querySelector('.exercise-modal');
  const detailsCloseButton = backdrop.querySelector(
    '.exercise-card-close-btn'
  );
  const ratingButton = backdrop.querySelector('.add-rating-btn');
  const favoriteButton = backdrop.querySelector('.add-favorites-btn');

  const ratingPopup = document
    .querySelector('#modal-template')
    .content.firstElementChild.cloneNode(true);

  const closeIconPath = detailsCloseButton.querySelector('use').getAttribute('href');
  ratingPopup.querySelector('use').setAttribute('href', closeIconPath);

  window.addEventListener('keydown', e => {
    if (e.code !== 'Escape') return;
    handleBackdropClickAndEsc(backdrop, ratingPopup, detailsPopup);
  });

  backdrop.addEventListener('click', () => {
    handleBackdropClickAndEsc(backdrop, ratingPopup, detailsPopup);
  });

  detailsPopup.addEventListener('click', stopPropagation);
  ratingPopup.addEventListener('click', stopPropagation);

  detailsCloseButton.addEventListener('click', () => {
    closeDetailsPopup(backdrop);
  });

  ratingButton.addEventListener('click', () => {
    popUpState.ratingPopup = true;
    backdrop?.querySelector('.exercise-modal')?.remove();
    backdrop.append(ratingPopup);
  });

  favoriteButton.addEventListener('click', e => {
    handleFavorites(data);
  });

  handleRatingPopup(ratingPopup, {
    closeCallback: () => closeRatingPopup(backdrop, ratingPopup, detailsPopup),
    submitCallback: e =>
      submitForm(e, () => {
        closeDetailsPopup(backdrop);
        showSuccess('Thank you for your feedback!');
      }),
  });

  document.documentElement.classList.add('no-scroll');
  popUpState.detailsPopup = true;
};

async function handleExercise(e) {
  e.preventDefault();
  if (!e.target.closest('[data-id]') || e.target.closest('[data-delete]'))
    return;

  const backdrop = document.querySelector('.exercise-modal-backdrop');
  backdrop.classList.remove('is-hidden');
  
  try {
    const exerciseId = e.target.closest('[data-id]').dataset.id;
    
    renderLoader(backdrop);
    showLoader(backdrop);
    const data = await exercisesApi.getExerciseById(exerciseId);
    hideLoader(backdrop);
    const detailsPopup = exerciseDetailsMarkup(data);
    const modalElement = handleListeners(detailsPopup, data, backdrop);
  } catch (err) {
    console.error(err);
    showError('Something went wrong. Please try again later.');
    hideLoader(backdrop);
  }
}

export default handleExercise;

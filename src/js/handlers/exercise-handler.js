import { showSuccess, showError } from '../helpers/toaster';
import { exercisesApi } from '../services/exercises-api';
import { exerciseDetailsMarkup } from '../templates';
import handleFavorites from './add-favorites-handler';

const popUpState = {
  detailsPopup: false,
  ratingPopup: false,
};

const stopPropagation = e => e.stopPropagation();

const handleRatingPopup = (ratingPopup, { closeCallback, submitCallback }) => {
  const closeButton = ratingPopup.querySelector('.modal__close-btn');
  const ratingForm = ratingPopup.querySelector('.give_a_rating');

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
  backdrop?.remove();
};

const closeRatingPopup = (backdrop, ratingPopup, detailsPopup) => {
  ratingPopup.remove();
  backdrop.innerHTML = '';
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

const handleListeners = (detailsPopupHtml, data) => {
  const container = document.createElement('div');
  container.innerHTML = detailsPopupHtml;

  const backdrop = container.querySelector('.exercise-modal-backdrop');
  const detailsPopup = container.querySelector('.exercise-modal');
  const detailsCloseButton = container.querySelector(
    '.exercise-card-close-btn'
  );
  const ratingButton = container.querySelector('.add-rating-btn');
  const favoriteButton = container.querySelector('.add-favorites-btn');

  const ratingPopup = document
    .querySelector('#modal-template')
    .content.firstElementChild.cloneNode(true);

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
    backdrop.remove();
  });

  ratingButton.addEventListener('click', () => {
    popUpState.ratingPopup = true;
    backdrop.innerHTML = '';
    backdrop.append(ratingPopup);
  });

  favoriteButton.addEventListener('click', e => {
    handleFavorites(data);
  });

  handleRatingPopup(ratingPopup, {
    closeCallback: () => closeRatingPopup(backdrop, ratingPopup, detailsPopup),
    submitCallback: () => {},
  });

  popUpState.detailsPopup = true;
  document.body.append(backdrop);
};

async function handleExercise(e, ratingPopupCallback) {
  e.preventDefault();
  if (!e.target.closest('[data-id]')) return;

  try {
    const exerciseId = e.target.closest('[data-id]').dataset.id;

    const data = await exercisesApi.getExerciseById(exerciseId);

    const detailsPopup = exerciseDetailsMarkup(data);
    const modalElement = handleListeners(detailsPopup, data);
  } catch (err) {
    console.error(err);
    showError('Something went wrong. Please try again later.');
  }
}

export default handleExercise;

import { showSuccess, showError } from '../helpers/toaster';
import { exercisesApi } from '../services/exercises-api';
import { exerciseDetailsMarkup } from '../templates';
import handleFavorites from './add-favorites-handler';

const popUpState = {
  detailsPopup: false,
  ratingPopup: false,
};

const stopPropagation = (e) => e.stopPropagation();

const getPopupElements = (markup) => {
  const container = document.createElement('div');
  container.innerHTML = markup;

  const backdrop = container.querySelector('.exercise-modal-backdrop');
  const detailsPopup = container.querySelector('.exercise-modal');
  const detailsCloseBtn = container.querySelector('.exercise-card-close-btn');
  const ratingBtn = container.querySelector('.add-rating-btn');
  const favoriteButton = container.querySelector('.add-favorites-btn');

  const _ratingPopupBackdrop = document.querySelector('[data-modal]');
  const ratingPopup = _ratingPopupBackdrop.querySelector('.modal').cloneNode(true);

  return { backdrop, detailsPopup, detailsCloseBtn, ratingBtn, favoriteButton, ratingPopup };
};

const handleRatingPopup = (ratingPopup) => {
  const closeButton = ratingPopup.querySelector('.modal__close-btn');
  const ratingForm = ratingPopup.querySelector('.give_a_rating');
};

const handleListeners = (detailsPopupHtml, data) => {
  const {
    backdrop,
    detailsPopup,
    detailsCloseBtn,
    ratingBtn,
    favoriteButton,
    ratingPopup,
  } = getPopupElements(detailsPopupHtml);

  const closeDetailsPopup = () => {
    popUpState.detailsPopup = false;
    popUpState.ratingPopup = false;
    backdrop?.remove();
  };

  const closeRatingPopup = () => {
    ratingPopup.remove();
    backdrop.innerHTML = '';
    popUpState.ratingPopup = false;
    backdrop.append(detailsPopup);
  };

  const handleBackdropClickAndEsc = () => {
    switch (true) {
      case popUpState.detailsPopup && !popUpState.ratingPopup:
        closeDetailsPopup();
        return;
      case popUpState.detailsPopup && popUpState.ratingPopup:
        closeRatingPopup();
        return;
      default:
        closeDetailsPopup();
        return;
    }
  }

  window.addEventListener('keydown', (e) => {
    if (e.code !== 'Escape') return;
    handleBackdropClickAndEsc();
  });

  detailsPopup.addEventListener('click', stopPropagation);
  ratingPopup.addEventListener('click', stopPropagation);

  backdrop.addEventListener('click', () => {
    handleBackdropClickAndEsc();
  });
  
  detailsCloseBtn.addEventListener('click', () => {
    backdrop.remove();
  });

  ratingBtn.addEventListener('click', () => {
    popUpState.ratingPopup = true;
    backdrop.innerHTML = '';
    backdrop.append(ratingPopup);
  });

  favoriteButton.addEventListener('click', (e) => {
    handleFavorites(data);
  });

  handleRatingPopup(ratingPopup, closeRatingPopup);

  popUpState.detailsPopup = true;
  document.body.append(backdrop);
}

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
    showError("Something went wrong. Please try again later.");
  }
}

export default handleExercise;

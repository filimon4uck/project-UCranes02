import { showSuccess, showError } from '../helpers/toaster';
import { exercisesApi } from '../services/exercises-api';
import { exerciseDetailsMarkup } from '../templates';

const popUpState = {
  detailsPopup: false,
  ratingPopup: false,
};

const handleListeners = (detailsPopupHtml) => {
  const container = document.createElement('div');
  container.innerHTML = detailsPopupHtml;

  const backdrop = container.querySelector('.exercise-modal-backdrop');

  const detailsPopup = container.querySelector('.exercise-modal');
  const detailsCloseBtn = container.querySelector('.exercise-card-close-btn');
  const ratingBtn = container.querySelector('.add-rating-btn');
  const favoriteButton = container.querySelector('.add-favorites-btn');

  const _ratingPopupBackdrop = document.querySelector('[data-modal]');
  const ratingPopup = _ratingPopupBackdrop.querySelector('.modal').cloneNode(true);

  const handleBackdropClickAndEsc = () => {
    
    // debugger;
    switch (true) {
      case popUpState.detailsPopup && !popUpState.ratingPopup:
        popUpState.detailsPopup = false;
        popUpState.ratingPopup = false;
        backdrop.remove();
        return;
      case popUpState.detailsPopup && popUpState.ratingPopup:
        ratingPopup.remove();
        backdrop.innerHTML = '';
        popUpState.ratingPopup = false;
        backdrop.append(detailsPopup);
        return;
      default:
        popUpState.detailsPopup = false;
        popUpState.ratingPopup = false;
        backdrop?.remove();
        return;
    }
  }

  window.addEventListener('keydown', e => {
    if (e.code !== 'Escape') return;
    handleBackdropClickAndEsc();
  });

  detailsPopup.addEventListener('click', e => {
    e.stopPropagation();
  });

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

  popUpState.detailsPopup = true;
  document.body.append(backdrop);
}

async function handleExercise(e, ratingPopupCallback) {
  e.preventDefault();
  if (!e.target.closest('[data-id]')) return;

  try {
    const exerciseId = e.target.closest('[data-id]').dataset.id;

    const data = await exercisesApi.getExerciseById(exerciseId);
    console.log(data);

    showSuccess(exerciseId);
    const detailsPopup = exerciseDetailsMarkup(data);
    const modalElement = handleListeners(detailsPopup);
  
  } catch (err) {
    console.log(err);
    showError(err.message);
  }


}

export default handleExercise;

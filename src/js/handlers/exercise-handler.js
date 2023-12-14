import { showSuccess, showError } from '../helpers/toaster';
import { exercisesApi } from '../services/exercises-api';
import { exerciseDetailsMarkup } from '../templates';

const handleListeners = (detailsPopupHtml, ratingPopupHtml) => {
  const container = document.createElement('div');
  container.innerHTML = detailsPopupHtml;
  const detailsPopup = container.querySelector('.details-popup');
  const closeBtn = detailsPopup.querySelector('.details-popup__close-btn');
  const overlay = detailsPopup.querySelector('.details-popup__overlay');
  const ratingBtn = detailsPopup.querySelector('.details-popup__rating-btn');
  
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
    const _ = handleListeners(detailsPopup);
  
  } catch (err) {
    console.log(err);
    showError(err.message);
  }


}

export default handleExercise;

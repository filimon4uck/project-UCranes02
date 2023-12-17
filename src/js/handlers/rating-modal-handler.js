import { hideLoader, showLoader } from '../helpers/loader';
import { showError } from '../helpers/toaster';
import renderLoader from '../renderers/render-loader';
import { exercisesApi } from '../services/exercises-api';
import { validate, handleValidationErrors } from './validation-handler';

export default async function submitForm(e, onSuccess) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = {
    rate: Number(formData.get('rate')),
    email: formData.get('email'),
    review: formData.get('review'),
  };

  const validarionResult = validate(data);

  handleValidationErrors(validarionResult, e.target);
  if (validarionResult.isInvalid) return;
  renderLoader(e.target);
  try {
    showLoader(e.target);
    const resp = await exercisesApi.updateExerciseRating(data);
    hideLoader(e.target);
    onSuccess();
  } catch (error) {
    console.log(error);
    showError("Something went wrong. Please try again later.");
    hideLoader(e.target);
  }
}

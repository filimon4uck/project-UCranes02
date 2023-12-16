const emailRegexp = /^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/;

function handleValidationErrors (errors, form) {
  const [ratingFieldset, emailLabel, reviewLabel] = form.querySelectorAll('.users_rating, label');
  const [ratingError, emailError, reviewError] = form.querySelectorAll('.error');

  if (errors.rate) {
    ratingFieldset.classList.add('invalid');
    ratingError.textContent = errors.rate;
  } else {
    ratingFieldset.classList.remove('invalid');
    ratingError.textContent = '';
  }

  if (errors.email) {
    emailLabel.classList.add('invalid');
    emailError.textContent = errors.email;
  } else {
    emailLabel.classList.remove('invalid');
    emailError.textContent = '';
  }

  if (errors.review) {
    reviewLabel.classList.add('invalid');
    reviewError.textContent = errors.review;
  } else {
    reviewLabel.classList.remove('invalid');
    reviewError.textContent = '';
  }
};

function validate({rate, email, review}) {
  const errors = {
    isInvalid: false,
  };

  switch (true) {
    case !rate:
      errors.isInvalid = true;
      errors.rate = 'Please select a rating';
    case !email:
      errors.isInvalid = true;
      errors.email = 'Please enter an email';
    case !emailRegexp.test(email):
      errors.isInvalid = true;
      errors.email = 'Please enter a valid email';
    case !review:
      errors.isInvalid = true;
      errors.review = 'Please enter a review';
      break;
    default:
      errors.isInvalid = false;
  }
  return errors;
}

export { validate, handleValidationErrors };

const modal = document.querySelector('[data-modal]');
const modalCloseButtons = document.querySelectorAll('[data-modal-close]');
const modalOpenButtons = document.querySelectorAll('[data-modal-open]');
const ratingForm = document.querySelector('.give_a_rating');

document.addEventListener('DOMContentLoaded', function () {
  function openModal() {
    modal.classList.remove('is-hidden');
  }

  function closeModal() {
    modal.classList.add('is-hidden');
  }

  function submitForm(event) {
    event.preventDefault();

    // Get input values
    const userEmail = document.getElementById('user_email_up').value;
    const userComment = document.getElementById('user_comment').value;
    const userRating = document.querySelector('input[name="rating"]:checked');

    // Store values in local storage
    localStorage.setItem('userEmail', userEmail);
    localStorage.setItem('userComment', userComment);
    localStorage.setItem(
      'userRating',
      userRating ? userRating.value : 'no rating'
    );

    // For demonstration purposes, let's log the stored values
    console.log('Stored Email:', localStorage.getItem('userEmail'));
    console.log('Stored Comment:', localStorage.getItem('userComment'));
    console.log('Stored Rating:', localStorage.getItem('userRating'));

    closeModal();
  }

  modalOpenButtons.forEach(function (button) {
    button.addEventListener('click', openModal);
  });

  modalCloseButtons.forEach(function (button) {
    button.addEventListener('click', closeModal);
  });

  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });

  ratingForm.addEventListener('submit', submitForm);
});

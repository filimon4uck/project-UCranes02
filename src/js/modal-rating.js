const form = document.querySelector('.give_a_rating');
const KEY_STORAGE = 'feedback-form-state';
const close = document.querySelector('.modal__close-btn');
const modalRating = document.querySelector('.backdrop');

console.log('hello world');

form.addEventListener('input', onInputData);
form.addEventListener('submit', onFormSubmit);
close.addEventListener('click', () => {
  modalRating.classList.add('is-hidden');
});

let dataForm = JSON.parse(localStorage.getItem(KEY_STORAGE)) || {};
const { email, comment } = form.elements;
reloadPage();

function onInputData(e) {
  dataForm = { email: email.value, comment: comment.value };
  localStorage.setItem(KEY_STORAGE, JSON.stringify(dataForm));
}

function reloadPage() {
  if (dataForm) {
    email.value = dataForm.email || '';
    comment.value = dataForm.comment || '';
  }
}
function onFormSubmit(e) {
  e.preventDefault();
  console.log({ email: email.value, comment: comment.value });

  if (email.value === '' || comment.value === '') {
    return alert('Please fill in all the fields!');
  }

  localStorage.removeItem(KEY_STORAGE);
  e.currentTarget.reset();
  dataForm = {};
}

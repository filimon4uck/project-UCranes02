const loader = document.querySelector('.loader');
function showLoader() {
  loader.classList.remove('hidden');
}
function hideLoader() {
  loader.classList.add('hidden');
}

export { showLoader, hideLoader };

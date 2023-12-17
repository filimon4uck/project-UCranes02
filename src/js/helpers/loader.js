function showLoader(container) {
  const loader = (container || document).querySelector('.loader');
  loader.classList.remove('is-hidden');
}
function hideLoader(container) {
  const loader = (container || document).querySelector('.loader');
  loader.classList.add('is-hidden');
}

export { showLoader, hideLoader };

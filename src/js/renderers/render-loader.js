import loaderMarkup from '../templates/loader-markup';

function renderLoader(container) {
  if (!container) return;
  if (container.querySelector('.loader')) return;
  container.insertAdjacentHTML('beforeend', loaderMarkup());
}

export default renderLoader;

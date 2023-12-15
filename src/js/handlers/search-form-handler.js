import { elements } from '../elements';

function handleSearch(evt) {
  evt.preventDefault();
  const textTosearch = elements.searchForm.exercise.value.trim().toLowerCase();
  if (textTosearch) {
    // render textTosearch
  }
}

export default handleSearch;

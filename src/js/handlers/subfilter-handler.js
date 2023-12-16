import { gallery } from '../services/gallery';

async function handleSubfilter(e) {
  e.preventDefault();
  if (!e.target.closest('[data-subfilter]')) return;

  const { subfilter } = e.target.closest('[data-subfilter]').dataset;
  gallery.goExercises(subfilter);
}
export default handleSubfilter;

import { gallery } from '../services/gallery';

async function handleBackButton(e) {
  gallery.goBack();
}
export default handleBackButton;
import { elements } from '../elements';

function handleNavigation() {
  if (location.href.includes('index.html')) {
    elements.nav_home.classList.add('active-item');
    elements.nav_favorites.classList.remove('active-item');
    return;
  }
  if (location.href.includes('favorites.html')) {
    elements.nav_favorites.classList.add('active-item');
    elements.nav_home.classList.remove('active-item');
    return;
  }
}

export default handleNavigation;

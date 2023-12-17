import { elements } from '../elements';
function handlerOpenMenu(evt) {
  if (evt.currentTarget === elements.btnOpenBurger) {
    elements.burgerMenu.classList.remove('is-hidden');
    document.querySelector('html').classList.add('no-scroll');
  }
  if (evt.currentTarget === elements.btnCloseBurger) {
    elements.burgerMenu.classList.add('is-hidden');
    document.querySelector('html').classList.remove('no-scroll');
  }
}
export default handlerOpenMenu;

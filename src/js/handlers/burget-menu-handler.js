import { elements } from '../elements';
function handlerOpenMenu(evt) {
  if (evt.currentTarget === elements.btnOpenBurger) {
    elements.burgerMenu.classList.remove('is-hidden');
    document.querySelector('body').classList.add('scroll-fixed');
  }
  if (evt.currentTarget === elements.btnCloseBurger) {
    elements.burgerMenu.classList.add('is-hidden');
    document.querySelector('body').classList.remove('scroll-fixed');
  }
}
export default handlerOpenMenu;

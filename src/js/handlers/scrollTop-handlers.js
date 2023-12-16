import scrollToTopOrElement from '../helpers/scroll.js';
import { elements } from '../elements.js';
function handleScrollTop() {
  scrollToTopOrElement('top');
}
function handleScrollTopBtnShow() {
  const { scrollTopBtn } = elements;
  if (window.scrollY < 100) {
    scrollTopBtn.classList.replace(
      'js-scroll-top-button-active',
      'hide-scroll-top-button'
    );
    return;
  } else {
    // Show the button if scrolled down more than 100 pixels
    scrollTopBtn.classList.replace(
      'hide-scroll-top-button',
      'js-scroll-top-button-active'
    );
  }
}

export { handleScrollTop, handleScrollTopBtnShow };

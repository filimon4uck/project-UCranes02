import 'modern-normalize';
import throttle from 'lodash.throttle';
import { elements } from './js/elements';
import {
  handleScrollTop,
  handleScrollTopBtnShow,
  handlerOpenMenu,
} from './js/handlers';
import { gallery } from './js/services/gallery';
import { resizeObserver } from './js/helpers/screen-resolution';

window.addEventListener('scroll', throttle(handleScrollTopBtnShow, 500))
elements.scrollTopBtn.addEventListener('click', handleScrollTop);
elements.btnOpenBurger.addEventListener('click', handlerOpenMenu);
elements.btnCloseBurger.addEventListener('click', handlerOpenMenu);
gallery.load();

resizeObserver.observe(document.querySelector('html'));

import 'modern-normalize';

import { elements } from './js/elements';
import {
  handleScrollTop,
  handleScrollTopBtnShow,
} from './js/handlers';
import { gallery } from './js/services/gallery';

import { resizeObserver } from './js/helpers/screen-resolution';

window.addEventListener('scroll', handleScrollTopBtnShow);
elements.scrollTopBtn.addEventListener('click', handleScrollTop);

gallery.load();

resizeObserver.observe(document.querySelector("html"));
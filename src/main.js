import 'modern-normalize';

import { elements } from './js/elements';
import {
  handleScrollTop,
  handleScrollTopBtnShow,
} from './js/handlers';
import { gallery } from './js/services/gallery';


window.addEventListener('scroll', handleScrollTopBtnShow);
elements.scrollTopBtn.addEventListener('click', handleScrollTop);

gallery.load();

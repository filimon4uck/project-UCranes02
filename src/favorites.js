import 'modern-normalize';
import { favorites } from './js/services/favorites-page';
import { elements } from './js/elements';
import { handleScrollTop, handleScrollTopBtnShow, handlerOpenMenu } from './js/handlers';

elements.btnOpenBurger.addEventListener('click', handlerOpenMenu);
elements.btnCloseBurger.addEventListener('click', handlerOpenMenu);
window.addEventListener('scroll', handleScrollTopBtnShow);
elements.scrollTopBtn.addEventListener('click', handleScrollTop);

favorites.load()
import 'modern-normalize';

import { elements } from './js/elements';
import { renderFavorites } from './js/renderers';
import handleFavoritePagination from './js/handlers/favorites-pagination-handler';
import { handlerOpenMenu } from './js/handlers/index';

elements.pagination.addEventListener('click', handleFavoritePagination);
elements.btnOpenBurger.addEventListener('click', handlerOpenMenu);
elements.btnCloseBurger.addEventListener('click', handlerOpenMenu);
renderFavorites();

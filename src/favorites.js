import 'modern-normalize';

import { elements } from './js/elements';
import { renderFavorites } from './js/renderers';
import handleFavoritePagination from './js/handlers/favorites-pagination-handler';

elements.pagination.addEventListener('click', handleFavoritePagination)

renderFavorites()


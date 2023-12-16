import 'modern-normalize';

import exercisesMarkup from './js/templates/exercises-markup';
import { elements } from './js/elements';
import { common } from './js/common';

const cards = JSON.parse(localStorage.getItem(common.LS_KEY_FAVORITES))  ?? [];

elements.gallery.innerHTML = exercisesMarkup(cards, 'favorites')

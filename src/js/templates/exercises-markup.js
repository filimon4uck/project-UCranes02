import removeIconPath from '../../img/icons.svg#icon-remove';
import starIconPath from '../../img/icons.svg#icon-star';
import iconArrowPath from '../../img/icons.svg#icon-arrow';
import iconRunningManPath from '../../img/icons.svg#icon-run-man';
import heartIconPath from '../../img/icons.svg#icon-heart';
import { favorites } from '../services/favorites-page';

function exercisesMarkup(array, page) {
  return array
    .map(
      ({ _id, bodyPart, name, target, rating, burnedCalories, time }) => `
         <li class="main-item_card-exercises">
      <a class="link-exercise-card" href="" data-id="${_id}">
        <!-- Top place card -->
        <div class="card-cont-content">
          <div class="cont-rating-btn-title">
            <div class="const-text-exer">
              <p class="text-card-exer">WORKOUT</p>
            </div>
            ${
              page === 'favorites'
                ? `
              <div class="btn-card-group">
                <button class="btn-delete-card" type="button" data-delete="${_id}">
                <svg class="icon-delete-favorite" width="16" height="16">
                  <use href="${removeIconPath}"></use>
                </svg>
                </button>
              </div> 
              `
                : `
            <div class="btn-card-group">
               <button class="btn-delete-card ${
                 favorites.isFavorite(_id) ? '' : 'is-hidden'
               }" type="button" data-delete="${_id}">
                <svg class="icon-delete-favorite" width="16" height="16">
                  <use href="${removeIconPath}"></use>
                </svg>
                </button>
                <button class="btn-add-card ${
                  favorites.isFavorite(_id) ? 'is-hidden' : ''
                }"" type="button" data-add="${_id}">
                <svg class="icon-add-favorite" width="16" height="16">
                 <use href="${heartIconPath}"></use>
               </svg>
               </button>
            </div>  
            ${
              rating
                ? `
                <div class="cont-card-rating">
                <p class="card-rating-exer">${Math.round(rating) + '.0'}</p>
                <svg class="icon-card-exer" width="18" height="18">
                  <use href="${starIconPath}"></use>
                </svg>
              </div>`
                : ``
            }
              `
            }
            <div class="block-btn-icon-exer">
              <span class="btn-card-exer">Start</span>
              <svg class="icon-card-btn" width="16" height="16">
                <use href="${iconArrowPath}"></use>
              </svg>
            </div>
          </div>
          <!-- Middle place card -->
          <div class="cont-icon-name-text">
            <svg class="icon-people-card" width="24" height="24">
              <use href="${iconRunningManPath}"></use>
            </svg>
            <p class="text-name-exercises-card">${name}</p>
          </div>
          <!-- End place card -->
          <ul class="list-info-exer">
            <li class="item-card-exer">
              <p class="text-title-item-exer big">Burned calories:</p>
              <p class="text-info-exer size-time">${burnedCalories}/${time}</p>
            </li>
            <li class="item-card-exer">
              <p class="text-title-item-exer medium">Body part:</p>
              <p class="text-info-exer size-body">${bodyPart}</p>
            </li>
            <li class="item-card-exer">
              <p class="text-title-item-exer small">Target:</p>
              <p class="text-info-exer size-target">${target}</p>
            </li>
          </ul>
        </div>
      </a>
    </li>`
    )
    .join('');
}

export default exercisesMarkup;

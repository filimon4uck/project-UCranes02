import heartIcon from '../../img/icons.svg#icon-heart';
import removeIcon from '../../img/icons.svg#icon-remove';
import closeIcon from '../../img/icons.svg#icon-close';
import starIcon from '../../img/icons.svg#icon-star';

function exerciseDetailsMarkup({
  bodyPart,
  equipment,
  gifUrl,
  name,
  target,
  description,
  rating,
  burnedCalories,
  time,
  popularity,
  _id,
}) {
  let newRating = Math.round(rating);
  let isId = false;
  const parsedData = JSON.parse(localStorage.getItem('favorites'));
  if (parsedData) {
    isId = parsedData.some(obj => obj._id === _id);
  }
  return `
  
    <div class="exercise-modal">
        <button class="exercise-card-close-btn" type="button">
            <svg class="exercise-card-close-icon" aria-label="Modal window close icon">
                <use href="${closeIcon}"></use>
            </svg>
        </button>
        <div class="exercise-card">
            <div class="exercise-card-img-wrap">
                <img src=${gifUrl} alt="">
            </div>
                <div class="exercise-card-info">
                    <div>
                        <h2 class="exercise-card-title">${name}</h2>
                        ${
                          newRating
                            ? ` <div class="exercise-card-rating"><span>${
                                newRating ? newRating + '.0' : ''
                              }</span>
                        ${[1, 2, 3, 4, 5]
                          .map(i => {
                            return `
                        <svg aria-label="Rating star" width="16" height="16" stroke="var(--black)" fill=${
                          newRating >= i
                            ? 'var(--yellow)'
                            : 'var(--white-transparent-20)'
                        } >
                            <use href="${starIcon}"></use>
                        </svg>`;
                          })
                          .join('')}
                          </div>`
                            : ''
                        }
                            
                        <ul class="exercise-card-details-list">
                        ${
                          target
                            ? `<li class="exercise-card-details-item">
                        <p class="details-name">Target</p>
                        <p class="details-value">${target}</p>
                        </li>`
                            : ``
                        }
                        ${
                          bodyPart
                            ? `<li class="exercise-card-details-item">
                              <p class="details-name">Body Part</p>
                              <p class="details-value">${bodyPart}</p>
                          </li>`
                            : ``
                        }
                          ${
                            equipment
                              ? `<li class="exercise-card-details-item">
                              <p class="details-name">Equipment</p>
                              <p class="details-value">${equipment}</p>
                          </li>`
                              : ``
                          }
                          ${
                            popularity
                              ? `<li class="exercise-card-details-item">
                              <p class="details-name">Popular</p>
                              <p class="details-value">${popularity}</p>
                          </li>`
                              : ``
                          }
                          ${
                            burnedCalories && time
                              ? `<li class="exercise-card-details-item">
                              <p class="details-name">Burned calories</p>
                              <p class="details-value">${burnedCalories}/${time} min</p>
                          </li>`
                              : ``
                          }
                         
                        </ul>
                        <p class="exercise-card-description">${
                          description ? description : ''
                        }</p>
                    </div>
                    <div class="exercise-card-btn-group">
                        <button class="card-btn add-favorites-btn" ${
                          isId ? `style="padding: 12px 9px"` : ''
                        }>
                            <span>${
                              isId
                                ? 'Remove from favorites'
                                : 'Add to favorites'
                            }</span>
                            <svg class="favorites-icon" aria-label="Favorite icon" width="20" height="20" >
                                <use href="${
                                  isId ? `${removeIcon}` : `${heartIcon}`
                                }"></use>
                            </svg>
                        </button>
                        <button class="card-btn add-rating-btn">Give a rating</button>
                </div>
            </div>
        </div>
    </div>`;
}

export default exerciseDetailsMarkup;

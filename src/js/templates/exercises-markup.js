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
                <button class="btn-delete-card" type="button">
                <svg class="icon-delete-favorite" width="16" height="16">
                  <use href="./img/icons.svg#icon-remove"></use>
                </svg>
                </button>
                
              `
                : `
                <div class="cont-card-rating">
                  <p class="card-rating-exer">${rating}</p>
                  <svg class="icon-card-exer" width="18" height="18">
                    <use href="./img/icons.svg#icon-star"></use>
                  </svg>
                </div>
              `
            }
            <div class="block-btn-icon-exer">
              <button class="btn-card-exer">Start</button>
              <svg class="icon-card-btn" width="16" height="16">
                <use href="./img/icons.svg#icon-arrow"></use>
              </svg>
            </div>
          </div>
          <!-- Middle place card -->
          <div class="cont-icon-name-text">
            <svg class="icon-people-card" width="24" height="24">
              <use href="./img/icons.svg#icon-run-man"></use>
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

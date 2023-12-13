function subfiltersMarkup(array) {
  return array
    .map(
      ({
        filter,
        name,
        imgURL,
      }) => `<li data-subfilter="${name}" class="exercises-item">
      <a class="exercises-item-container" href="">
        <img class="exercises-item-image" src="${imgURL}" alt="${name}" />
        <div class="exercises-proprties-container">
          <h4 class="exercises-item-name">${name}</h4>
          <p class="exercises-item-type">${filter}</p>
        </div>
      </a>
    </li>`
    )
    .join('');
}

export default subfiltersMarkup;

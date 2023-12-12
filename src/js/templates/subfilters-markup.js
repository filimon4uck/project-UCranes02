function subfiltersMarkup(array) {
    return array.map(
      ({
        filter,
        name,
        imgURL,
      }) => `<li data-subfilter="${name}" class="exercises-item">
  <img class="exercises-item-image" width="300" src="${imgURL}" alt="${name}" />
  <p class="exercises-item-name">${name}</p>
  <p class="exercises-item-type">${filter}</p>
</li>
`
    )
    .join('');
}

export default subfiltersMarkup;

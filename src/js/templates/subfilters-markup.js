function subfiltersMarkup(array) {
  return array
    .map(
      ({
        filter,
        name,
        imgUrl,
      }) => `<li data-subfilter="${name}" class="exercises-item">
  <img class="exercises-item-image" src="${imgUrl}" alt="${name}" />
  <p class="exercises-item-name">${name}</p>
  <p class="exercises-item-type">${filter}</p>
</li>
`
    )
    .join('');
}

export default subfiltersMarkup;

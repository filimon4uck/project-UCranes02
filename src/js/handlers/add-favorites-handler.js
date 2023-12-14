function handleFavorites(data) {
  const favorite = document.querySelector('.add-favorites-btn');
  if (favorite) {
    favorite.addEventListener('click', addToFavorites);
  }

  function addToFavorites(e) {
    const favoritesData = localStorage.getItem('favorites');
    const parsedData = JSON.parse(favoritesData);
    if (favoritesData) {
      if (!parsedData.some(obj => obj._id === data._id)) {
        parsedData.push(data);
        localStorage.setItem('favorites', JSON.stringify(parsedData));
        favorite.querySelector('span').textContent = 'Remove from favorites';
        favorite
          .querySelector('use')
          .setAttribute('href', './img/icons.svg#icon-remove');
      } else {
        const index = parsedData.map(obj => obj._id).indexOf(data._id);
        parsedData.splice(index, 1);
        localStorage.setItem('favorites', JSON.stringify(parsedData));
        favorite.querySelector('span').textContent = `Add to favorites`;
        favorite
          .querySelector('use')
          .setAttribute('href', './img/icons.svg#icon-heart');
      }
    } else {
      const firstData = JSON.stringify([data]);
      localStorage.setItem('favorites', firstData);
    }
  }
}

export default handleFavorites;

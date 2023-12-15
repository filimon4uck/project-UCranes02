function removeFavorites(id) {
  const favoritesData = localStorage.getItem('favorites');
  const parsedData = JSON.parse(favoritesData);
  const index = parsedData.map(obj => obj._id).indexOf(id);
  parsedData.splice(index, 1);
  localStorage.setItem('favorites', JSON.stringify(parsedData));
}

export default removeFavorites;

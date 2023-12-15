const cardsQuantity = {
  mobile: { subfilters: 9, exercises: 8, favorites: 8 },
  tablet: { subfilters: 12, exercises: 10, favorites: 10 },
  desktop: { subfilters: 12, exercises: 10, favorites: 999 },
};
function getDeviseType() {
  let key = 'desktop';
  if (window.screen.width < 768) {
    key = 'mobile';
  }
  if (window.screen.width >= 768 && window.screen.width < 1440) {
    key = 'tablet';
  }
  return cardsQuantity[key];
}

export {cardsQuantity, getDeviseType};
// function scrollToTopOrElement(target) {
//   if (target === 'top') {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   } else {
//     target.scrollIntoView({ behavior: 'smooth' });
//   }
// }
function scrollToTopOrElement(target) {
  if (target === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    const element = target;
    if (element) {
      const elementRect = element.getBoundingClientRect();
      if (
        elementRect.top >= 0 &&
        elementRect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      ) {
        console.log('el is in viewport');
        return;
      }
      window.scrollBy({
        top: elementRect.top - 20,
        behavior: 'smooth',
      });
    }
  }
}
export default scrollToTopOrElement;

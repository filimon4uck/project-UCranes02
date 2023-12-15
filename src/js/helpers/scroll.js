function scrollToTopOrElement(target) {
  if (target === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}
export default scrollToTopOrElement;

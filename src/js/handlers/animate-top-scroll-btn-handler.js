const scrollTopBtn = document.querySelector('.js-scroll-top-button');
function handleAnimateTopScrollButton() {
  const scrollPosition =
    document.documentElement.scrollTop || document.body.scrollTop;
  const maxScroll =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const percentageScrolled = (scrollPosition / maxScroll) * 100;

  scrollTopBtn.style.background = `conic-gradient(white ${percentageScrolled}%, black ${percentageScrolled}%)`;
}
export default handleAnimateTopScrollButton;

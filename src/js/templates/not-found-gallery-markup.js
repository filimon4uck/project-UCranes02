function notFoundGalleryMarkup() {
  return `<li class='not-found-gallery'><picture>
    <source media="(min-width: 1440px)" srcset="/img/gallery-not-found/not-found-gallery-desktop.jpg, /img/gallery-not-found/not-found-gallery-desktop@2x.jpg 2x" />
    <source media="(min-width: 768px)" srcset="/img/gallery-not-found/not-found-gallery-tablet.jpg, /img/gallery-not-found/not-found-gallery-tablet@2x.jpg 2x" />
    <source srcset="/img/gallery-not-found/not-found-gallery-mobile.jpg, /img/gallery-not-found/not-found-gallery-mobile@2x.jpg 2x" />
    <img src="/img/gallery-not-found/not-found-gallery-desktop.jpg" alt="Exercises not found" />
  </picture></li>`;
}

export default notFoundGalleryMarkup;

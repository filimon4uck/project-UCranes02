import desktopImage from '../../img/gallery-not-found/not-found-gallery-desktop.jpg';
import desktopImageRetina from '../../img/gallery-not-found/not-found-gallery-desktop@2x.jpg';
import tabletImage from '../../img/gallery-not-found/not-found-gallery-tablet.jpg';
import tabletImageRetina from '../../img/gallery-not-found/not-found-gallery-tablet@2x.jpg';
import mobileImage from '../../img/gallery-not-found/not-found-gallery-mobile.jpg';
import mobileImageRetina from '../../img/gallery-not-found/not-found-gallery-mobile@2x.jpg';

function notFoundGalleryMarkup() {
  return `<li class='not-found-gallery'><picture>
    <source media="(min-width: 1440px)" srcset="${desktopImage}, ${desktopImageRetina} 2x" />
    <source media="(min-width: 768px)" srcset="${tabletImage}, ${tabletImageRetina} 2x" />
    <source srcset="${mobileImage}, ${mobileImageRetina} 2x" />
    <img src="${desktopImage}" alt="Exercises not found" />
  </picture></li>`;
}

export default notFoundGalleryMarkup;

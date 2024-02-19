/* For responsive hero image  */

function changeImageSrc() {
  var image = document.getElementById("responsiveImage");
  if (window.matchMedia("(min-width: 43.75em)").matches) {
    image.src = "images/hero-desktop.jpg";
  } else {
    image.src = "images/hero-mobile.jpg";
  }
}
changeImageSrc();
window.addEventListener("resize", changeImageSrc);

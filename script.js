function hideImage(image) {
  image.style.display = "none";
}

function resetImages() {
  var images = document.getElementsByTagName("img");
  for (var i = 0; i < images.length; i++) {
    images[i].style.display = "inline";
  }
}
var isDisappearingMode = true;

function toggleImage(image) {
  if (isDisappearingMode) {
    image.style.display = "none";
  } else {
    image.classList.toggle("grayscale");
  }
}

function resetImages() {
  var images = document.getElementsByTagName("img");
  for (var i = 0; i < images.length; i++) {
    images[i].style.display = "inline";
    images[i].classList.remove("grayscale");
  }
}

function toggleMode() {
  isDisappearingMode = !isDisappearingMode;
}

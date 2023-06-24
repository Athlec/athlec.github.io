var isDisappearingMode = true;

function hideImage(image) {
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

function openFileInput() {
  document.getElementById("file-input").click();
}

document.getElementById("file-input").addEventListener("change", function(event) {
  var fileList = event.target.files;
  var imageContainer = document.getElementById("image-containert6");

  for (var i = 0; i < fileList.length; i++) {
    var file = fileList[i];
    var image = document.createElement("img");
    image.src = URL.createObjectURL(file);
    image.onclick = function() {
      toggleImage(this);
    };
    imageContainer.appendChild(image);
  }
});
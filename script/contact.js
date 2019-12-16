var slideIndex = 1;

function slide() {
  var i;
  var x = document.getElementsByClassName("img");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(slide, 5000); // Change image every 2 seconds
}
slide();
console.log(slide);

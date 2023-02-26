const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", opensNavigationBar);
hamburger.addEventListener("click", hidesNavigationBar);

function opensNavigationBar() {
  navLinks.classList.toggle("open");
}

function hidesNavigationBar() {
  navLinks.classList.toggle("fade");
}

const hamburgerIcon = document.querySelector(".hamburger")!;
const navLinks = document.querySelector(".nav-links")!;

hamburgerIcon.addEventListener("click", opensNavigationBar);
hamburgerIcon.addEventListener("click", hidesNavigationBar);

function opensNavigationBar() {
  navLinks?.classList.toggle("open");
}

function hidesNavigationBar() {
  navLinks?.classList.toggle("fade");
}

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", opensNavigationBar);
hamburger.addEventListener("click", hidesNavigationBar);

function opensNavigationBar() {
  navLinks.classList.toggle("open");
}

function hidesNavigationBar() {
  links.forEach((link) => {
    console.log(`hello ${link}`);
    link.classList.toggle("fade");
  });
}

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", opensNavigationBar);
hamburger.addEventListener("click", hidesNavigationBAR);

function opensNavigationBar() {
  navLinks.classList.toggle("open");
}

function hidesNavigationBAR() {
  links.forEach((link) => {
    console.log(`hello ${link}`);
    link.classList.toggle("fade");
  });
}

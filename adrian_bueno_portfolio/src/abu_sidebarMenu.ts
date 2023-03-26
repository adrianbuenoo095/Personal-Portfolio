const hamburgerIcon = document.querySelector(".hamburger")!;
const navLinks = document.querySelector(".nav-links")!;

hamburgerIcon.addEventListener("click", opensNavigationBar);
hamburgerIcon.addEventListener("click", hidesNavigationBar);

function opensNavigationBar() : void{
  navLinks?.classList.toggle("open");
}

function hidesNavigationBar() : void {
  navLinks?.classList.toggle("fade");
}

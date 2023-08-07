const hamburgerButton = document.querySelector(".hamburger__button");
const navMenu = document.querySelector(".nav__list");

hamburgerButton.addEventListener("click", () => {
  navMenu.classList.toggle("nav__list--visible");
});

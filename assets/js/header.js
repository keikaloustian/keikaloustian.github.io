const navLinks = document.querySelectorAll(".nav__link");
const currentPage = window.location.pathname;

navLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.replace("nav__link--unselected", "nav__link--selected");
  }
});

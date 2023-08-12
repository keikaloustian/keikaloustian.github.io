const button = document.querySelector(".scrolltop");

button.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Intersection observer to toggle button visibility
const header = document.querySelector(".header");

const options = {
  // Observer kicks in once window has scrolled down the specified margin past bottom of header i.e. the root element is "expanded" that much upwards
  rootMargin: "150px 0px 0px 0px",
  threshold: 0,
};

const scrolltopObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio <= 0) {
      button.classList.add("scrolltop--visible");
    }

    if (entry.intersectionRatio > 0) {
      button.classList.remove("scrolltop--visible");
    }
  });
}, options);

scrolltopObserver.observe(header);

const button = document.querySelector(".scrolltop");

button.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Intersection observer to toggle button visibility
const hero = document.querySelector(".hero");

const options = {
  rootMargin: "0px",
  threshold: 0.2,
};

const scrolltopObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio <= 0.2) {
      button.classList.add("scrolltop--visible");
    }

    if (entry.intersectionRatio > 0.2) {
      button.classList.remove("scrolltop--visible");
    }
  });
}, options);

scrolltopObserver.observe(hero);

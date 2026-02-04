function revealOnScroll() {
  document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.classList.add("reveal-ready");

    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      const triggerPoint = window.innerHeight * 0.9;

      reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        const bottom = el.getBoundingClientRect().bottom;

        if (top < triggerPoint && bottom > 0) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
  });
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav ul");

function toggleMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

hamburger.addEventListener("click", toggleMenu);

const navLinks = document.querySelectorAll(".nav ul li a");
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

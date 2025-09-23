/* -------------------------------
   Homepage.js for NEMO
---------------------------------*/

// -------- Mobile Navigation --------
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("primaryNav");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", !expanded);
    navLinks.classList.toggle("open");
  });
}

// -------- Scroll Fade-in --------
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // only animate once
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach((section) => observer.observe(section));

// -------- FAQ Accordion --------
const accordions = document.querySelectorAll(".accordion-trigger");

accordions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", !expanded);

    const panel = document.getElementById(btn.getAttribute("aria-controls"));
    if (!expanded) {
      panel.hidden = false;
    } else {
      panel.hidden = true;
    }
  });
});

// -------- Carousel --------
const carousel = document.querySelector(".carousel");
if (carousel) {
  const track = carousel.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const prevBtn = carousel.querySelector(".prev");
  const nextBtn = carousel.querySelector(".next");
  const dotsNav = carousel.querySelector(".carousel-dots");
  const dots = Array.from(dotsNav.children);

  let currentIndex = 0;
  let interval = null;

  function updateCarousel(index) {
    // Wrap around
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentIndex = index;

    const offset = -index * 100;
    track.style.transform = `translateX(${offset}%)`;

    slides.forEach((slide, i) =>
      slide.classList.toggle("is-active", i === index)
    );
    dots.forEach((dot, i) =>
      dot.classList.toggle("is-active", i === index)
    );
  }

  function startAutoPlay() {
    interval = setInterval(() => {
      updateCarousel(currentIndex + 1);
    }, 5000); // 5s
  }

  function stopAutoPlay() {
    clearInterval(interval);
  }

  // Buttons
  prevBtn.addEventListener("click", () => {
    updateCarousel(currentIndex - 1);
    stopAutoPlay();
    startAutoPlay();
  });

  nextBtn.addEventListener("click", () => {
    updateCarousel(currentIndex + 1);
    stopAutoPlay();
    startAutoPlay();
  });

  // Dots
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      updateCarousel(i);
      stopAutoPlay();
      startAutoPlay();
    });
  });

  // Init
  updateCarousel(0);
  startAutoPlay();
}

// -------- Footer Year --------
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

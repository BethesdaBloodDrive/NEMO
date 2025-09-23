/* -------------------------------
   Training Homepage JS
   Adds animations + interactions
--------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  /* ---------------------------------
     1. Scroll Fade-In Animations
  --------------------------------- */
  const fadeElements = document.querySelectorAll(
    ".card, .gallery-container img, .hero-content"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // animate only once
        }
      });
    },
    { threshold: 0.2 }
  );

  fadeElements.forEach((el) => observer.observe(el));

  /* ---------------------------------
     2. Smooth Scroll for Anchor Links
  --------------------------------- */
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId.length > 1) {
        e.preventDefault();
        document.querySelector(targetId).scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  /* ---------------------------------
     3. Footer Year Auto-Update
  --------------------------------- */
  const yearEl = document.querySelector(".footer-copy");
  if (yearEl) {
    const year = new Date().getFullYear();
    yearEl.innerHTML = `© ${year} NEMO. All rights reserved.`;
  }
});

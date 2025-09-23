document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.manual-section');

  sections.forEach(section => {
    const header = section.querySelector('.manual-header');
    const content = section.querySelector('.manual-content');

    // Ensure content is hidden at start
    content.style.maxHeight = "0px";

    // Click + keyboard toggle
    header.addEventListener('click', () => toggleSection(section));
    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleSection(section);
      }
    });
  });

  function toggleSection(activeSection) {
    const isOpen = activeSection.classList.contains('open');

    // Close all sections first
    document.querySelectorAll('.manual-section').forEach(sec => {
      sec.classList.remove('open');
      sec.querySelector('.manual-content').style.maxHeight = "0px";
    });

    // If not already open, open this one
    if (!isOpen) {
      activeSection.classList.add('open');
      const content = activeSection.querySelector('.manual-content');
      content.style.maxHeight = content.scrollHeight + "px";

      // Smooth scroll into view
      activeSection.scrollIntoView({ behavior: "smooth", block: "start" });

      // Save state (optional)
      localStorage.setItem("nemo-open-section", activeSection.querySelector('.manual-header').textContent);
    } else {
      // Clear state if closed
      localStorage.removeItem("nemo-open-section");
    }
  }

  // Restore last open section from localStorage
  const lastOpen = localStorage.getItem("nemo-open-section");
  if (lastOpen) {
    const header = [...document.querySelectorAll('.manual-header')].find(h => h.textContent === lastOpen);
    if (header) {
      const section = header.parentElement;
      section.classList.add('open');
      const content = section.querySelector('.manual-content');
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
});

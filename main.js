/* ============================================================
  PORTFOLIO — MAURICIO FAÚNDEZ
  main.js
   ============================================================ */

// ── Scroll Reveal ────────────────────────────────────────────
// Observa cada elemento con la clase .reveal y le agrega
// .visible cuando entra al viewport, disparando la animación CSS.

const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach((el) => revealObserver.observe(el));


// ── Active Nav Highlight ─────────────────────────────────────
// Resalta el enlace de navegación que corresponde a la sección
// visible en pantalla mientras el usuario hace scroll.

const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let currentId = '';

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 120) {
      currentId = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${currentId}`;
    link.style.color = isActive ? 'var(--accent)' : '';
  });
});

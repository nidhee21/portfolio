/* ============================================
   nav.js — Hamburger Menu & Scroll Observer
   ============================================ */

// Hamburger toggle
function toggleMenu() {
  document.getElementById('hamburger').classList.toggle('open');
  document.getElementById('navLinks').classList.toggle('open');
}

function closeMenu() {
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('navLinks').classList.remove('open');
}

// Scroll fade-in observer
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0, rootMargin: '0px' });

document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));

// Fallback: ensure everything is visible after 500ms
setTimeout(() => {
  document.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'));
}, 500);

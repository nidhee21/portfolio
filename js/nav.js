/* ============================================
   nav.js — Hamburger Menu & Scroll Observer
   ============================================ */

function toggleMenu() {
  document.getElementById('hamburger').classList.toggle('open');
  document.getElementById('navLinks').classList.toggle('open');
}

function closeMenu() {
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('navLinks').classList.remove('open');
}

// Observe ALL animation classes
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0, rootMargin: '0px' });

document.querySelectorAll('.fade-up, .slide-left, .slide-right').forEach(el => obs.observe(el));

// Fallback
setTimeout(() => {
  document.querySelectorAll('.fade-up, .slide-left, .slide-right').forEach(el => el.classList.add('visible'));
}, 0);
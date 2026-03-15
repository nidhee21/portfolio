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

const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0, rootMargin: '0px' });

document.querySelectorAll('.fade-up, .slide-left, .slide-right').forEach(el => obs.observe(el));
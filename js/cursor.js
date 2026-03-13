/* ============================================
   cursor.js — Liquid Blob Cursor
   ============================================ */

const blob = document.getElementById('cursorBlob');
const dot  = document.getElementById('cursorDot');
let mx = 0, my = 0, bx = 0, by = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  dot.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
});

(function animBlob() {
  bx += (mx - bx) * 0.12;
  by += (my - by) * 0.12;
  blob.style.transform = `translate(${bx - 20}px, ${by - 20}px)`;
  requestAnimationFrame(animBlob);
})();

// Expand blob on hover over interactive elements
document.querySelectorAll('a, button, .skill-card, .cert-card, .stat-card, .h-card, .pill, .proj-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    blob.style.width      = '70px';
    blob.style.height     = '70px';
    blob.style.background = 'rgba(247,37,133,0.8)';
  });
  el.addEventListener('mouseleave', () => {
    blob.style.width      = '40px';
    blob.style.height     = '40px';
    blob.style.background = 'rgba(76,201,240,0.85)';
  });
});

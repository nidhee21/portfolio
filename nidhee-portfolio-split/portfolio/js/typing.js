/* ============================================
   typing.js — Typing Animation
   Edit the `phrases` array to change what gets typed
   ============================================ */

window.addEventListener('DOMContentLoaded', () => {
  const phrases = [
    'a Cybersecurity Enthusiast.',
    'a Java Developer.',
    'a Network Analyst.',
    'passionate about Security.'
    // Add more phrases here if you want ↑
  ];

  let pi = 0, ci = 0, del = false;
  const tel = document.getElementById('typed-text');
  if (!tel) return;

  function type() {
    const w = phrases[pi];
    if (!del) {
      ci++;
      tel.textContent = w.slice(0, ci);
      if (ci === w.length) { del = true; setTimeout(type, 1800); return; }
    } else {
      ci--;
      tel.textContent = w.slice(0, ci);
      if (ci === 0) { del = false; pi = (pi + 1) % phrases.length; }
    }
    setTimeout(type, del ? 45 : 90);
  }

  setTimeout(type, 300);
});

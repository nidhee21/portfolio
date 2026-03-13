/* ============================================
   particles.js — Animated Particle Canvas
   ============================================ */

const canvas = document.getElementById('particle-canvas');
const ctx    = canvas.getContext('2d');
let W, H, particles = [];

function resize() {
  W = canvas.width  = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

const COLORS = [
  'rgba(247,37,133,',   // pink
  'rgba(76,201,240,',   // cyan
  'rgba(114,9,183,',    // violet
  'rgba(6,214,160,',    // teal
  'rgba(67,97,238,'     // blue
];

class Particle {
  constructor() { this.reset(); }

  reset() {
    this.x       = Math.random() * W;
    this.y       = Math.random() * H;
    this.size    = Math.random() * 1.5 + 0.3;
    this.speedX  = (Math.random() - 0.5) * 0.4;
    this.speedY  = (Math.random() - 0.5) * 0.4;
    this.color   = COLORS[Math.floor(Math.random() * COLORS.length)];
    this.alpha   = Math.random() * 0.6 + 0.1;
    this.life    = 0;
    this.maxLife = Math.random() * 300 + 200;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.life++;
    if (this.life > this.maxLife || this.x < 0 || this.x > W || this.y < 0 || this.y > H) {
      this.reset();
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color + this.alpha + ')';
    ctx.fill();
  }
}

// Create 120 particles
for (let i = 0; i < 120; i++) particles.push(new Particle());

function drawConnections() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx   = particles[i].x - particles[j].x;
      const dy   = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(76,201,240,${0.06 * (1 - dist / 100)})`;
        ctx.lineWidth   = 0.5;
        ctx.stroke();
      }
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, W, H);
  drawConnections();
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animate);
}
animate();

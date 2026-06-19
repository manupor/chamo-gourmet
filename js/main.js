/* ===== Chamo Gourmet CR — interactions ===== */

// ---- Navbar scroll state ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ---- Mobile menu ----
const toggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
toggle.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
mobileMenu.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => mobileMenu.classList.add('hidden')));

// ---- Reveal on scroll ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('visible'); observer.unobserve(en.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ---- Year ----
document.getElementById('year').textContent = new Date().getFullYear();

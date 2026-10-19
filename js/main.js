// Sticky header shadow on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
});

// Close menu on link click
mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('open');
    });
});

// Form submit
document.getElementById('callbackForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Спасибо! Мы вам перезвоним в ближайшее время.');
    e.target.reset();
});
// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scroll for CTA button
const ctaButton = document.getElementById('cta-button');
ctaButton.addEventListener('click', () => {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
});
// Animate sections on scroll and add a little bounce to images
function animateOnScroll() {
  const animatedEls = document.querySelectorAll('.animate-fade-in, .animate-slide-up');
  animatedEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 40) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('DOMContentLoaded', animateOnScroll);

// Add bounce effect to language images on hover
const imgs = document.querySelectorAll('.koodikielikuvat');
imgs.forEach(img => {
  img.addEventListener('mouseenter', () => {
    img.style.transition = 'transform 0.3s cubic-bezier(.68,-0.55,.27,1.55)';
    img.style.transform += ' scale(1.25)';
  });
  img.addEventListener('mouseleave', () => {
    img.style.transform = img.style.transform.replace(' scale(1.25)', '');
  });
});

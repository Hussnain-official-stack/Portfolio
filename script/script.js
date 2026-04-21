alert('Hello! This is a my Portfolio Website. Feel free to explore and check out the projects showcased here. Enjoy browsing!');
const navbar    = document.getElementById('navbar');
const scrollBtn = document.getElementById('scrollTop');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
    // for scrolling and others functionalities
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  scrollBtn.classList.toggle('show', window.scrollY > 400);
});

hamburger.addEventListener('click', () => navLinks.classList.toggle('mobile-open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('mobile-open')));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const barObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.skill-card').forEach(card => barObserver.observe(card));

scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
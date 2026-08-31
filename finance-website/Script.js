const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const scrollTopButton = document.querySelector('.scroll-top');

const closeMobileMenu = () => {
  if (!navLinks || !menuToggle) return;

  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
};

menuToggle?.addEventListener('click', () => {
  if (!navLinks || !menuToggle) return;

  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMobileMenu);
});

window.addEventListener(
  'scroll',
  () => {
    scrollTopButton?.classList.toggle('is-visible', window.scrollY > 420);
  },
  { passive: true }
);

scrollTopButton?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

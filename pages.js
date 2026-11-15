// Mobile navigation for the portfolio and service pages.
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');
if (menuToggle && nav) {
  function closeMenu() {
    nav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Deschide meniul');
  }
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Închide meniul' : 'Deschide meniul');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
  document.addEventListener('click', event => {
    if (nav.classList.contains('is-open') && !event.target.closest('.site-header')) closeMenu();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeMenu();
  });
}

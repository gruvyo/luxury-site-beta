// Sticky header: frosted glass and tighter padding once the page scrolls.
const header = document.querySelector('.site-header');

function onScroll() {
  header.classList.toggle('scrolled', window.scrollY > 16);
}

onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Section fade-ins: reveal each block the first time it enters the viewport.
const reveals = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );

  reveals.forEach((el) => observer.observe(el));
} else {
  // No observer support: just show everything.
  reveals.forEach((el) => el.classList.add('is-visible'));
}

(() => {
  const links = [...document.querySelectorAll('.profile-nav__links a')].filter(link => {
    const url = new URL(link.href);
    return url.pathname === window.location.pathname && url.hash;
  });
  const sections = links.map(link => document.getElementById(new URL(link.href).hash.slice(1)));
  const nav = document.querySelector('.profile-nav');
  let scheduled = false;
  function highlight() {
    const offset = nav.getBoundingClientRect().height + 40;
    let active = 0;
    sections.forEach((section, index) => {
      if (section && section.getBoundingClientRect().top <= offset) active = index;
    });
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
      active = sections.length - 1;
    }
    links.forEach((link, index) => {
      if (index === active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    scheduled = false;
  }
  function scheduleHighlight() {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(highlight);
    }
  }
  window.addEventListener('scroll', scheduleHighlight, { passive: true });
  window.addEventListener('resize', scheduleHighlight);
  highlight();

  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });
  document.querySelectorAll('.profile-item, .page__content > h2, .page__content > ul > li, .page__content > ol > li').forEach(element => {
    // Keep initial content and direct anchor destinations immediately readable.
    if (element.getBoundingClientRect().top < window.innerHeight) return;
    element.classList.add('scroll-reveal');
    observer.observe(element);
  });
})();

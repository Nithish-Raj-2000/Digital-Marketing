const ERROR_PAGE = './404.html';

function goTo404(source) {
  const url = source ? `${ERROR_PAGE}?from=${encodeURIComponent(source)}` : ERROR_PAGE;
  window.location.href = url;
}

function getClickElement(target) {
  if (target instanceof Element) return target;
  if (target && target.parentElement instanceof Element) return target.parentElement;
  return null;
}

function isSiteNavigationClick(el) {
  return Boolean(
    el.closest(
      '#site-header, .site-header, .navbar, .nav-menu, .nav-links, .nav-actions, .menu-btn, .menu-close-btn, .btn-nav, .mobile-go-home-btn, .footer-col--links a, .footer-logo'
    )
  );
}

function initFooterSocialRedirect() {
  document.addEventListener('click', (e) => {
    const clicked = getClickElement(e.target);
    const link = clicked?.closest('.social-icons a');
    if (!link) return;
    e.preventDefault();
    const label = link.getAttribute('aria-label') || 'social';
    goTo404(label.toLowerCase());
  });
}

function isExcludedButton(el) {
  if (!el) return true;
  if (isSiteNavigationClick(el)) return true;
  if (el.classList.contains('faq-question')) return true;
  if (el.classList.contains('toggle-password')) return true;
  if (el.closest('form')) return true;
  if (el.dataset.noRedirect === 'true') return true;
  if (el.closest('form.auth-form')) return true;
  return false;
}

function initButtonRedirect() {
  document.addEventListener('click', (e) => {
    const clicked = getClickElement(e.target);
    if (!clicked) return;
    if (isSiteNavigationClick(clicked)) return;

    const target = clicked.closest(
      'button:not(.menu-btn):not(.toggle-password):not(.faq-question), a.btn:not(.btn-nav), a.primary-btn, a.secondary-btn, a.cta-btn, .auth-submit, .auth-social-btn, .price-card button'
    );

    if (!target || isExcludedButton(target)) return;

    e.preventDefault();
    goTo404('button');
  });
}

function initScrollReveal() {
  const selectors = [
    'section .section-title',
    '.service-card',
    '.team-card',
    '.feature-card',
    '.price-card',
    '.portfolio-card',
    '.about',
    '.stats-section',
    '.contact-section',
    '.info-card',
    '.office-card',
    '.why-card',
    '.cta-banner',
    '.auth-card',
  ];

  document.querySelectorAll(selectors.join(',')).forEach((el, i) => {
    if (el.classList.contains('reveal')) return;
    el.classList.add('reveal');
    if (i % 3 === 1) el.classList.add('reveal-delay-1');
    if (i % 3 === 2) el.classList.add('reveal-delay-2');
  });

  document.querySelectorAll('.service-grid, .team-grid, .portfolio-grid, .pricing-grid').forEach((grid) => {
    grid.classList.add('reveal-stagger', 'reveal');
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

function initAutoSliders() {
  document.querySelectorAll('.portfolio-grid, .service-grid').forEach((track) => {
    track.classList.add('slider-track');

    if (window.matchMedia('(min-width: 769px)').matches) return;

    let index = 0;
    const items = track.children;
    if (items.length < 2) return;

    setInterval(() => {
      index = (index + 1) % items.length;
      const item = items[index];
      track.scrollTo({ left: item.offsetLeft - track.offsetLeft, behavior: 'smooth' });
    }, 4500);
  });
}

function init() {
  initButtonRedirect();
  initFooterSocialRedirect();
  initScrollReveal();
  initAutoSliders();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

document.addEventListener('layout-ready', () => {
  initScrollReveal();
  initAutoSliders();
});

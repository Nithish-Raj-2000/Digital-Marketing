const EMBEDDED_HEADER = `<header class="site-header">
  <div class="navbar">
    <div class="logo">
      <a href="./index.html" class="logo-home-link">
        <img src="./images/logo.webp" alt="Stackly Digital Marketing">
      </a>
    </div>
    <nav class="desktop-nav" id="desktopNav" aria-label="Main navigation">
      <ul class="nav-links" id="navLinks">
        <li><a href="./index.html" data-nav-page="index.html">Home</a></li>
        <li><a href="./service.html" data-nav-page="service.html">Services</a></li>
        <li><a href="./about.html" data-nav-page="about.html">About</a></li>
        <li><a href="./contact.html" data-nav-page="contact.html">Contact</a></li>
      </ul>
      <div class="nav-actions" id="navActions">
        <a href="./login.html" class="btn-nav btn-nav--login" data-auth="login" data-nav-page="login.html">Login</a>
        <a href="./signup.html" class="btn-nav btn-nav--signup" data-auth="signup" data-nav-page="signup.html">Sign Up</a>
      </div>
    </nav>
    <button type="button" class="hamburger-btn" id="hamburgerBtn" aria-label="Open menu" aria-expanded="false" aria-controls="mobileDrawer">
      <span class="hamburger-btn__line" aria-hidden="true"></span>
      <span class="hamburger-btn__line" aria-hidden="true"></span>
      <span class="hamburger-btn__line" aria-hidden="true"></span>
    </button>
  </div>
</header>
<aside id="mobileDrawer" class="mobile-drawer" aria-hidden="true" aria-label="Mobile navigation">
  <div class="mobile-drawer__backdrop" id="mobileDrawerBackdrop" tabindex="-1"></div>
  <div class="mobile-drawer__panel" role="dialog" aria-modal="true" aria-labelledby="mobileDrawerTitle">
    <div class="mobile-drawer__header">
      <p id="mobileDrawerTitle" class="mobile-drawer__title">Menu</p>
      <button type="button" class="mobile-drawer__close" id="mobileDrawerClose" aria-label="Close menu"><span aria-hidden="true">&times;</span></button>
    </div>
    <nav class="mobile-drawer__nav">
      <a href="./index.html" class="mobile-drawer__link" data-nav-page="index.html">Home</a>
      <a href="./service.html" class="mobile-drawer__link" data-nav-page="service.html">Services</a>
      <a href="./about.html" class="mobile-drawer__link" data-nav-page="about.html">About</a>
      <a href="./contact.html" class="mobile-drawer__link" data-nav-page="contact.html">Contact</a>
    </nav>
    <div class="mobile-drawer__actions">
      <a href="./login.html" class="mobile-drawer__btn mobile-drawer__btn--outline" data-auth="login" data-nav-page="login.html">Login</a>
      <a href="./signup.html" class="mobile-drawer__btn mobile-drawer__btn--solid" data-auth="signup" data-nav-page="signup.html">Sign Up</a>
    </div>
    <button type="button" class="mobile-drawer__back" id="mobileGoBackBtn">Go Back</button>
  </div>
</aside>`;

const EMBEDDED_FOOTER = `<footer class="site-footer">
  <div class="footer-container">
    <div class="footer-brand">
      <a href="./index.html" class="footer-logo logo-home-link" aria-label="Stackly — Home">
        <img src="./images/logo.webp" alt="Stackly Digital Marketing">
      </a>
      <p>Creative digital marketing solutions.</p>
    </div>
    <div class="footer-col footer-col--links">
      <h3 class="footer-heading">Quick Links</h3>
      <ul>
        <li><a href="./index.html">Home</a></li>
        <li><a href="./service.html">Services</a></li>
        <li><a href="./about.html">About</a></li>
        <li><a href="./contact.html">Contact</a></li>
      </ul>
    </div>
    <div class="footer-col footer-col--contact">
      <h3 class="footer-heading">Contact</h3>
      <p>Email: info@stackly.com</p>
      <p>Phone: +91 9876543210</p>
      <h3 class="footer-heading footer-heading--social">Follow Us</h3>
      <div class="social-icons">
        <a href="./404.html?from=facebook" aria-label="Facebook"><svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.3V12h2.3V9.8c0-2.3 1.4-3.6 3.5-3.6 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.5.7-1.5 1.4V12h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12z"/></svg></a>
        <a href="./404.html?from=instagram" aria-label="Instagram"><svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 4.6A5.4 5.4 0 1 0 17.4 12 5.4 5.4 0 0 0 12 6.6zm0 2.3a3.1 3.1 0 1 1-3.1 3.1 3.1 3.1 0 0 1 3.1-3.1zm5.2-3.4a1.2 1.2 0 1 1-1.2 1.2 1.2 1.2 0 0 1 1.2-1.2z"/></svg></a>
        <a href="./404.html?from=twitter" aria-label="Twitter"><svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M18.9 3H22l-6.8 7.8L22.7 21h-6.1l-4.8-6.3-5.5 6.3H3.1l7.3-8.4L2.5 3h6.2l4.3 5.7L18.9 3zm-1.1 16h1.7L7.1 4.9H5.3L17.8 19z"/></svg></a>
        <a href="./404.html?from=whatsapp" aria-label="WhatsApp"><svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.7 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2zm5.2 14.2c-.2.6-1.2 1.1-1.7 1.1-.4 0-1 .2-3.4-1.2-2.8-1.6-4.6-4.5-4.7-4.7-.2-.3-1.6-2.1-1.6-4.1 0-2 1-3 1.4-3.4.3-.4.7-.5 1-.5h.7c.2 0 .5-.1.8.6.3.7 1 2.4 1.1 2.6.1.2.1.4 0 .6-.1.2-.2.3-.4.5-.2.2-.3.3-.5.5-.2.2-.3.4-.1.8.2.4 1 1.5 2.1 2.5 1.5 1.3 2.7 1.7 3.1 1.9.4.2.6.2.8-.1.2-.3.9-1.1 1.1-1.5.2-.4.5-.3.8-.2.3.1 2 1 2.3 1.1.3.2.5.3.6.5.1.3.1.7-.1 1.3z"/></svg></a>
      </div>
    </div>
  </div>
  <div class="copyright">© 2026 Stackly. All Rights Reserved.</div>
</footer>`;

const MOBILE_NAV_BREAKPOINT = 1024;

function getCurrentPage() {
  const file = window.location.pathname.split('/').pop() || 'index.html';
  return file.split('?')[0].toLowerCase();
}

function canFetchComponents() {
  return window.location.protocol === 'http:' || window.location.protocol === 'https:';
}

function getSiteBasePath() {
  const path = window.location.pathname;
  if (!path || path === '/') return '/';
  if (path.endsWith('/')) return path;
  const base = path.replace(/\/[^/]*$/, '/');
  return base || '/';
}

function pageUrl(filename) {
  const page = filename.replace(/^\.?\//, '');
  if (window.location.protocol === 'file:') {
    return './' + page;
  }
  return getSiteBasePath() + page;
}

function applyNavPageUrls() {
  document.querySelectorAll('[data-nav-page]').forEach((el) => {
    const page = el.getAttribute('data-nav-page');
    if (page) el.setAttribute('href', pageUrl(page));
  });

  document.querySelectorAll('.logo-home-link[href]').forEach((el) => {
    el.setAttribute('href', pageUrl('index.html'));
  });
}

function isMobileNavView() {
  return window.matchMedia(`(max-width: ${MOBILE_NAV_BREAKPOINT}px)`).matches;
}

/* ——— Mobile drawer (open / close only — links use native href) ——— */
let mobileDrawerReady = false;

function openMobileDrawer() {
  const drawer = document.getElementById('mobileDrawer');
  const btn = document.getElementById('hamburgerBtn');
  if (!drawer) return;

  drawer.classList.add('is-open');
  drawer.setAttribute('aria-hidden', 'false');
  document.body.classList.add('mobile-nav-open');
  if (btn) btn.setAttribute('aria-expanded', 'true');
}

function closeMobileDrawer() {
  const drawer = document.getElementById('mobileDrawer');
  const btn = document.getElementById('hamburgerBtn');
  if (!drawer) return;

  drawer.classList.remove('is-open');
  drawer.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('mobile-nav-open');
  if (btn) btn.setAttribute('aria-expanded', 'false');
}

function mountMobileDrawerToBody() {
  const drawer = document.getElementById('mobileDrawer');
  if (!drawer || drawer.parentElement === document.body) return;
  document.body.appendChild(drawer);
}

function initMobileDrawer() {
  mountMobileDrawerToBody();

  const drawer = document.getElementById('mobileDrawer');
  const openBtn = document.getElementById('hamburgerBtn');
  const closeBtn = document.getElementById('mobileDrawerClose');
  const backdrop = document.getElementById('mobileDrawerBackdrop');
  const goBackBtn = document.getElementById('mobileGoBackBtn');

  if (!drawer || !openBtn) return;

  if (!mobileDrawerReady) {
    mobileDrawerReady = true;

    openBtn.addEventListener('click', () => {
      if (drawer.classList.contains('is-open')) {
        closeMobileDrawer();
      } else {
        openMobileDrawer();
      }
    });

    closeBtn?.addEventListener('click', closeMobileDrawer);
    backdrop?.addEventListener('click', closeMobileDrawer);

    goBackBtn?.addEventListener('click', () => {
      closeMobileDrawer();
      if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.href = pageUrl('index.html');
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && drawer.classList.contains('is-open')) {
        closeMobileDrawer();
      }
    });

    window.addEventListener('resize', () => {
      if (!isMobileNavView()) closeMobileDrawer();
    });

    drawer.querySelectorAll('.mobile-drawer__link, .mobile-drawer__btn').forEach((link) => {
      link.addEventListener('click', () => closeMobileDrawer());
    });
  }
}

function setActiveNavLink() {
  const current = getCurrentPage();

  document.querySelectorAll('.nav-links a, .mobile-drawer__link').forEach((link) => {
    const page = (link.getAttribute('data-nav-page') || link.getAttribute('href') || '')
      .split('/')
      .pop()
      .toLowerCase();
    link.classList.toggle('active', page === current);
  });
}

function updateAuthNavButtons() {
  const current = getCurrentPage();
  const loginBtns = document.querySelectorAll('[data-auth="login"]');
  const signupBtns = document.querySelectorAll('[data-auth="signup"]');

  document.body.classList.remove('auth-login-page', 'auth-signup-page');

  loginBtns.forEach((el) => el.classList.remove('nav-auth-hidden'));
  signupBtns.forEach((el) => el.classList.remove('nav-auth-hidden'));

  if (current === 'login.html') {
    document.body.classList.add('auth-login-page');
    loginBtns.forEach((el) => el.classList.add('nav-auth-hidden'));
  } else if (current === 'signup.html') {
    document.body.classList.add('auth-signup-page');
    signupBtns.forEach((el) => el.classList.add('nav-auth-hidden'));
  }
}

function applyLayout(html, target) {
  if (!target || !html) return;
  target.innerHTML = html;
}

async function fetchComponent(path) {
  if (!canFetchComponents()) return null;
  try {
    const res = await fetch(path);
    if (res.ok) return await res.text();
  } catch (_) {
    /* fallback */
  }
  return null;
}

function initHeader() {
  applyNavPageUrls();
  initMobileDrawer();
  setActiveNavLink();
  updateAuthNavButtons();
}

async function loadLayout() {
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');

  if (!headerEl && !footerEl) return;

  if (headerEl) {
    let headerHtml = EMBEDDED_HEADER;
    if (canFetchComponents()) {
      headerHtml = (await fetchComponent('./components/header.html')) || EMBEDDED_HEADER;
    }
    applyLayout(headerHtml, headerEl);
    initHeader();
  }

  if (footerEl) {
    let footerHtml = EMBEDDED_FOOTER;
    if (canFetchComponents()) {
      footerHtml = (await fetchComponent('./components/footer.html')) || EMBEDDED_FOOTER;
    }
    applyLayout(footerHtml, footerEl);
  }

  document.dispatchEvent(new Event('layout-ready'));
  loadSiteAssets();
}

document.addEventListener('layout-ready', initHeader);

function loadSiteAssets() {
  if (!document.querySelector('link[data-animations]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './components/animations.css';
    link.dataset.animations = 'true';
    document.head.appendChild(link);
  }

  if (!document.querySelector('script[data-site-effects]')) {
    const script = document.createElement('script');
    script.src = './components/site-effects.js';
    script.defer = true;
    script.dataset.siteEffects = 'true';
    document.body.appendChild(script);
  }
}

window.addEventListener('pageshow', () => {
  if (document.getElementById('site-header')?.innerHTML.trim()) {
    initHeader();
  }
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadLayout);
} else {
  loadLayout();
}

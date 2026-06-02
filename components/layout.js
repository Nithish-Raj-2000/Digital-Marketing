const EMBEDDED_HEADER = `<header class="site-header">
  <nav class="navbar">
    <div class="logo">
      <a href="./index.html" class="logo-home-link">
        <img src="./images/logo.webp" alt="Stackly Digital Marketing">
      </a>
    </div>
    <button class="menu-btn" id="menuBtn" type="button" aria-label="Toggle menu">☰</button>
    <div class="nav-menu" id="navMenu">
      <button class="menu-close-btn" id="menuCloseBtn" type="button" aria-label="Close menu">✕</button>
      <ul class="nav-links" id="navLinks">
        <li><a href="./index.html">Home</a></li>
        <li><a href="./service.html">Services</a></li>
        <li><a href="./about.html">About</a></li>
        <li><a href="./contact.html">Contact</a></li>
      </ul>
      <div class="nav-actions" id="navActions">
        <a href="./login.html" class="btn-nav btn-nav--login" data-auth="login">Login</a>
        <a href="./signup.html" class="btn-nav btn-nav--signup" data-auth="signup">Sign Up</a>
      </div>
      <a href="./index.html" class="mobile-go-home-btn">Go Home</a>
    </div>
  </nav>
</header>`;

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

function getCurrentPage() {
  const file = window.location.pathname.split('/').pop() || 'index.html';
  return file.split('?')[0].toLowerCase();
}

function getLayoutClickTarget(event) {
  const target = event.target;
  if (target instanceof Element) return target;
  if (target && target.parentElement instanceof Element) return target.parentElement;
  return null;
}

function closeMobileMenu() {
  const navMenu = document.getElementById('navMenu');
  const menuBtn = document.getElementById('menuBtn');
  if (navMenu) {
    navMenu.classList.remove('active');
  }
  if (menuBtn) {
    menuBtn.setAttribute('aria-expanded', 'false');
  }
  document.body.classList.remove('nav-open');
}

function navigateFromMenu(href) {
  closeMobileMenu();
  if (href) {
    window.location.assign(href);
  }
}

function bindMobileNavLinks() {
  const navMenu = document.getElementById('navMenu');
  if (!navMenu) return;

  navMenu.querySelectorAll('a[href]').forEach((link) => {
    if (link.dataset.navBound === 'true') return;
    link.dataset.navBound = 'true';

    link.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      navigateFromMenu(link.getAttribute('href'));
    });
  });
}

function initMobileMenu() {
  if (document.documentElement.dataset.navMenuBound === 'true') {
    bindMobileNavLinks();
    return;
  }
  document.documentElement.dataset.navMenuBound = 'true';

  document.addEventListener(
    'click',
    (event) => {
      const target = getLayoutClickTarget(event);
      const navMenu = document.getElementById('navMenu');
      if (!navMenu || !target) return;

      if (target.closest('#menuBtn, .menu-btn')) {
        event.preventDefault();
        const isOpen = navMenu.classList.toggle('active');
        document.body.classList.toggle('nav-open', isOpen);
        document.getElementById('menuBtn')?.setAttribute('aria-expanded', String(isOpen));
        return;
      }

      if (target.closest('#menuCloseBtn, .menu-close-btn')) {
        event.preventDefault();
        event.stopPropagation();
        closeMobileMenu();
        return;
      }

      if (target.closest('.nav-backdrop')) {
        closeMobileMenu();
        return;
      }

      const navLink = target.closest('.nav-links a, .nav-actions a, .mobile-go-home-btn');
      if (navLink && navMenu.contains(navLink)) {
        event.preventDefault();
        event.stopPropagation();
        navigateFromMenu(navLink.getAttribute('href'));
      }
    },
    true
  );

  bindMobileNavLinks();

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMobileMenu();
    }
  });
}

function setActiveNavLink() {
  const current = getCurrentPage();

  document.querySelectorAll('.nav-links a').forEach((link) => {
    const linkPage = (link.getAttribute('href') || '').split('/').pop().toLowerCase();
    link.classList.toggle('active', linkPage === current);
  });
}

function updateAuthNavButtons() {
  const current = getCurrentPage();
  const loginBtn = document.querySelector('.navbar [data-auth="login"]');
  const signupBtn = document.querySelector('.navbar [data-auth="signup"]');

  document.body.classList.remove('auth-login-page', 'auth-signup-page');

  if (!loginBtn || !signupBtn) {
    return;
  }

  loginBtn.classList.remove('nav-auth-hidden');
  signupBtn.classList.remove('nav-auth-hidden');

  if (current === 'login.html') {
    document.body.classList.add('auth-login-page');
    loginBtn.classList.add('nav-auth-hidden');
  } else if (current === 'signup.html') {
    document.body.classList.add('auth-signup-page');
    signupBtn.classList.add('nav-auth-hidden');
  }
}

function ensureNavBackdrop() {
  if (document.getElementById('navBackdrop')) {
    return;
  }

  const backdrop = document.createElement('div');
  backdrop.id = 'navBackdrop';
  backdrop.className = 'nav-backdrop';
  backdrop.setAttribute('aria-hidden', 'true');
  document.body.appendChild(backdrop);
}

function applyLayout(html, target) {
  if (target && html) {
    target.innerHTML = html;
  }
}

async function fetchComponent(path) {
  try {
    const res = await fetch(path);
    if (res.ok) {
      return await res.text();
    }
  } catch (_) {
    /* use embedded fallback */
  }
  return null;
}

function initHeader() {
  ensureNavBackdrop();
  initMobileMenu();
  bindMobileNavLinks();
  setActiveNavLink();
  updateAuthNavButtons();
}

async function loadLayout() {
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');

  if (!headerEl && !footerEl) {
    return;
  }

  if (headerEl) {
    applyLayout(EMBEDDED_HEADER, headerEl);
    initHeader();

    const fetchedHeader = await fetchComponent('./components/header.html');
    if (fetchedHeader) {
      applyLayout(fetchedHeader, headerEl);
      initHeader();
    }
  }

  if (footerEl) {
    const footerHtml = (await fetchComponent('./components/footer.html')) || EMBEDDED_FOOTER;
    applyLayout(footerHtml, footerEl);
  }

  document.dispatchEvent(new Event('layout-ready'));
  loadSiteAssets();
}

document.addEventListener('layout-ready', () => {
  initHeader();
  bindMobileNavLinks();
});

function ensureFontAwesome() {
  if (document.querySelector('link[data-fontawesome]')) return;

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
  link.crossOrigin = 'anonymous';
  link.referrerPolicy = 'no-referrer';
  link.dataset.fontawesome = 'true';
  document.head.appendChild(link);
}

function loadSiteAssets() {
  ensureFontAwesome();

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

/* Run again when page is shown from cache */
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

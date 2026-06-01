const LOADER_MIN_MS = 1500;
const HOME_PATH = './index.html';

function ensureLoaderStyles() {
  if (document.querySelector('link[data-site-loader]')) return;

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = './components/loading.css';
  link.setAttribute('data-site-loader', 'true');
  document.head.appendChild(link);
}

function createLoader() {
  if (document.getElementById('site-loader')) return;

  const loader = document.createElement('div');
  loader.id = 'site-loader';
  loader.className = 'site-loader';
  loader.setAttribute('role', 'status');
  loader.setAttribute('aria-live', 'polite');
  loader.setAttribute('aria-hidden', 'true');
  loader.innerHTML = `
    <div class="site-loader__content">
      <img
        class="site-loader__logo site-loader__reveal site-loader__reveal--1"
        src="./images/logo.webp"
        alt="Stackly"
      >
      <p class="site-loader__tagline site-loader__reveal site-loader__reveal--2">Digital Marketing</p>
      <div class="site-loader__spinner site-loader__reveal site-loader__reveal--3" aria-hidden="true"></div>
      <span class="visually-hidden">Loading home page</span>
    </div>
  `;

  document.body.appendChild(loader);
}

function showLoader() {
  const loader = document.getElementById('site-loader');
  if (!loader) return;

  loader.classList.remove('is-active');
  loader.setAttribute('aria-hidden', 'true');
  void loader.offsetWidth;
  loader.classList.add('is-active');
  loader.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function hideLoader() {
  const loader = document.getElementById('site-loader');
  if (!loader) return;

  loader.classList.remove('is-active');
  loader.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function isHomePage() {
  const page = window.location.pathname.split('/').pop();
  return !page || page === 'index.html';
}

function navigateHomeWithLoader(event) {
  event.preventDefault();

  const startedAt = Date.now();
  showLoader();

  const finish = () => {
    const elapsed = Date.now() - startedAt;
    const remaining = Math.max(0, LOADER_MIN_MS - elapsed);

    setTimeout(() => {
      if (isHomePage()) {
        hideLoader();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.location.href = HOME_PATH;
      }
    }, remaining);
  };

  finish();
}

function initLogoHomeNavigation() {
  document.querySelectorAll('.logo-home-link:not([data-home-loader])').forEach((link) => {
    link.setAttribute('data-home-loader', 'true');
    link.addEventListener('click', navigateHomeWithLoader);
  });
}

function initSiteLoader() {
  ensureLoaderStyles();
  createLoader();
  initLogoHomeNavigation();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSiteLoader);
} else {
  initSiteLoader();
}

document.addEventListener('layout-ready', initLogoHomeNavigation);

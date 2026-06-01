// FAQ ACCORDION (home page)
document.querySelectorAll('.faq-question').forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const isOpen = answer.style.display === 'block';

    document.querySelectorAll('.faq-answer').forEach((item) => {
      item.style.display = 'none';
    });

    answer.style.display = isOpen ? 'none' : 'block';
  });
});

// COUNTER ANIMATION (stats section)
document.querySelectorAll('.counter').forEach((counter) => {
  const target = +counter.getAttribute('data-target');
  const suffix = counter.getAttribute('data-suffix') || '';
  let count = 0;
  const step = Math.max(1, Math.ceil(target / 60));

  const tick = () => {
    count = Math.min(count + step, target);
    counter.textContent = `${count}${suffix}`;

    if (count < target) {
      setTimeout(tick, 30);
    }
  };

  tick();
});

// STATS COUNTER (about page)
document.querySelectorAll('.stats h3').forEach((stat) => {
  const target = +stat.innerText.replace('+', '');
  let count = 0;

  const interval = setInterval(() => {
    count += 1;
    stat.innerText = `${count}+`;

    if (count >= target) {
      clearInterval(interval);
      stat.innerText = `${target}+`;
    }
  }, 30);
});

// SMOOTH SCROLL FOR IN-PAGE ANCHORS
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// CONTACT FORM — redirect to 404 (demo)
const form = document.querySelector('form');

if (form && !form.classList.contains('auth-form')) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = './404.html?from=contact';
  });
}

// FADE-IN ANIMATION (contact page)
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
});

document.querySelectorAll('.info-card, .office-card, .why-card').forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(40px)';
  el.style.transition = '.6s ease';
  observer.observe(el);
});

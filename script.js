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

// CHOOSE PLAN BUTTONS -> 404 PAGE
document.querySelectorAll('.choose-plan-btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = './404.html?from=choose-plan';
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

// HOME CONTACT FORM VALIDATION
const homeContactForm = document.getElementById('homeContactForm');

function setFieldError(field, message) {
  const formField = field.closest('.form-field');
  const errorEl = formField?.querySelector('.error-message');
  field.classList.add('error');
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.classList.add('show');
  }
}

function clearFieldError(field) {
  const formField = field.closest('.form-field');
  const errorEl = formField?.querySelector('.error-message');
  field.classList.remove('error');
  if (errorEl) {
    errorEl.textContent = '';
    errorEl.classList.remove('show');
  }
}

function clearHomeValidation(fields) {
  fields.forEach((field) => clearFieldError(field));
}

function validateHomeField(field) {
  const value = field.value.trim();
  const id = field.id;
  clearFieldError(field);

  if (!value) {
    const label = id === 'homeName' ? 'name' : id === 'homeEmail' ? 'email' : 'message';
    setFieldError(field, `Please enter your ${label}.`);
    return false;
  }

  if (id === 'homeName') {
    if (value.length < 2) {
      setFieldError(field, 'Name must be at least 2 characters.');
      return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(value)) {
      setFieldError(field, 'Name can contain only letters and spaces.');
      return false;
    }
  }

  if (id === 'homeEmail' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    setFieldError(field, 'Please enter a valid email address.');
    return false;
  }

  if (id === 'homeMessage') {
    if (value.length < 10) {
      setFieldError(field, 'Message must be at least 10 characters.');
      return false;
    }
    if (value.length > 5000) {
      setFieldError(field, 'Message must be less than 5000 characters.');
      return false;
    }
  }

  return true;
}

if (homeContactForm) {
  const homeFields = homeContactForm.querySelectorAll('#homeName, #homeEmail, #homeMessage');

  homeFields.forEach((field) => {
    field.addEventListener('input', () => clearFieldError(field));
    field.addEventListener('blur', () => validateHomeField(field));
  });

  homeContactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    let firstInvalid = null;
    clearHomeValidation(homeFields);

    homeFields.forEach((field) => {
      const ok = validateHomeField(field);
      if (!ok && !firstInvalid) firstInvalid = field;
      isValid = isValid && ok;
    });

    if (!isValid) {
      firstInvalid?.focus();
      return;
    }

    homeContactForm.reset();
    clearHomeValidation(homeFields);
    setTimeout(() => {
      window.location.href = './404.html?from=home-contact';
    }, 150);
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

const ERROR_PAGE = './404.html';

function goToErrorPage(source) {
  const url = source ? `${ERROR_PAGE}?from=${encodeURIComponent(source)}` : ERROR_PAGE;
  window.location.href = url;
}

function ensureToastContainer() {
  let container = document.querySelector('.auth-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'auth-toast-container';
    container.setAttribute('aria-live', 'polite');
    container.setAttribute('aria-atomic', 'true');
    document.body.appendChild(container);
  }
  return container;
}

const TOAST_VISIBLE_MS = 4000;

function showAuthToast(message, { type = 'info', icon = 'fa-circle-info', duration = TOAST_VISIBLE_MS } = {}) {
  const container = ensureToastContainer();
  const toast = document.createElement('div');
  toast.className = `auth-toast auth-toast--${type}`;
  toast.setAttribute('role', 'status');

  const iconEl = document.createElement('i');
  iconEl.className = `fas ${icon} auth-toast__icon`;
  iconEl.setAttribute('aria-hidden', 'true');

  const text = document.createElement('p');
  text.className = 'auth-toast__text';
  text.textContent = message;

  toast.append(iconEl, text);
  container.appendChild(toast);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => toast.classList.add('auth-toast--visible'));
  });

  return new Promise((resolve) => {
    setTimeout(() => {
      toast.classList.remove('auth-toast--visible');
      setTimeout(() => {
        toast.remove();
        resolve();
      }, 350);
    }, duration);
  });
}

function clearAuthValidation(form) {
  form.querySelectorAll('.auth-field--error, .auth-terms--error').forEach((el) => {
    el.classList.remove('auth-field--error', 'auth-terms--error');
  });
  form.querySelectorAll('.auth-error-message').forEach((el) => {
    el.textContent = '';
  });
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function setFieldError(inputOrSelect, message) {
  if (!inputOrSelect) return;
  const field = inputOrSelect.closest('.auth-field');
  if (field) field.classList.add('auth-field--error');
  const errorMessage = field?.querySelector('.auth-error-message');
  if (errorMessage) errorMessage.textContent = message;
}

function setTermsError(form, message) {
  const terms = form.querySelector('.auth-terms, .auth-remember');
  if (terms) terms.classList.add('auth-terms--error');
  const errorMessage = form.querySelector('.auth-terms-error-message');
  if (errorMessage) errorMessage.textContent = message;
}

function markFieldError(inputOrSelect) {
  setFieldError(inputOrSelect, 'Please correct this field.');
}

function markTermsError(form) {
  setTermsError(form, 'Please agree to the terms to continue.');
}

function markRememberError(form) {
  setTermsError(form, 'Please check the Remember me box to continue.');
}

async function warnEmpty(form, message, icon, focusEl, markEl) {
  if (markEl) {
    if (markEl.classList?.contains('auth-terms') || markEl.classList?.contains('auth-remember')) {
      setTermsError(form, message);
    } else {
      setFieldError(markEl, message);
    }
  }
  await showAuthToast(message, { type: 'warning', icon });
  if (focusEl && typeof focusEl.focus === 'function') {
    focusEl.focus();
  }
  return false;
}

async function validateSignupForm(form) {
  clearAuthValidation(form);

  const nameInput = form.querySelector('#signupName');
  const roleSelect = form.querySelector('#signupRole');
  const emailInput = form.querySelector('#signupEmail');
  const passwordInput = form.querySelector('#signupPassword');
  const confirmInput = form.querySelector('#confirmPassword');
  const termsInput = form.querySelector('#terms');

  const name = nameInput?.value.trim() || '';
  const role = roleSelect?.value || '';
  const email = emailInput?.value.trim() || '';
  const password = passwordInput?.value || '';
  const confirm = confirmInput?.value || '';
  const termsChecked = termsInput?.checked;

  if (!name) {
    return warnEmpty(
      form,
      'Full name is required. Please fill in your name to create an account.',
      'fa-user',
      nameInput,
      nameInput
    );
  }

  if (!/^[a-zA-Z\s]{2,}$/.test(name)) {
    return warnEmpty(
      form,
      'Please enter a valid name using letters and spaces only.',
      'fa-user',
      nameInput,
      nameInput
    );
  }

  if (!role) {
    return warnEmpty(
      form,
      'Please select your role (Admin or User) from the dropdown.',
      'fa-user-shield',
      roleSelect,
      roleSelect
    );
  }

  if (!email) {
    return warnEmpty(
      form,
      'Email address is required. Please enter your email.',
      'fa-envelope',
      emailInput,
      emailInput
    );
  }

  if (!validateEmail(email)) {
    return warnEmpty(
      form,
      'Please enter a valid email address in the format you@company.com.',
      'fa-envelope',
      emailInput,
      emailInput
    );
  }

  if (!password) {
    return warnEmpty(
      form,
      'Password is required. Please create a password.',
      'fa-lock',
      passwordInput,
      passwordInput
    );
  }

  if (password.length < 8) {
    return warnEmpty(
      form,
      'Your password must be at least 8 characters long.',
      'fa-lock',
      passwordInput,
      passwordInput
    );
  }

  if (!confirm) {
    return warnEmpty(
      form,
      'Please confirm your password by filling in the confirm password field.',
      'fa-lock',
      confirmInput,
      confirmInput
    );
  }

  if (password !== confirm) {
    setFieldError(passwordInput, 'Passwords do not match.');
    setFieldError(confirmInput, 'Passwords do not match.');
    await showAuthToast('Passwords do not match. Please re-enter both password fields.', {
      type: 'error',
      icon: 'fa-lock',
    });
    confirmInput?.focus();
    return false;
  }

  if (!termsChecked) {
    setTermsError(form, 'You must agree to the Terms of Service and Privacy Policy to continue.');
    await showAuthToast(
      'You must agree to continue. Please check the box to accept our Terms of Service and Privacy Policy.',
      { type: 'warning', icon: 'fa-file-contract' }
    );
    termsInput?.focus();
    return false;
  }

  return true;
}

async function validateLoginForm(form) {
  clearAuthValidation(form);

  const emailInput = form.querySelector('#loginEmail');
  const roleSelect = form.querySelector('#loginRole');
  const passwordInput = form.querySelector('#loginPassword');
  const rememberInput = form.querySelector('#rememberMe');

  const email = emailInput?.value.trim() || '';
  const role = roleSelect?.value || '';
  const password = passwordInput?.value || '';
  const rememberChecked = rememberInput?.checked;

  if (!email) {
    return warnEmpty(
      form,
      'Email address is required. Please enter your email to sign in.',
      'fa-envelope',
      emailInput,
      emailInput
    );
  }

  if (!validateEmail(email)) {
    return warnEmpty(
      form,
      'Please enter a valid email address in the format you@company.com.',
      'fa-envelope',
      emailInput,
      emailInput
    );
  }

  if (!role) {
    return warnEmpty(
      form,
      'Please select your role (Admin or User) from the dropdown.',
      'fa-user-shield',
      roleSelect,
      roleSelect
    );
  }

  if (!password) {
    return warnEmpty(
      form,
      'Password is required. Please enter your password to sign in.',
      'fa-lock',
      passwordInput,
      passwordInput
    );
  }

  if (password.length < 8) {
    return warnEmpty(
      form,
      'Password must be at least 8 characters long.',
      'fa-lock',
      passwordInput,
      passwordInput
    );
  }

  if (!rememberChecked) {
    setTermsError(form, 'Please check the "Remember me" checkbox to continue.');
    await showAuthToast(
      'Please agree to stay signed in by checking the "Remember me" checkbox.',
      { type: 'warning', icon: 'fa-square-check' }
    );
    rememberInput?.focus();
    return false;
  }

  return true;
}

document.querySelectorAll('.toggle-password').forEach((btn) => {
  btn.addEventListener('click', () => {
    const input = btn.closest('.auth-input-wrap')?.querySelector('input');
    if (!input) return;

    const isPassword = input.type === 'password';
    const icon = btn.querySelector('i');
    input.type = isPassword ? 'text' : 'password';
    btn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
    if (icon) {
      icon.classList.toggle('fa-eye', !isPassword);
      icon.classList.toggle('fa-eye-slash', isPassword);
    }
  });
});

document.querySelectorAll('.auth-form').forEach((form) => {
  form.querySelectorAll('input, select').forEach((el) => {
    el.addEventListener('input', () => {
      el.closest('.auth-field')?.classList.remove('auth-field--error');
    });
    el.addEventListener('change', () => {
      el.closest('.auth-field')?.classList.remove('auth-field--error');
      if (el.id === 'terms' || el.id === 'rememberMe') {
        el.closest('.auth-terms, .auth-remember')?.classList.remove('auth-terms--error');
      }
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const isSignup = form.id === 'signupForm';

    if (isSignup) {
      const valid = await validateSignupForm(form);
      if (!valid) return;

      await showAuthToast(
        'Account created successfully! Redirecting to login...',
        { type: 'success', icon: 'fa-circle-check' }
      );
      setTimeout(() => {
        window.location.href = './login.html';
      }, 2000);
      return;
    }

    const valid = await validateLoginForm(form);
    if (!valid) return;

    await showAuthToast(
      'Thank you — you are signed in with Remember me enabled on this device.',
      { type: 'success', icon: 'fa-circle-check' }
    );
    goToErrorPage('login');
  });
});

document.querySelectorAll('.auth-social-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    goToErrorPage('social');
  });
});

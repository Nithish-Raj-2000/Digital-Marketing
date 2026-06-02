// Contact Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Clear all previous errors
            clearAllErrors();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validate all fields
            let isValid = true;
            
            // Name validation
            if (!name) {
                showError('name', 'Please enter your name');
                isValid = false;
            } else if (name.length < 2) {
                showError('name', 'Name must be at least 2 characters');
                isValid = false;
            } else if (!/^[a-zA-Z\s]+$/.test(name)) {
                showError('name', 'Name can only contain letters and spaces');
                isValid = false;
            }
            
            // Email validation
            if (!email) {
                showError('email', 'Please enter your email');
                isValid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                showError('email', 'Please enter a valid email address');
                isValid = false;
            }
            
            // Phone validation
            if (!phone) {
                showError('phone', 'Please enter your phone number');
                isValid = false;
            } else if (!/^[0-9]{10,}$/.test(phone.replace(/[\s\-\(\)]/g, ''))) {
                showError('phone', 'Please enter a valid phone number (at least 10 digits)');
                isValid = false;
            }
            
            // Subject validation
            if (!subject) {
                showError('subject', 'Please enter a subject');
                isValid = false;
            } else if (subject.length < 3) {
                showError('subject', 'Subject must be at least 3 characters');
                isValid = false;
            } else if (subject.length > 100) {
                showError('subject', 'Subject must not exceed 100 characters');
                isValid = false;
            }
            
            // Message validation
            if (!message) {
                showError('message', 'Please enter your message');
                isValid = false;
            } else if (message.length < 10) {
                showError('message', 'Message must be at least 10 characters');
                isValid = false;
            } else if (message.length > 5000) {
                showError('message', 'Message must not exceed 5000 characters');
                isValid = false;
            }
            
            // If all validations pass
            if (isValid) {
                showSuccessMessage();
                contactForm.reset();
                clearAllInputStyles();
            }
        });
        
        // Add real-time validation for inputs
        document.getElementById('name').addEventListener('blur', function() {
            validateField('name');
        });
        
        document.getElementById('email').addEventListener('blur', function() {
            validateField('email');
        });
        
        document.getElementById('phone').addEventListener('blur', function() {
            validateField('phone');
        });
        
        document.getElementById('subject').addEventListener('blur', function() {
            validateField('subject');
        });
        
        document.getElementById('message').addEventListener('blur', function() {
            validateField('message');
        });
    }
});

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(fieldId + 'Error');
    
    if (field && errorElement) {
        field.classList.add('error');
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(fieldId + 'Error');
    
    if (field && errorElement) {
        field.classList.remove('error');
        errorElement.textContent = '';
        errorElement.classList.remove('show');
    }
}

function clearAllErrors() {
    ['name', 'email', 'phone', 'subject', 'message'].forEach(fieldId => {
        clearError(fieldId);
    });
}

function clearAllInputStyles() {
    ['name', 'email', 'phone', 'subject', 'message'].forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.classList.remove('error');
        }
    });
}

function validateField(fieldId) {
    const field = document.getElementById(fieldId);
    const value = field.value.trim();
    
    clearError(fieldId);
    
    switch(fieldId) {
        case 'name':
            if (!value) {
                showError('name', 'Please enter your name');
            } else if (value.length < 2) {
                showError('name', 'Name must be at least 2 characters');
            } else if (!/^[a-zA-Z\s]+$/.test(value)) {
                showError('name', 'Name can only contain letters and spaces');
            }
            break;
            
        case 'email':
            if (!value) {
                showError('email', 'Please enter your email');
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                showError('email', 'Please enter a valid email address');
            }
            break;
            
        case 'phone':
            if (!value) {
                showError('phone', 'Please enter your phone number');
            } else if (!/^[0-9]{10,}$/.test(value.replace(/[\s\-\(\)]/g, ''))) {
                showError('phone', 'Please enter a valid phone number (at least 10 digits)');
            }
            break;
            
        case 'subject':
            if (!value) {
                showError('subject', 'Please enter a subject');
            } else if (value.length < 3) {
                showError('subject', 'Subject must be at least 3 characters');
            } else if (value.length > 100) {
                showError('subject', 'Subject must not exceed 100 characters');
            }
            break;
            
        case 'message':
            if (!value) {
                showError('message', 'Please enter your message');
            } else if (value.length < 10) {
                showError('message', 'Message must be at least 10 characters');
            } else if (value.length > 5000) {
                showError('message', 'Message must not exceed 5000 characters');
            }
            break;
    }
}

function showSuccessMessage() {
    showAuthToast('Message sent successfully! We will contact you soon.', {
        type: 'success',
        icon: 'fa-check-circle'
    });
}

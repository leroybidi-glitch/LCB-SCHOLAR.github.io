/* ===========================
   LCB-SCHOLAR Website JavaScript
   Language Switcher (FR/EN) & Animations
   =========================== */

// Language Management - Bilingual Support (FR/EN only)
let currentLanguage = 'fr';
const availableLanguages = ['fr', 'en'];

// DOM Elements
const langToggleBtn = document.getElementById('langToggle');
const currentLangSpan = document.getElementById('currentLang');
const header = document.getElementById('header');
const mobileToggle = document.getElementById('mobileToggle');
const nav = document.getElementById('nav');
const scrollToTopBtn = document.getElementById('scrollToTop');
const contactForm = document.getElementById('contactForm');

// ===========================
// Language Switcher (2 Languages: FR/EN)
// ===========================

function switchLanguage() {
    // Cycle through languages: FR → EN → FR
    const currentIndex = availableLanguages.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % availableLanguages.length;
    currentLanguage = availableLanguages[nextIndex];
    
    updateLanguage();
}

function updateLanguage() {
    // Update all elements with language attributes
    const elements = document.querySelectorAll('[data-fr][data-en]');
    
    elements.forEach(element => {
        const frText = element.getAttribute('data-fr');
        const enText = element.getAttribute('data-en');
        
        if (currentLanguage === 'fr') {
            element.textContent = frText;
        } else if (currentLanguage === 'en') {
            element.textContent = enText;
        }
    });

    // Update language toggle button
    currentLangSpan.textContent = currentLanguage.toUpperCase();
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
    
    // Always LTR (removed RTL support)
    document.documentElement.dir = 'ltr';
    document.body.classList.remove('rtl');

    // Update select options
    updateSelectOptions();
    
    // Save language preference to localStorage
    localStorage.setItem('lcb-scholar-language', currentLanguage);
    
    // Update language indicator
    updateLanguageIndicator();
}

function updateLanguageIndicator() {
    const langNames = {
        'fr': 'Français',
        'en': 'English'
    };
    
    // You can add a tooltip or indicator if needed
    langToggleBtn.title = langNames[currentLanguage];
}

function updateSelectOptions() {
    const programSelect = document.getElementById('program');
    
    if (!programSelect) return;
    
    if (currentLanguage === 'fr') {
        programSelect.innerHTML = `
            <option value="">Sélectionnez un programme</option>
            <option value="licence">Licence</option>
            <option value="master">Master</option>
            <option value="doctorat">Doctorat</option>
            <option value="langue">Année de langue</option>
        `;
    } else if (currentLanguage === 'en') {
        programSelect.innerHTML = `
            <option value="">Select a program</option>
            <option value="bachelor">Bachelor</option>
            <option value="master">Master</option>
            <option value="phd">PhD</option>
            <option value="language">Language Year</option>
        `;
    }
}

// Event listener for language toggle
langToggleBtn.addEventListener('click', switchLanguage);

// Load saved language preference
const savedLanguage = localStorage.getItem('lcb-scholar-language');
if (savedLanguage && availableLanguages.includes(savedLanguage)) {
    currentLanguage = savedLanguage;
    updateLanguage();
}

// ===========================
// Mobile Navigation Toggle
// ===========================

mobileToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    
    // Animate hamburger menu
    const spans = mobileToggle.querySelectorAll('span');
    if (nav.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        const spans = mobileToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ===========================
// Sticky Header on Scroll
// ===========================

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
        if (scrollToTopBtn) {
            scrollToTopBtn.classList.add('visible');
        }
    } else {
        header.classList.remove('scrolled');
        if (scrollToTopBtn) {
            scrollToTopBtn.classList.remove('visible');
        }
    }
});

// ===========================
// Smooth Scroll to Top
// ===========================

if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===========================
// FAQ Accordion
// ===========================

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    if (question) {
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    }
});

// ===========================
// Scroll Animations
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Elements to animate on scroll
const animateElements = document.querySelectorAll('.about-card, .process-step, .university-card, .faq-item, .contact-item, .parents-point');

animateElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ===========================
// Contact Form Handling
// ===========================

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            program: document.getElementById('program').value,
            message: document.getElementById('message').value
        };
        
        // Display success message
        const successMessages = {
            'fr': '✅ Merci pour votre message ! Nous vous contacterons bientôt.',
            'en': '✅ Thank you for your message! We will contact you soon.'
        };
        
        alert(successMessages[currentLanguage]);
        
        // Create mailto link (as fallback)
        const subject = encodeURIComponent(`LCB-SCHOLAR Application - ${formData.name}`);
        const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Program: ${formData.program}
Message: ${formData.message}
        `);
        
        window.location.href = `mailto:lcbscholar@gmail.com?subject=${subject}&body=${body}`;
        
        // Reset form
        contactForm.reset();
    });
}

// ===========================
// Smooth Scroll for Navigation
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Form Input Animations
// ===========================

const formInputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');

formInputs.forEach(input => {
    // Add focus animation
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentElement.classList.remove('focused');
        }
    });
    
    // Check if input has value on page load
    if (input.value) {
        input.parentElement.classList.add('focused');
    }
});

// ===========================
// Loading Animation
// ===========================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===========================
// Dynamic Year in Footer
// ===========================

const currentYear = new Date().getFullYear();
const footerBottomText = document.querySelector('.footer-bottom p');
if (footerBottomText) {
    const yearSpan = footerBottomText.querySelector('span');
    if (yearSpan) {
        const texts = {
            'fr': 'Tous droits réservés.',
            'en': 'All rights reserved.'
        };
        const text = texts[currentLanguage];
        footerBottomText.innerHTML = `&copy; ${currentYear} LCB-SCHOLAR. <span data-fr="${texts.fr}" data-en="${texts.en}">${text}</span>`;
    }
}

// ===========================
// Statistics Counter Animation
// ===========================

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (element.textContent.includes('%') ? '%' : '+');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (element.textContent.includes('%') ? '%' : '+');
        }
    }, 16);
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statItems = entry.target.querySelectorAll('.stat-item h3');
            statItems.forEach(item => {
                const text = item.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                item.textContent = '0';
                animateCounter(item, number);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// ===========================
// Parallax Effect for Hero
// ===========================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < hero.offsetHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===========================
// University Cards Hover Effect
// ===========================

const universityCards = document.querySelectorAll('.university-card');

universityCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===========================
// Console Welcome Message
// ===========================

console.log('%c🎓 LCB-SCHOLAR - Bourses d\'Études en Chine', 'color: #2E7D32; font-size: 20px; font-weight: bold;');
console.log('%c📧 Contact: lcbscholar@gmail.com', 'color: #C62828; font-size: 14px;');
console.log('%c🏢 Bureau: Guangzhou, China', 'color: #FFC107; font-size: 14px;');
console.log('%c🌍 Languages: FR | EN | AR (عربي)', 'color: #2196F3; font-size: 14px;');

// ===========================
// Performance Optimization
// ===========================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===========================
// Error Handling
// ===========================

window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
});

// ===========================
// Accessibility Enhancements
// ===========================

// Skip to main content
const skipLink = document.createElement('a');
skipLink.href = '#about';
skipLink.className = 'skip-link';

const skipTexts = {
    'fr': 'Passer au contenu principal',
    'en': 'Skip to main content',
    'ar': 'تخطي إلى المحتوى الرئيسي'
};

skipLink.textContent = skipTexts[currentLanguage];
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--primary-green);
    color: white;
    padding: 8px;
    text-decoration: none;
    z-index: 100;
`;
skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});
skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});
document.body.insertBefore(skipLink, document.body.firstChild);

// Keyboard navigation for FAQ
faqItems.forEach((item, index) => {
    const question = item.querySelector('.faq-question');
    if (question) {
        question.setAttribute('tabindex', '0');
        question.setAttribute('role', 'button');
        question.setAttribute('aria-expanded', 'false');
        
        question.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                question.click();
                question.setAttribute('aria-expanded', item.classList.contains('active') ? 'true' : 'false');
            }
        });
    }
});

// ===========================
// Analytics Tracking (Template)
// ===========================

function trackEvent(category, action, label) {
    // Add your analytics tracking code here
    // Example: gtag('event', action, { 'event_category': category, 'event_label': label });
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
}

// Track important interactions
if (contactForm) {
    contactForm.addEventListener('submit', () => {
        trackEvent('Form', 'Submit', 'Contact Form');
    });
}

langToggleBtn.addEventListener('click', () => {
    trackEvent('Language', 'Switch', currentLanguage);
});

// ===========================
// Initialize Everything
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ LCB-SCHOLAR website loaded successfully!');
    console.log('🌍 Language support: Français, English');
    
    // Update language on load
    updateLanguage();
    
    // Add smooth entrance animation to hero
    setTimeout(() => {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '1';
        }
    }, 300);
});

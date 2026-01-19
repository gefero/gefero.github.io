// Mobile menu toggle
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Language Switcher
const translations = {
    es: {
        nav: {
            home: 'Home',
            about: 'Sobre mí',
            cv: 'CV',
            projects: 'Proyectos',
            classes: 'Clases',
            talks: 'Charlas',
            papers: 'Publicaciones',
            poetry: 'Poesía',
            medium: 'Medium'
        }
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            cv: 'CV',
            projects: 'Projects',
            classes: 'Classes',
            talks: 'Talks',
            papers: 'Publications',
            poetry: 'Poetry',
            medium: 'Medium'
        }
    }
};

// Get current language from localStorage or default to Spanish
function getCurrentLanguage() {
    return localStorage.getItem('language') || 'es';
}

// Set language
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    updateLanguage(lang);
}

// Update page language
function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = translations[lang];
        keys.forEach(k => {
            value = value ? value[k] : undefined;
        });
        if (value) {
            el.textContent = value;
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update language selector
    document.querySelectorAll('.lang-option').forEach(option => {
        option.classList.remove('active');
    });
    const activeOption = document.querySelector(`[data-lang="${lang}"]`);
    if (activeOption) {
        activeOption.classList.add('active');
    }
    
    // Update CV link based on language
    const cvLink = document.querySelector('a[href*="CV-German_Rosati"]');
    if (cvLink) {
        if (lang === 'en') {
            cvLink.href = '/assets/files/CV-German_Rosati_AM_ENG.pdf';
        } else {
            cvLink.href = '/assets/files/CV-German_Rosati_AM_ESP.pdf';
        }
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    const currentLang = getCurrentLanguage();
    updateLanguage(currentLang);
});

// Highlight active page in navigation
document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.getElementById('navLinks');
    
    if (!nav.contains(event.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});

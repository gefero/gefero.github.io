// Translations for Publications/Papers page
// Note: Content remains in Spanish for both languages
// Only section headers are translated to English

const papersTranslations = {
    es: {
        title: 'Publicaciones - Germán Rosati',
        subtitle: 'Libros, artículos científicos y contribuciones académicas',
        booksTitle: 'Libros',
        articlesTitle: 'Artículos en revistas científicas con referato',
        publishedTitle: 'Publicados',
        bookChaptersTitle: 'Artículos en libros',
        viewBook: 'Ver libro',
        readReview: 'Leer reseña',
        keepSpanishNote: ''
    },
    en: {
        title: 'Publications - Germán Rosati',
        subtitle: 'Books, scientific articles and academic contributions',
        booksTitle: 'Books',
        articlesTitle: 'Articles in Peer-Reviewed Scientific Journals',
        publishedTitle: 'Published',
        bookChaptersTitle: 'Book Chapters',
        viewBook: 'View book',
        readReview: 'Read review',
        keepSpanishNote: '<p style="color: var(--color-muted); font-style: italic; margin-bottom: 2rem;">Note: Publication titles and content are maintained in their original Spanish.</p>'
    }
};

// Update papers content based on language
function updatePapersContent(lang) {
    const t = papersTranslations[lang];
    
    // Update document title
    document.title = t.title;
    
    // Update subtitle if it exists
    const subtitle = document.querySelector('[data-i18n="papers.subtitle"]');
    if (subtitle) {
        subtitle.textContent = t.subtitle;
    }
    
    // Update section headers
    const headers = document.querySelectorAll('.content-wrapper h2, .content-wrapper h3');
    const headerMap = {
        'Libros': t.booksTitle,
        'Books': t.booksTitle,
        'Artículos en revistas científicas con referato': t.articlesTitle,
        'Articles in Peer-Reviewed Scientific Journals': t.articlesTitle,
        'Publicados': t.publishedTitle,
        'Published': t.publishedTitle,
        'Artículos en libros': t.bookChaptersTitle,
        'Book Chapters': t.bookChaptersTitle
    };
    
    headers.forEach(header => {
        const currentText = header.textContent.trim();
        if (headerMap[currentText]) {
            header.textContent = headerMap[currentText];
        }
    });
    
    // Update book links text
    const bookLinks = document.querySelectorAll('.book-link');
    bookLinks.forEach(link => {
        const text = link.textContent.trim();
        if (text.includes('Ver libro') || text.includes('View book')) {
            link.textContent = `→ ${t.viewBook}`;
        } else if (text.includes('Leer reseña') || text.includes('Read review')) {
            link.textContent = `→ ${t.readReview}`;
        }
    });
    
    // Add note for English version if not already present
    if (lang === 'en' && t.keepSpanishNote) {
        const firstH2 = document.querySelector('.content-wrapper h2');
        if (firstH2 && !document.querySelector('.spanish-note')) {
            const note = document.createElement('div');
            note.className = 'spanish-note';
            note.innerHTML = t.keepSpanishNote;
            firstH2.parentNode.insertBefore(note, firstH2.nextSibling);
        }
    } else if (lang === 'es') {
        // Remove note if switching back to Spanish
        const note = document.querySelector('.spanish-note');
        if (note) {
            note.remove();
        }
    }
}

// Override the updateLanguage function
const originalUpdateLanguage = window.updateLanguage;
window.updateLanguage = function(lang) {
    if (originalUpdateLanguage) {
        originalUpdateLanguage(lang);
    }
    updatePapersContent(lang);
};

// Initialize content on page load
document.addEventListener('DOMContentLoaded', () => {
    const currentLang = getCurrentLanguage();
    updatePapersContent(currentLang);
});

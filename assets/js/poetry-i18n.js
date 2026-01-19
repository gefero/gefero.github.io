// Translations for Poetry page
const poetryTranslations = {
    es: {
        title: 'Poesía - Germán Rosati',
        subtitle: 'Poemarios y participaciones en antologías',
        booksTitle: 'Libros',
        anthologiesTitle: 'Antologías',
        books: [
            {
                title: 'Buscar el golpe',
                publisher: 'Ediciones del Dock, 2025',
                image: '/assets/images/golpe.jpg'
            },
            {
                title: 'Boca de tormenta',
                publisher: 'Huesos de Jibia, 2008',
                image: '/assets/images/boca.jpg'
            }
        ],
        anthologies: [
            {
                title: 'Hogar. Poemas sobre familias',
                publisher: 'Camalote, 2025',
                image: '/assets/images/hogar.jpg'
            },
            {
                title: 'Fe. 100 poemas sobre creencias',
                publisher: 'Camalote, 2024',
                image: '/assets/images/fe.jpg'
            },
            {
                title: 'Poemas con famosos',
                publisher: 'Ananga Ranga, Resistencia, 2010 (compilado por Tony Salazar y Alejandro Raymond)',
                image: '/assets/images/famosos.jpg'
            }
        ]
    },
    en: {
        title: 'Poetry - Germán Rosati',
        subtitle: 'Poetry books and anthology contributions',
        booksTitle: 'Books',
        anthologiesTitle: 'Anthologies',
        books: [
            {
                title: 'Buscar el golpe [Seeking the Blow]',
                publisher: 'Ediciones del Dock, 2025',
                image: '/assets/images/golpe.jpg'
            },
            {
                title: 'Boca de tormenta [Storm Mouth]',
                publisher: 'Huesos de Jibia, 2008',
                image: '/assets/images/boca.jpg'
            }
        ],
        anthologies: [
            {
                title: 'Hogar. Poemas sobre familias [Home. Poems about families]',
                publisher: 'Camalote, 2025',
                image: '/assets/images/hogar.jpg'
            },
            {
                title: 'Fe. 100 poemas sobre creencias [Faith. 100 poems about beliefs]',
                publisher: 'Camalote, 2024',
                image: '/assets/images/fe.jpg'
            },
            {
                title: 'Poemas con famosos [Poems with celebrities]',
                publisher: 'Ananga Ranga, Resistencia, 2010 (compiled by Tony Salazar and Alejandro Raymond)',
                image: '/assets/images/famosos.jpg'
            }
        ]
    }
};

// Update poetry content based on language
function updatePoetryContent(lang) {
    const t = poetryTranslations[lang];
    
    // Update document title and subtitle
    document.title = t.title;
    
    const subtitle = document.querySelector('[data-i18n="poetry.subtitle"]');
    if (subtitle) {
        subtitle.textContent = t.subtitle;
    }
    
    // Build HTML content
    let html = `<h2>${t.booksTitle}</h2>`;
    
    // Books
    t.books.forEach(book => {
        html += `
            <div class="book-card">
                <img src="${book.image}" alt="${book.title}" class="book-cover">
                <div class="book-info">
                    <div class="book-title">${book.title}</div>
                    <div class="book-meta">${book.publisher}</div>
                </div>
            </div>
        `;
    });
    
    html += `<h2>${t.anthologiesTitle}</h2>`;
    
    // Anthologies
    t.anthologies.forEach(anthology => {
        html += `
            <div class="book-card">
                <img src="${anthology.image}" alt="${anthology.title}" class="book-cover">
                <div class="book-info">
                    <div class="book-title">${anthology.title}</div>
                    <div class="book-meta">${anthology.publisher}</div>
                </div>
            </div>
        `;
    });
    
    document.getElementById('poetryContent').innerHTML = html;
}

// Override the updateLanguage function
const originalUpdateLanguage = window.updateLanguage;
window.updateLanguage = function(lang) {
    if (originalUpdateLanguage) {
        originalUpdateLanguage(lang);
    }
    updatePoetryContent(lang);
};

// Initialize content on page load
document.addEventListener('DOMContentLoaded', () => {
    const currentLang = getCurrentLanguage();
    updatePoetryContent(currentLang);
});

// Translations for Index (Home) page
const indexTranslations = {
    es: {
        title: 'Germán Rosati · Data Sociologist',
        hero: {
            label: 'Data Sociologist',
            title: 'Germán Rosati',
            subtitle: 'Ciencias Sociales × Machine Learning × Métodos Cuantitativos',
            description: 'Investigador en la intersección de ciencias sociales y ciencia de datos. Especializado en métodos cuantitativos, machine learning aplicado a problemas sociales y análisis de datos complejos.',
            tags: ['Ciencias Sociales', 'Machine Learning', 'Python', 'Data Analysis', 'Research'],
            contact: '→ Contacto'
        },
        sections: [
            { title: 'Sobre mí', description: 'Conoce mi trayectoria académica y profesional en ciencias sociales y análisis de datos.', link: 'Ver más →' },
            { title: 'Proyectos', description: 'Exploración de proyectos de investigación y desarrollo en análisis de datos sociales.', link: 'Ver proyectos →' },
            { title: 'Clases & Cursos', description: 'Material educativo sobre métodos cuantitativos, machine learning y programación.', link: 'Ver clases →' },
            { title: 'Charlas', description: 'Presentaciones y conferencias sobre ciencia de datos aplicada a ciencias sociales.', link: 'Ver charlas →' },
            { title: 'Publicaciones', description: 'Papers académicos, artículos y contribuciones a la investigación social cuantitativa.', link: 'Ver papers →' },
            { title: 'Poesía', description: 'Poemarios y participaciones en antologías poéticas.', link: 'Ver poesía →' },
            { title: 'Medium', description: 'Reflexiones sobre metodología, datos y la intersección entre lo social y lo computacional.', link: 'Leer en Medium →' }
        ]
    },
    en: {
        title: 'Germán Rosati · Data Sociologist',
        hero: {
            label: 'Data Sociologist',
            title: 'Germán Rosati',
            subtitle: 'Social Sciences × Machine Learning × Quantitative Methods',
            description: 'Researcher at the intersection of social sciences and data science. Specialized in quantitative methods, machine learning applied to social problems, and complex data analysis.',
            tags: ['Social Sciences', 'Machine Learning', 'Python', 'Data Analysis', 'Research'],
            contact: '→ Contact'
        },
        sections: [
            { title: 'About', description: 'Learn about my academic and professional trajectory in social sciences and data analysis.', link: 'Learn more →' },
            { title: 'Projects', description: 'Exploration of research and development projects in social data analysis.', link: 'View projects →' },
            { title: 'Classes & Courses', description: 'Educational material on quantitative methods, machine learning, and programming.', link: 'View classes →' },
            { title: 'Talks', description: 'Presentations and conferences on data science applied to social sciences.', link: 'View talks →' },
            { title: 'Publications', description: 'Academic papers, articles, and contributions to quantitative social research.', link: 'View papers →' },
            { title: 'Poetry', description: 'Poetry books and contributions to anthologies.', link: 'View poetry →' },
            { title: 'Medium', description: 'Reflections on methodology, data, and the intersection between social and computational.', link: 'Read on Medium →' }
        ]
    }
};

// Update index content based on language
function updateIndexContent(lang) {
    const t = indexTranslations[lang];
    
    // Update document title
    document.title = t.title;
    
    // Update hero section
    const heroLabel = document.querySelector('.hero-label');
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroDescription = document.querySelector('.hero-description');
    
    if (heroLabel) heroLabel.textContent = t.hero.label;
    if (heroTitle) heroTitle.textContent = t.hero.title;
    if (heroSubtitle) heroSubtitle.textContent = t.hero.subtitle;
    if (heroDescription) heroDescription.textContent = t.hero.description;
    
    // Update tags
    const tags = document.querySelectorAll('.tag');
    t.hero.tags.forEach((tag, index) => {
        if (tags[index]) tags[index].textContent = tag;
    });
    
    // Update contact button
    const contactBtn = document.querySelector('.social-link.primary span:last-child');
    if (contactBtn) contactBtn.textContent = t.hero.contact.replace('→ ', '');
    
    // Update section cards
    const sectionCards = document.querySelectorAll('.section-card');
    sectionCards.forEach((card, index) => {
        if (t.sections[index]) {
            const title = card.querySelector('h3');
            const description = card.querySelector('p');
            const link = card.querySelector('.section-link');
            
            if (title) title.textContent = t.sections[index].title;
            if (description) description.textContent = t.sections[index].description;
            if (link) link.textContent = t.sections[index].link;
        }
    });
}

// Override the updateLanguage function
const originalUpdateLanguage = window.updateLanguage;
window.updateLanguage = function(lang) {
    if (originalUpdateLanguage) {
        originalUpdateLanguage(lang);
    }
    updateIndexContent(lang);
};

// Initialize content on page load
document.addEventListener('DOMContentLoaded', () => {
    const currentLang = getCurrentLanguage();
    updateIndexContent(currentLang);
});

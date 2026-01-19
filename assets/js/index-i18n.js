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
            {
                number: '01',
                title: 'Sobre mí',
                description: 'Conoce mi trayectoria académica y profesional en ciencias sociales y análisis de datos.',
                link: 'Ver más →'
            },
            {
                number: '02',
                title: 'Proyectos',
                description: 'Exploración de proyectos de investigación y desarrollo en análisis de datos sociales.',
                link: 'Ver proyectos →'
            },
            {
                number: '03',
                title: 'Clases & Cursos',
                description: 'Material educativo sobre métodos cuantitativos, machine learning y programación.',
                link: 'Ver clases →'
            },
            {
                number: '04',
                title: 'Charlas',
                description: 'Presentaciones y conferencias sobre ciencia de datos aplicada a ciencias sociales.',
                link: 'Ver charlas →'
            },
            {
                number: '05',
                title: 'Publicaciones',
                description: 'Papers académicos, artículos y contribuciones a la investigación social cuantitativa.',
                link: 'Ver papers →'
            },
            {
                number: '06',
                title: 'Poesía',
                description: 'Poemarios y participaciones en antologías poéticas.',
                link: 'Ver poesía →'
            },
            {
                number: '07',
                title: 'Medium',
                description: 'Reflexiones sobre metodología, datos y la intersección entre lo social y lo computacional.',
                link: 'Leer en Medium →'
            }
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
            {
                number: '01',
                title: 'About',
                description: 'Learn about my academic and professional trajectory in social sciences and data analysis.',
                link: 'Learn more →'
            },
            {
                number: '02',
                title: 'Projects',
                description: 'Exploration of research and development projects in social data analysis.',
                link: 'View projects →'
            },
            {
                number: '03',
                title: 'Classes & Courses',
                description: 'Educational material on quantitative methods, machine learning, and programming.',
                link: 'View classes →'
            },
            {
                number: '04',
                title: 'Talks',
                description: 'Presentations and conferences on data science applied to social sciences.',
                link: 'View talks →'
            },
            {
                number: '05',
                title: 'Publications',
                description: 'Academic papers, articles, and contributions to quantitative social research.',
                link: 'View papers →'
            },
            {
                number: '06',
                title: 'Poetry',
                description: 'Poetry books and contributions to anthologies.',
                link: 'View poetry →'
            },
            {
                number: '07',
                title: 'Medium',
                description: 'Reflections on methodology, data, and the intersection between social and computational.',
                link: 'Read on Medium →'
            }
        ]
    }
};

// Update index content based on language
function updateIndexContent(lang) {
    const t = indexTranslations[lang];
    
    // Update document title
    document.title = t.title;
    
    // Update hero section
    document.querySelector('.hero-label').textContent = t.hero.label;
    document.querySelector('.hero-title').textContent = t.hero.title;
    document.querySelector('.hero-subtitle').textContent = t.hero.subtitle;
    document.querySelector('.hero-description').textContent = t.hero.description;
    
    // Update tags
    const tags = document.querySelectorAll('.tag');
    t.hero.tags.forEach((tag, index) => {
        if (tags[index]) tags[index].textContent = tag;
    });
    
    // Update contact button
    const contactBtn = document.querySelector('.social-link.primary');
    if (contactBtn) contactBtn.innerHTML = `<span>${t.hero.contact}</span>`;
    
    // Update section cards
    const sectionCards = document.querySelectorAll('.section-card');
    t.sections.forEach((section, index) => {
        if (sectionCards[index]) {
            const card = sectionCards[index];
            const title = card.querySelector('h3');
            const description = card.querySelector('p');
            const link = card.querySelector('.section-link');
            
            if (title) title.textContent = section.title;
            if (description) description.textContent = section.description;
            if (link) link.textContent = section.link;
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

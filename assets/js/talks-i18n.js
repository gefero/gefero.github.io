// Translations for Talks page
const talksTranslations = {
    es: {
        title: 'Charlas - Germán Rosati',
        subtitle: 'Presentaciones, diálogos y entrevistas sobre inteligencia artificial y ciencias sociales computacionales',
        interviewsTitle: 'Entrevistas',
        talksTitle: 'Algunas charlas (últimos 5 años)',
        readInterview: 'Leer entrevista',
        watchDialogue: 'Ver diálogo',
        watchVideo: 'Ver video',
        interviews: [
            {
                date: '31-12-2024',
                title: 'Entrevista sobre LLMs y ciencias sociales',
                institution: 'Revista "Tramas Sociales", Universidad Nacional de San Juan',
                url: 'https://ojs.unsj.edu.ar/index.php/tramassociales/article/view/1260'
            },
            {
                date: '13-05-2023',
                title: 'Entrevista sobre Inteligencia Artificial',
                institution: 'Diario Perfil',
                url: 'https://www.perfil.com/noticias/agenda-academica/german-rosati-no-es-productiva-la-distopia-que-se-ha-generado-en-torno-a-la-inteligencia-artificial.phtml'
            },
            {
                date: '2022',
                title: 'Diálogo sobre Inteligencia Artificial',
                institution: 'Ciclo "Esto no es un tweet: 7 diálogos para pensar la Argentina" - elDiarioAR',
                url: 'https://www.youtube.com/watch?v=JYmhEMhYKD8&list=PLWVVz3EMZtTCfSx-6OrD9sdQnauJJt4qi&index=8&ab_channel=elDiarioAR'
            }
        ],
        talks: [
            {
                date: '15-10-2025',
                title: 'Pensando con las máquinas. Modelos grandes de lenguaje e investigación en ciencias sociales',
                institution: 'Programa Anual de Conferencias, INCIHUSA-CONICET',
                url: 'https://www.youtube.com/watch?v=2sA3GFr9JQ0'
            },
            {
                date: '30-10-2023',
                title: 'Abordajes ágiles para el estudio de trayectorias de uso del suelo',
                institution: 'Ateneo CID Economía Agraria, FCEyN, UBA',
                url: 'https://youtu.be/Wcjno1PL57Y?si=EF5mcmV-aYvrl9l1'
            },
            {
                date: '4-11-2022',
                title: 'Frontera agraria, uso del suelo y deforestación. Datos y herramientas para un abordaje ágil',
                institution: 'Seminario Big data y políticas públicas: desafíos y oportunidades, UDESA',
                url: 'https://www.youtube.com/live/h_3LcO5DnLM?si=8c1ZNDEinkSjH8mJ'
            },
            {
                date: '10-12-2020',
                title: 'Los "temas" de la pandemia. Un análisis de los diálogos de lectores de medios nacionales',
                institution: 'Seminario IC/ICC: La ciencia ante el COVID-19',
                url: 'https://www.youtube.com/watch?v=DTDkSEqgNlA'
            },
            {
                date: '08-06-2020',
                title: 'Ciencias Sociales y Ciencia de Datos. Nuevas herramientas, problemas clásicos',
                institution: 'Seminario General de IDAES, UNSAM',
                url: 'https://www.youtube.com/watch?v=7k8DrNsQIL4'
            }
        ]
    },
    en: {
        title: 'Talks - Germán Rosati',
        subtitle: 'Presentations, dialogues and interviews on artificial intelligence and computational social sciences',
        interviewsTitle: 'Interviews',
        talksTitle: 'Selected talks (last 5 years)',
        readInterview: 'Read interview',
        watchDialogue: 'Watch dialogue',
        watchVideo: 'Watch video',
        interviews: [
            {
                date: '12-31-2024',
                title: 'Interview on LLMs and social sciences',
                institution: '"Tramas Sociales" Journal, National University of San Juan',
                url: 'https://ojs.unsj.edu.ar/index.php/tramassociales/article/view/1260'
            },
            {
                date: '05-13-2023',
                title: 'Interview on Artificial Intelligence',
                institution: 'Perfil Newspaper',
                url: 'https://www.perfil.com/noticias/agenda-academica/german-rosati-no-es-productiva-la-distopia-que-se-ha-generado-en-torno-a-la-inteligencia-artificial.phtml'
            },
            {
                date: '2022',
                title: 'Dialogue on Artificial Intelligence',
                institution: 'Series "This is not a tweet: 7 dialogues to think about Argentina" - elDiarioAR',
                url: 'https://www.youtube.com/watch?v=JYmhEMhYKD8&list=PLWVVz3EMZtTCfSx-6OrD9sdQnauJJt4qi&index=8&ab_channel=elDiarioAR'
            }
        ],
        talks: [
            {
                date: '10-15-2025',
                title: 'Thinking with machines. Large language models and research in social sciences',
                institution: 'Annual Conference Program, INCIHUSA-CONICET',
                url: 'https://www.youtube.com/watch?v=2sA3GFr9JQ0'
            },
            {
                date: '10-30-2023',
                title: 'Agile approaches for the study of land use trajectories',
                institution: 'CID Atheneum Agricultural Economics, FCEyN, UBA',
                url: 'https://youtu.be/Wcjno1PL57Y?si=EF5mcmV-aYvrl9l1'
            },
            {
                date: '11-04-2022',
                title: 'Agricultural frontier, land use and deforestation. Data and tools for an agile approach',
                institution: 'Seminar Big data and public policies: challenges and opportunities, UDESA',
                url: 'https://www.youtube.com/live/h_3LcO5DnLM?si=8c1ZNDEinkSjH8mJ'
            },
            {
                date: '12-10-2020',
                title: 'The "topics" of the pandemic. An analysis of reader dialogues in national media',
                institution: 'Seminar IC/ICC: Science facing COVID-19',
                url: 'https://www.youtube.com/watch?v=DTDkSEqgNlA'
            },
            {
                date: '06-08-2020',
                title: 'Social Sciences and Data Science. New tools, classic problems',
                institution: 'General Seminar of IDAES, UNSAM',
                url: 'https://www.youtube.com/watch?v=7k8DrNsQIL4'
            }
        ]
    }
};

// Update talks content based on language
function updateTalksContent(lang) {
    const t = talksTranslations[lang];
    
    // Update document title and subtitle
    document.title = t.title;
    
    const subtitle = document.querySelector('[data-i18n="talks.subtitle"]');
    if (subtitle) {
        subtitle.textContent = t.subtitle;
    }
    
    // Build HTML content
    let html = `<h2>${t.interviewsTitle}</h2>`;
    
    // Interviews
    t.interviews.forEach(interview => {
        html += `
            <div class="course-item">
                <div class="course-year">${interview.date}</div>
                <div class="course-title">${interview.title}</div>
                <div class="course-institution">${interview.institution}</div>
                <p style="margin-top: 1rem; margin-bottom: 0;">
                    <a href="${interview.url}" target="_blank">→ ${t.readInterview}</a>
                </p>
            </div>
        `;
    });
    
    html += `<h2>${t.talksTitle}</h2>`;
    
    // Talks
    t.talks.forEach(talk => {
        html += `
            <div class="course-item">
                <div class="course-year">${talk.date}</div>
                <div class="course-title">${talk.title}</div>
                <div class="course-institution">${talk.institution}</div>
                <p style="margin-top: 1rem; margin-bottom: 0;">
                    <a href="${talk.url}" target="_blank">→ ${t.watchVideo}</a>
                </p>
            </div>
        `;
    });
    
    document.getElementById('talksContent').innerHTML = html;
}

// Override the updateLanguage function
const originalUpdateLanguage = window.updateLanguage;
window.updateLanguage = function(lang) {
    if (originalUpdateLanguage) {
        originalUpdateLanguage(lang);
    }
    updateTalksContent(lang);
};

// Initialize content on page load
document.addEventListener('DOMContentLoaded', () => {
    const currentLang = getCurrentLanguage();
    updateTalksContent(currentLang);
});

// Translations for About page
const aboutTranslations = {
    es: {
        title: 'Sobre mí - Germán Rosati',
        subtitle: 'Investigador en Machine Learning aplicado a Ciencias Sociales',
        content: `
            <p>
                Me especializo en la aplicación de métodos de Machine Learning a las Ciencias Sociales, 
                al estudio de la estructura social y agraria y al análisis de texto (NLP, Text Mining, etc.).
            </p>

            <p>
                Actualmente soy Investigador Adjunto en el <a href="https://www.conicet.gov.ar/" target="_blank">Consejo Nacional 
                de Investigaciones Científicas y Técnicas (CONICET)</a>. Tengo lugar de trabajo en la 
                <a href="http://www.unsam.edu.ar/institutos/idaes/" target="_blank">Escuela Interdisciplinaria de Altos Estudios Sociales</a> 
                de la <a href="http://www.unsam.edu.ar" target="_blank">Universidad Nacional de San Martín</a> (IDAES-UNSAM).
            </p>

            <p>
                Allí coordino <a href="https://factor-data.netlify.app/" target="_blank">factor~data</a>, 
                un laboratorio en Ciencias Sociales Computacionales. También coordino el 
                <a href="https://www.unsam.edu.ar/escuelas/eidaes/671/idaes/ciencias-sociales-computacionales-humanidades-digitales" target="_blank">Diploma 
                en Ciencias Sociales Computacionales y Humanidades Digitales</a>. A nivel grado, dicto para las carreras de 
                Sociología y Antropología un Track en Métodos Cuantitativos y Ciencias Sociales Computacionales y en la carrera 
                de Ciencia de Datos de la ECyT-UNSAM una introducción a los fundamentos del NLP.
            </p>

            <p>
                Soy, además, investigador del Programa de Investigaciones sobre el Movimiento de la Sociedad Argentina (PIMSA).
            </p>

            <p>
                Anteriormente, he sido Coordinador de los programas de Data Science e Inteligencia Artificial en 
                <a href="https://www.digitalhouse.com/" target="_blank">Digital House Coding School</a>. También he sido líder 
                del Área de Procesos de Producción de Datos en el Programa PASCAL de la UNSAM. Me he desempeñado como Analista 
                Experto de Datos en el <a href="https://www.argentina.gob.ar/trabajo" target="_blank">Ministerio de Trabajo, 
                Empleo y Seguridad Social</a>.
            </p>

            <p>
                He sido Investigador Invitado en la <a href="https://www.fu-berlin.de" target="_blank">Freie Universität Berlin</a> 
                y el <a href="https://www.iai.spk-berlin.de" target="_blank">Instituto Iberoamericano de Berlín</a>.
            </p>

            <p>
                Finalmente, y un poco descolgado de todo lo que mencioné más arriba, <a href="/poesia/">escribo poesía</a>. He publicado dos libros de poemas y en algunas antologías.
            </p>
        `
    },
    en: {
        title: 'About - Germán Rosati',
        subtitle: 'Researcher in Machine Learning applied to Social Sciences',
        content: `
            <p>
                I specialize in applying Machine Learning methods to Social Sciences, studying social and agrarian structure, 
                and text analysis (NLP, Text Mining, etc.).
            </p>

            <p>
                I am currently an Associate Researcher at the <a href="https://www.conicet.gov.ar/" target="_blank">National Council 
                for Scientific and Technical Research (CONICET)</a>. I work at the 
                <a href="http://www.unsam.edu.ar/institutos/idaes/" target="_blank">Interdisciplinary School of Advanced Social Studies</a> 
                of the <a href="http://www.unsam.edu.ar" target="_blank">National University of San Martín</a> (IDAES-UNSAM).
            </p>

            <p>
                There I coordinate <a href="https://factor-data.netlify.app/" target="_blank">factor~data</a>, 
                a Computational Social Sciences laboratory. I also coordinate the 
                <a href="https://www.unsam.edu.ar/escuelas/eidaes/671/idaes/ciencias-sociales-computacionales-humanidades-digitales" target="_blank">Diploma 
                in Computational Social Sciences and Digital Humanities</a>. At the undergraduate level, I teach a Track in 
                Quantitative Methods and Computational Social Sciences for the Sociology and Anthropology programs, and an 
                introduction to NLP fundamentals for the Data Science program at ECyT-UNSAM.
            </p>

            <p>
                I am also a researcher at the Research Program on the Movement of Argentine Society (PIMSA).
            </p>

            <p>
                Previously, I have been Coordinator of the Data Science and Artificial Intelligence programs at 
                <a href="https://www.digitalhouse.com/" target="_blank">Digital House Coding School</a>. I have also been leader 
                of the Data Production Processes Area in the PASCAL Program at UNSAM. I have worked as an Expert Data Analyst at the 
                <a href="https://www.argentina.gob.ar/trabajo" target="_blank">Ministry of Labor, Employment and Social Security</a>.
            </p>

            <p>
                I have been a Visiting Researcher at <a href="https://www.fu-berlin.de" target="_blank">Freie Universität Berlin</a> 
                and the <a href="https://www.iai.spk-berlin.de" target="_blank">Ibero-American Institute of Berlin</a>.
            </p>

            <p>
                Finally, and somewhat disconnected from everything I mentioned above, <a href="/poesia/">I write poetry</a>. I have published two poetry books and appeared in several anthologies.
            </p>
        `
    }
};

// Update about content based on language
function updateAboutContent(lang) {
    const content = aboutTranslations[lang].content;
    document.getElementById('aboutContent').innerHTML = content;
    
    // Update title
    document.title = aboutTranslations[lang].title;
    document.querySelector('[data-i18n="about.subtitle"]').textContent = aboutTranslations[lang].subtitle;
}

// Override the updateLanguage function to include about-specific content
const originalUpdateLanguage = window.updateLanguage;
window.updateLanguage = function(lang) {
    if (originalUpdateLanguage) {
        originalUpdateLanguage(lang);
    }
    updateAboutContent(lang);
};

// Initialize content on page load
document.addEventListener('DOMContentLoaded', () => {
    const currentLang = getCurrentLanguage();
    updateAboutContent(currentLang);
});

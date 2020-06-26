const langStrings = [
    {
        es: 'Experiencia',
        en: 'Experience',
    },
    {
        es: 'Educación',
        en: 'Education',
    },
    {
        es: 'Conocimientos',
        en: 'Skills',
    },
    {
        es: 'Idiomas',
        en: 'Languages'
    },
    {
        es: 'Voluntariado',
        en: 'Volunteer'
    },
    {
        es: 'Desarrollador Web',
        en: 'Web Developer'
    },
    {
        es: 'Autodidacta',
        en: 'Self-taught'
    },
    {
        es: 'Innovador',
        en: 'Innovator'
    },
    {
        es: 'Soy un desarrollador web apasionado en el desarrollo de interesantes y desafiantes proyectos para aprender no solo código sino también los diferentes procesos para hacer software.',
        en: 'I\'m a Web Developer passionate in the development of interesting and challenging projects to learn not just code but also the different process to do software'
    },
    {
        es: 'Experiencia laboral',
        en: 'Work Experience'
    },
    {
        es: 'Practicante Desarrollador Web',
        en: 'Intern Web Developer'
    },
    {
        es: 'Agosto 2018 - Febrero 2019',
        en: 'August 2018 – February 2019'
    },
    {
        es: 'Administrar la página web de la empresa, diseñar nuevos landings, actualizar contenido, Responsive Web Design, soporte a diferentes navegadores, optimización SEO, reportes estadísticos del sitio (Google Analytics)',
        en: 'Give support to the company\'s web site, build new landings, update content, Responsive Web Design, optimize the site support for different browsers, set good practices in SEO, analyze data from Google Analytics.'
    },
    {
        es: 'Detalles',
        en: 'Details',
    },
    {
        es: 'Auxiliar General',
        en: 'Store Attendant'
    },
    {
        es: 'Septiembre 2014 - Abril 2015',
        en: 'September 2014 – April 2015'
    },
    {
        es: 'Atención al cliente, inventarios, mantenimiento a pasillos',
        en: 'Customer service, inventories, hall maintenance'
    },
    {
        es: 'Educación',
        en: 'Education'
    },
    {
        es: 'Lic. En Sistemas de Computación Administrativa',
        en: 'Bachelor’s Degree in Administrative Computing Systems'
    },
    {
        es: 'Universidad Metropolitana de Monterrey',
        en: 'Monterrey Metropolitan University'
    },
    {
        es: 'Septiembre 2015 - Agosto 2018',
        en: 'September 2015 – August 2018'
    },
    {
        es: 'Técnico en Programación Web',
        en: 'Technical High School Degree in Web Programming'
    },
    {
        es: 'Preparatoria Técnica Álvaro Obregón',
        en: 'Álvaro Obregón Technical High School'
    },
    {
        es: 'Agosto 2011 - Junio 2014',
        en: 'August 2011 – June 2014'
    },
    {
        es: 'Conocimientos',
        en: 'Technical Skills'
    },
    {
        es: 'GIT y Github',
        en: 'GIT and Github'
    },
    {
        es: 'Inglés',
        en: 'English'
    },
    {
        es: 'Español',
        en: 'Spanish'
    },
    {
        es: 'JA México y Accenture México',
        en: 'JA Mexico and Accenture Mexico'
    },
    {
        es: 'Marzo 2017 - Junio 2017',
        en: 'March 2017 – June 2017'
    },
    {
        es: 'Trabajar en equipo, generar y recibir retroalimentación, creación, y desarrollo de una aplicación móvil que beneficie a la sociedad',
        en: 'Teamwork, provide and receive feedback, creation, and planning of a mobile application that benefits the society'
    },
    {
        es: 'Proyecto',
        en: 'Project'
    },
    {
        es: 'Portafolio',
        en: 'Portfolio'
    },
    {
        es: 'Tarjeta Feria App',
        en: ''
    },
    {
        es: 'Proyecto que simula todo el Front-end de una App móvil, en el cual se puede navegar a través de diferentes secciones, realizar búsquedas con diferentes palabras clave, mostrar y ocultar información como menús y preguntas y respuestas, etc. Este proyecto fue realizado con HTML, CSS y JavaScript',
        en: ''
    },
    {
        es: 'Código',
        en: 'Code'
    },
    {
        es: 'Lista de Tareas',
        en: 'To Do List'
    },
    {
        es: 'Lista de Tareas nos permite ir agregando tareas a una tabla la cual las clasifica como tareas terminadas y tareas incompletas y estas a su vez se en listan en un orden en el cual se posicionan las incompletas al inicio de la lista y las completas al final de esta. Este proyecto uso conceptos intermedios y avanzados de JavaScript como LocalStorage, Clases, objetos y métodos, eventos y diversos métodos de arreglos, además de HTML y CSS.',
        en: ''
    },
    {
        es: 'El proyecto ideal es aquel que siempre se puede mejorar',
        en: ''
    },
];

//Get Selector Language
const selector = document.querySelector('.display-language');
selector.addEventListener('click', function(e) {    
    selector.classList.toggle('display-on');
});

//Get the list of languages availables
const listLanguages = document.querySelector('.list-languages').children;
const arrayList = Array.prototype.slice.call(listLanguages);
arrayList.forEach((language) => (
    updateSelectValue(language) //Function to update our Select value
));

function updateSelectValue(language) {
    language.addEventListener('click', function() {
        //Get the language Code ('es', 'en', etc)
        const langCode = language.id;

        const lang = language.querySelector('.language-option').textContent;
        const flag = language.querySelector('.flag-image').src;
        
        const selectedLang = selector.querySelector('.selected-lang');
        const selectedFlag = selector.querySelector('.selected-flag');

        selectedLang.textContent = lang;
        selectedFlag.src = flag;

        findTextContentInLangStrings(langCode);
    });
}

function findTextContentInLangStrings(langCode) {
    //Get all elements with text
    const textContent =  document.querySelectorAll('[data-text]')

    textContent.forEach((element) => {
        //Get the lang object that has the text that our for each is running
        const langObject = langStrings.find((langObject) => {
            const stringValues = Object.values(langObject);

            return stringValues.includes(element.textContent);
        });

        translateTextContent(element, langObject, langCode);
    });
}

function translateTextContent(element, langObject, langCode) {
    if(element.children.length > 0) {
        const iconElement = [...element.children];
        element.textContent = '';
        element.append(iconElement[0], langObject[langCode]);
    } else {
        element.textContent = langObject[langCode];
    }
}
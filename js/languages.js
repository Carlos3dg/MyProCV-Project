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
    }
];

//Get Selector Language
const selector = document.querySelector('.display-language');

selector.addEventListener('click', function(e) {    
    selector.classList.toggle('display-on');
    //Get the list of languages availables
    const listLanguages = document.querySelector('.list-languages').children;
    const arrayList = Array.prototype.slice.call(listLanguages);

    arrayList.forEach((language) => (
        updateSelectValue(language) //Function to update our Select value
    ));
});

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
    const textContent =  document.querySelectorAll('[data-text]')

    textContent.forEach((text) => {
        const langObject = langStrings.find((langObject) => {
            const stringValues = Object.values(langObject);

            return stringValues.includes(text.textContent);
        });
        
        translateTextContent(text, langObject, langCode);
    });
}

function translateTextContent(text, langObject, langCode) {
    text.textContent = langObject[langCode];
}
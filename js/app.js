import Contact from './contactForm.js';
//GLOBAL VARIABLES
const execute = {
    barTech: true,
    barLanguage: true,
} // This variable help to execute just one time the barTect and barLanguage effect and ignoring the rest of times that our scroll event is executed 

class ComponentsInfo {
    constructor() {
        this.jobDetails = [
            {
                name: 'Auxiliar General',
                place: 'Office Depot de México S.A. de C.V.',
                logo: 'img/officedepot.png',
                goals: 'Empleado del mes',
                tool1: 'Mantenimiento a pasillos',
                tool2: 'Atención al cliente',
                tool3: 'Inventarios',
                tool4: 'Manejo de montacargas',
                pieChart: false,
            },
            {
                name: 'Practicante Desarrollador Web',
                place: 'Besser Energy S.A.P.I de C.V.',
                logo: 'img/besserlighting.jpg',
                goals: 'Desarrollar de inicio a fin la página web de la empresa',
                tool1: {
                    label: 'Front-end, SEO 50%',
                    offset: '10',
                    value: '50',
                    bg: '--linksHover',
                },
                tool2: {
                    label: 'Linux, GIT 25%',
                    offset: '60',
                    value: '25',
                    bg: 'orange',
                },
                tool3: {
                    label: 'Python 25%',
                    offset: '85',
                    value: '25',
                    bg: 'rgb(25, 200, 83)'
                },
                pieChart: true,
            },
            {
                generalInfo: {
                    achievements: 'Logros',
                    knowledge: 'Conocimientos'
                }
            }
        ],

        this.techBarCharts = [
            {htmlBar: [60, 65, 70, 75, 80, 85, 90]},
            {cssBar: [60, 65, 70, 75, 80, 85, 90]},
            {jsBar: [55, 60, 65, 70, 75, 80, 85]},
            {reactBar: [0, 5, 10, 15, 20, 25, 30]}, 
            {gitBar: [0, 5, 10, 15, 20, 25, 30]},
            {seoBar: [30, 35, 40, 45, 50, 55, 60]},
        ],

        this.languageBarCharts = [
            {english: [40, 45, 50, 55, 60, 65, 70]},
            {spanish: [70, 75, 80, 85, 90, 95, 100]},
        ],

        this.factLanguages = [
            {english:
                [
                    {fact0: 'Lectura y escritura correcta, capaz de leer y escribir documentos formales'},
                    {fact1: 'Entendimiento del idioma cuando los demás se están expresando'},
                    {fact2: 'Capaz de mantener una conversación fluida en temas cotidianos o de interés'}
                ]
            },
            {spanish: 
                [
                    {fact0: 'Lengua nativa'},
                    {fact1: 'Redacción de reportes y documentos formales'}
                ]       
            }
        ],

        this.volunteeringDetails = [
            {
                name: 'GetApp Program',
                place: 'JA México y Accenture México',
                logo: 'img/jamexico.jpg',
                goals: 'Permanecer en el Top 3 durante todo el programa',
                tool1: 'Planeación de Negocios',
                tool2: 'Propuesta de valor',
                tool3: 'Desarrollo de Prototipos',
                tool4: 'Estrategias de Marketing', 
            },
            {
                generalInfo: {
                    achievements: 'Logros',
                    knowledge: 'Conocimientos'
                }
            }
        ],

        this.contactForm = {
            headerTitle: '!Hola!',
            emailLabel: 'Correo electrónico',
            emailPlaceHolder: 'ejemplo@email.com',
            messageLabel: 'Mensaje',
            messagePlaceHolder: '¿En qué te puedo ayudar?',
        }
    }

    translateValuesToEn() {
        this.jobDetails = [
            {
                name: 'Store Attendant',
                place: 'Office Depot de México S.A. de C.V.',
                logo: 'img/officedepot.png',
                goals: 'Employee of the month',
                tool1: 'Hall maintenance',
                tool2: 'Customer service',
                tool3: 'Inventories',
                tool4: 'Lift truck driving',
                pieChart: false,
            },
            {
                name: 'Intern Web Developer',
                place: 'Besser Energy S.A.P.I de C.V.',
                logo: 'img/besserlighting.jpg',
                goals: 'Building from scratch the company\'s web site',
                tool1: {
                    label: 'Front-end, SEO 50%',
                    offset: '10',
                    value: '50',
                    bg: '--linksHover',
                },
                tool2: {
                    label: 'Linux, GIT 25%',
                    offset: '60',
                    value: '25',
                    bg: 'orange',
                },
                tool3: {
                    label: 'Python 25%',
                    offset: '85',
                    value: '25',
                    bg: 'rgb(25, 200, 83)'
                },
                pieChart: true,
            },
            {
                generalInfo: {
                    achievements: 'Achievements',
                    knowledge: 'Knowledge'
                }
            }
        ],

        this.factLanguages = [
            {english:
                [
                    {fact0: 'Good reading and writing, I\'m able to read a write formal documents'},
                    {fact1: 'Good understanding when people is talking'},
                    {fact2: 'I\'m able to keep a fluent conversation in everyday and personal interest topics'}
                ]
            },
            {spanish: 
                [
                    {fact0: 'Native language'},
                    {fact1: 'Well written reports and formal documents'}
                ]       
            }
        ],

        this.volunteeringDetails = [
            {
                name: 'GetApp Program',
                place: 'JA Mexico y Accenture Mexico',
                logo: 'img/jamexico.jpg',
                goals: 'Being in the 3rd Top position during the entire program',
                tool1: 'Business model generation',
                tool2: 'Value proposition',
                tool3: 'App prototype development',
                tool4: 'Marketing strategies', 
            },
            {
                generalInfo: {
                    achievements: 'Achievements',
                    knowledge: 'Knowledge'
                }
            }
        ],

        this.contactForm = {
            eng: true,
            headerTitle: 'Let\'s talk',
            emailLabel: 'Email Address',
            emailPlaceHolder: 'example@email.com',
            messageLabel: 'Message',
            messagePlaceHolder: 'What can I help you with?',
        }
    }
}

class UI {
    //Default property values that can be used by a method
    constructor() {

    }

    //Method to make the word wrap effect in the banner
    async wordWrapEffect(subtitleHeader, subtitleContainer) {
        let i = 0;
        //While i is defferent from -1 (whose never is going to happen) the code is executed
        while(i !== -1) {
            //Get the width value of one of the subtitles elements
            var widthSubtitle = subtitleHeader[i].offsetWidth + 10;
            //Get the value that is going to be subtracted
            let widthSubtract = Math.round(widthSubtitle/6);
            //The word clean effect as a promise to be able to execute every letter cut until there's no word
            let wordClean = new Promise((resolve, reject) => {
                setTimeout(() => {
                    const cleanId = setInterval(function cleanFrame() {
                        widthSubtitle = widthSubtitle - widthSubtract;
                        subtitleContainer.style.width = widthSubtitle<0 ? `${widthSubtitle * -1}px` : `${widthSubtitle}px`;
                        //console.log(widthSubtract);

                        if (widthSubtitle <= 0) {
                            resolve(true);
                            clearInterval(cleanId);
                        }
                    }, 100);
                }, 1500)
            });
            //We await for the word clean effect to be finished
            let wordResult = await wordClean;
            //After the word clean is finished we return a true value inside the wordResult, if the condition is true we make a sum to the i
            if (wordResult && i< 2) {
                i++
            } else {
                i = 0;
            }
            //We remove the visible class from the subtitle that has been clean and apply the visible class to the next subtitle
            document.querySelector('.visible').classList.remove('visible');
            subtitleHeader[i].classList.add('visible');
            //Get the width of the next subtitle element
            widthSubtitle = subtitleHeader[i].offsetWidth + 10;

            let widthAugment = widthSubtitle/6;
            let widthContainer = 0;
            //The word type effect as a promise to be able to execute every letter typed until the word is completed
            let wordType = new Promise((resolve, reject) => {
            const typeId = setInterval(function typeFrame() {
                    widthContainer = widthContainer + widthAugment;
                    
                    subtitleContainer.style.width = `${widthContainer}px`;

                    if (Math.round(widthContainer) >= widthSubtitle) {
                        resolve(true);
                        clearInterval(typeId);
                    }
                }, 100);
            });
            //Await for the word type effect to be finished
            let wordRespond = await wordType;
           
        }
    }
    //Method to active the toggle effect in the sidebar menu
    toggleEffect(sidebarMenu, sidebarIconsMenu, bodyInformation) {
        //Active and desactive the sidebar menu
        sidebarMenu.classList.toggle('active-full-sidebar');
        bodyInformation.classList.toggle('body-information-short');

        //After 100 ms we disable or enable the sidebar with the icons to first positionated the element
        setTimeout(() => {
            sidebarIconsMenu.classList.toggle('disable-left-sidebar');
        }, 100)

    }

    //Method to found the exactly position of an element
    foundElementPosition(element, elementPosition) {
        element.style.top = `${elementPosition.top}px`;
    }

    //Method to create the details box that apper with a hover in the details button
    detailsBoxCreation(highScreen, buttonPosition, {name, place, logo, goals, tool1, tool2, tool3, tool4, pieChart}={}, {generalInfo}={}) {
        //We create the div that is going to have all the information
        const detailsBox = document.createElement('div');
        detailsBox.className = 'details-box container-short' //Get the classes that apply the design
        //Variable that reads the top porcentages space between the botton that is beign hovered and the top of the viweport
        const topPercentage = (buttonPosition.top/highScreen)*100;
       //If the percentage is less than 45 we insert our div element at the top but if it's not we insert it at the bottom
        if (topPercentage < 45) {
           detailsBox.style.top = '100%'; 
        } else {
            detailsBox.style.bottom = '100%'; 
        }

        //Here we insert all the elements that our div is going to have with the information extracted of the object array
       detailsBox.innerHTML = `<img src="${logo}" class="job-logo">
       <h4 class="subtitle-section">${name}</h4>
       <h5 class="subtitle-section">${place}</h5>
       <div class="details-info">
            <div class="goals-container">
                <h5>${generalInfo.achievements}</h5>
                <i class="fas fa-medal"></i>
                <p>${goals}</p>
            </div>
            <div class="tools-container">
                <h5>${generalInfo.knowledge}</h5>
                ${!pieChart ? `<ul>
                    <li>${tool1}</li>
                    <li>${tool2}</li>
                    <li>${tool3}</li>
                    <li>${tool4}</li>
                </ul>` 
                : `<div class="pie-chart">
                    <div class="pie-segment" data-label="${tool1.label}" style="--offset:${tool1.offset}; --value:${tool1.value}; --bg: var(${tool1.bg});" title="${tool1.label}"></div>
                    <div class="pie-segment" data-label="${tool2.label}" style="--offset:${tool2.offset}; --value:${tool2.value}; --bg: ${tool2.bg};" title="${tool2.label}"></div>
                    <div class="pie-segment" data-label="${tool3.label}" style="--offset:${tool3.offset}; --value:${tool3.value}; --bg: ${tool3.bg};" title="${tool3.label}"></div>
                    </div>`}
            </div>
       </div>`

        return detailsBox;
    }

    //Method to create the increment percentage effect in every bar chart 
    barChartsEffect(elements, percentagesArray, lengthPercentage) {
        let j = 0; //To clear the interval in the barCharts percentages

        //First we transform the Node of elements as an array
        const elementsArray = Array.prototype.slice.call(elements);
        //Then we use the forEach and for.. in to insert the properties from the objects that are inside the percentagesArray as classes
        elementsArray.forEach(function(element, index) {
            for(let skill in percentagesArray[index]) {
                element.classList.add(skill);
            }
        });
        //Here we use an interval that is going to insert the percentage num for all elements every 150ms.
        const barPercentage = setInterval(function percentageFrame() {           
            if(j >= lengthPercentage) {
                clearInterval(barPercentage);
            }
            //In case that our clearInterval doesn't work, we execute this code only if j is smaller than lengthPercentage
            if (j < lengthPercentage) {
                for(let i=0; i<elementsArray.length; i++){
                    for(let skill in percentagesArray[i]) {
                        elementsArray[i].nextElementSibling.innerHTML = `${percentagesArray[i][skill][j]}%`;
                    }
                }
            }

            j++;

        }, 150);
    }

    dropDownLanguage(id, languageContainer, factsArray) {
        const languageSection = document.getElementById('languages-section');

        if(document.getElementById(id)) {
            document.getElementById(id).remove();
        } else if(document.querySelector('.facts-language-container')) {
            document.querySelector('.facts-language-container').remove();
            const facts = this.factLanguagesCreation(factsArray, id);
            languageSection.insertBefore(facts, languageContainer.nextSibling);
        } else {
            const facts = this.factLanguagesCreation(factsArray, id);
            languageSection.insertBefore(facts, languageContainer.nextSibling);
        }
    }

    factLanguagesCreation(factsArray, id) {
        const divFacts = document.createElement('div');
        divFacts.className = 'facts-language-container container-medium sub-section-container'
        divFacts.id = id;

        let ul = '';
        ul += '<ul>';
        factsArray.forEach((element, index) => {
            const fact = element[`fact${index}`];
            ul += `<li>${fact}</li>`
        });
        ul += '</ul>';
        divFacts.innerHTML = ul;

        return divFacts;
    }

    /*Contact Box creation*/
    contactBoxCreation({
            eng,
            headerTitle, 
            emailLabel, 
            emailPlaceHolder, 
            messageLabel, 
            messagePlaceHolder}) {
        const div = document.createElement('div');
        div.className = 'popup-container close-wrapper';

        div.innerHTML = `<div class="contact-form-container">
            <div class="contact-header">
                <span class="waving-hand-emoji">&#x1f44b;</span>
                <h3>${headerTitle}</h3>
                <span class="close-icon close-wrapper">
                    <i class="close-wrapper fas fa-times"></i>
                </span>
            </div>
            <form class="contact-form">
                <div class="input-container">
                    <label for="contact-email" class="label-field">${emailLabel}</label>
                    <input type="text" id='contact-email' name='email' class="contact-field" placeholder="${emailPlaceHolder}">
                </div>
                <div class="input-container">
                    <label for="contact-message" class="label-field">${messageLabel}</label>
                    <textarea id="" cols="30" rows="10" name='message' class="contact-field" id='contact-message' placeholder="${messagePlaceHolder}"></textarea>
                </div>
                <div class="input-container">
                    <input type="submit" class="submit" value='${eng ? 'Send' : 'Enviar'}'>
                </div>
            </form>
        </div>
        `;

        return div;
    }
}

function instanceObjects(value) {
    switch(value) {
        case 'ui':
            return new UI();
        case 'info':
            return new ComponentsInfo()
        case 'both':
            return {
                ui: new UI(),
                info: new ComponentsInfo()
            };
        default:
            return null;
    }
};

function translateInfo(info) {
    const selectedLang = document.querySelector('.selected-lang').textContent;

    switch(selectedLang) {
        case 'ENG':
            info.translateValuesToEn();
            break;
        default:
            return null;
    }
};

//EVENT LISTENERS
document.addEventListener('DOMContentLoaded', function() {
    //Instance
    const ui = instanceObjects('ui')
    //Get the subtitles from the header and the width from the first element
    const subtitleHeader = document.querySelectorAll('.subtitle');
    const widthSubtitle = subtitleHeader[0].offsetWidth
    //Get the subtitle container and applied a width according to the first element
    const subtitleContainer = document.getElementById('subtitle-container');
    subtitleContainer.style.width = `${widthSubtitle + 10}px`;

    /*Get a method to found the top, left, etc of the positions of the element in the selector*/
    const sidebarIconsMenu = document.querySelector('.left-sidebar');
    const iconsPosition = document.querySelector('#profile-contact').getBoundingClientRect();
        
    //Call the found method with the element and its different positions as parameters
    ui.foundElementPosition(sidebarIconsMenu, iconsPosition);

    ui.wordWrapEffect(subtitleHeader, subtitleContainer);
});

//Click event listener to every link inside the navigation
document.querySelector('.navigation').addEventListener('click', function(e) {
    const ui = instanceObjects('ui')
    //DELEGATION
    //Click event for toggle menu
    if (e.target.id === 'toggle__menu') {
        const sidebarMenu = document.querySelector('.full-left-sidebar');
        const sidebarIconsMenu = document.querySelector('.left-sidebar');
        const bodyInformation = document.querySelector('.body-information');
        /*Get a method to found the top, left, etc of the positions of the element in the selector*/
        const iconsPosition = document.querySelector('#profile-contact').getBoundingClientRect();
        
        //Call the found method with the element and its different positions as parameters
        ui.foundElementPosition(sidebarIconsMenu, iconsPosition);
        //Call the toggleEffect method
        ui.toggleEffect(sidebarMenu, sidebarIconsMenu, bodyInformation);
    }
});

//Mouse enter event listener to appear extra information about a specific job
document.querySelector('.experience-container').addEventListener('mouseenter', function(e) {
    //We are going to need the height of the viewport so we got it
    const highScreen = window.innerHeight;
    //We get the buttons container to detect one from another
    const jobZero = document.getElementById('job-0');
    const jobOne = document.getElementById('job-1');

	// Make sure it's not the document object
    //if (!('matches') in e.target) return;

    // Do your thing...
	if (e.target.matches('.details')) {
        //Get the object array that has the information that we're going to need and th ui instance
        const {ui, info} = instanceObjects('both')
        translateInfo(info);
        //Get general info that is not part of an information job
        const generalInfo = info.jobDetails[info.jobDetails.length - 1]
		//Here we detect the details button that is being hover, zero is for office and one for besser
        if(e.target === jobZero) {
            //Found the exact position of the button in the viewport
            const buttonPosition = jobZero.getBoundingClientRect();
            //Call the method to create the details box, here we need four parameters: the index number of the object array according with the number job that the e.target found, the complete height of the viewport, the button position and the object array, where it is the information that we're going to need.
            const detailsBox = ui.detailsBoxCreation(highScreen, buttonPosition, info.jobDetails[0], generalInfo);
            //At the end we insert the detailsBox element that our method has returned inside the jobZero element
            jobZero.appendChild(detailsBox);
        
        } else if(e.target === jobOne) {
            const buttonPosition = jobOne.getBoundingClientRect();
            //Call the method to create the details box
            const detailsBox = ui.detailsBoxCreation(highScreen, buttonPosition, info.jobDetails[1], generalInfo);
            //console.log(detailsBox);
            jobOne.appendChild(detailsBox);
        }
	}
}, true);

//Mouse leave event to remove the details box that our mouse enter element creates
document.querySelector('.experience-container').addEventListener('mouseleave', function(e) {
    // Make sure it's not the document object
    //if (!('matches') in e.target) return;
    let detailsBox;
    // Do your thing...
    if (e.target.matches('.details')) {
        detailsBox = document.querySelector('.details-box')
        detailsBox.remove();
    }
}, true);

//Technical skills - bar chart effect
window.addEventListener('scroll', function() {
    //Get the Tech Skills container to know its exact position in every scroll
    const techSkillsTop = document.getElementById('technical-skills').getBoundingClientRect().top;
    const languageTop = document.getElementById('languages-section').getBoundingClientRect().top;
    //Create the instance of the class ComponentsInfo to have acces to the tech bar charts percentages
    const {ui, info} = instanceObjects('both');
    //If techSkills container is at 180 pixels from top then
    if (techSkillsTop < 180 && execute.barTech) {
        //Get every tech skill that we have
        const techSkillsNode = document.querySelectorAll('.bar-chart-tech');
        //Call the method barChartEffect from the UI
        ui.barChartsEffect(techSkillsNode, info.techBarCharts, info.techBarCharts[0].htmlBar.length);
        execute.barTech = false; //To avoid the execution of this condition
    }

    if (languageTop < 180 && execute.barLanguage) {
        const languagesNode = document.querySelectorAll('.bar-chart-language');
        ui.barChartsEffect(languagesNode, info.languageBarCharts, info.languageBarCharts[0].english.length);
        execute.barLanguage = false;
    }
});

//Drop down laguage effect
document.getElementById('languages-section').addEventListener('click', function(e) {
    const arrowButtons = document.querySelectorAll('.arrow-down-button');
    const {ui, info} = instanceObjects('both')
    translateInfo(info);
    if(e.target === arrowButtons[0] || e.target === arrowButtons[0].firstElementChild) {
        const languageContainer = arrowButtons[0].parentElement;
        ui.dropDownLanguage('english-language', languageContainer, info.factLanguages[0].english);
    } else if(e.target === arrowButtons[1] || e.target === arrowButtons[1].firstElementChild) {
        const languageContainer = arrowButtons[1].parentElement;
        ui.dropDownLanguage('spanish-language', languageContainer, info.factLanguages[1].spanish);
    }
});

document.querySelector('.volunteering-section').addEventListener('mouseenter', function(e) {
    //We are going to need the height of the viewport so we got it
    const highScreen = window.innerHeight;
    //We get the buttons container to detect one from another
    const volunteerZero = document.getElementById('volunteering-0');

	// Make sure it's not the document object
    //if (!('matches') in e.target) return;

    // Do your thing...
	if (e.target.matches('.details')) {
        const {ui, info} = instanceObjects('both')
        translateInfo(info);
        const generalInfo = info.volunteeringDetails[info.volunteeringDetails.length - 1];
		//Here we detect the details button that is being hover, zero is for office and one for besser
        if(e.target === volunteerZero) {
            //Found the exact position of the button in the viewport
            const buttonPosition = volunteerZero.getBoundingClientRect();
            //Get the object array that has the information that we're going to need
            //Call the method to create the details box, here we need four parameters: the index number of the object array according with the number job that the e.target found, the complete height of the viewport, the button position and the object array, where it is the information that we're going to need.
            const detailsBox = ui.detailsBoxCreation(highScreen, buttonPosition, info.volunteeringDetails[0], generalInfo);
            //At the end we insert the detailsBox element that our method has returned inside the jobZero element
            volunteerZero.appendChild(detailsBox);
        
        }
    }
}, true);

document.querySelector('.volunteering-section').addEventListener('mouseleave', function(e) {
    // Make sure it's not the document object
    //if (!('matches') in e.target) return;
    let detailsBox;
    // Do your thing...
    if (e.target.matches('.details')) {
        detailsBox = document.querySelector('.details-box')
        detailsBox.remove();
    }
}, true);

(function portfolioVideos() {
    const containersNode = document.querySelectorAll('[data-video="video-container"]');
    const containers = Array.prototype.slice.call(containersNode);
    const videos = containers.map(element => {return element.querySelector('video')});
    containers.forEach((element, index) => {
        element.addEventListener('mouseenter', function() {
            videos[index].play();
        });

        element.addEventListener('mouseleave', function() {
            videos[index].pause();
        });
    })
})();

function renderElement(parent, component) {
    if(!parent.children.length || !component) {
        const stringElement = component ? component.outerHTML : component;
        parent.innerHTML = stringElement;
        return;
    }
    if(parent.firstElementChild.outerHTML !== component.outerHTML) {
        //Get elements that their content rely on state
        const actualElements_cont = parent.firstElementChild.querySelectorAll('[data-content]');
        const newElements_cont = component.firstElementChild.querySelectorAll('[data-content]');
        actualElements_cont.forEach((element, index) => {
            if(element.textContent !== newElements_cont[index].textContent) {
                element.textContent = newElements_cont[index].textContent;
            }
        });
        //Get elements that their attributes rely on state
        const actualElements_attr = parent.firstElementChild.querySelectorAll('[data-attr]');
        const newElements_attr = component.firstElementChild.querySelectorAll('[data-attr]');
        //actualElements_attr.forEach((element, index) => {
        //    if()
        //})
    }
    return parent;
    //let oldTextContent
    //get old and new content
    //console.log(parent)
    //console.log(actualElements);
    //console.log(newElements);
    //console.log(actualElements === newElements);

}

//Contact Button: Open the contact wrapper
document.querySelector('#anchor-contact').addEventListener('click', function(e) {
    e.preventDefault();
    const info = instanceObjects('info');
    translateInfo(info);
    //Get parent container and create contact component
    const formContainer = document.querySelector('#contact-form-01');
    const contactForm = new Contact(renderElement, formContainer, info.contactForm);
    renderElement(formContainer, contactForm.render());
    //Add listeners to any require element iside our component
    /*onChange inputs*/
    const inputs = document.querySelectorAll('.contact-field');
    const arrayInputs = Array.prototype.slice.call(inputs);
    arrayInputs.forEach(input => (
        input.addEventListener('change', contactForm.onChangeInput)
    ));
    //formContainer.
    /* onSubmit Form */
    document.querySelector('.contact-form').addEventListener('submit', contactForm.onSubmit);
    /* onClick to close form */
    document.querySelector('.popup-container').addEventListener('click', contactForm.closeElement);
    //ContactWrapper: Close it    
    /*divWrapper.addEventListener('click', function(e) {
        if(e.target.className.match('close-wrapper')) {
            divWrapper.remove();
        }
    });*/

    //Store form values
    /*const contact = {
        email: '',
        message: '',
        emailCopy: ''
    };
    const inputs = document.querySelectorAll('.contact-field');
    const arrayInputs = Array.prototype.slice.call(inputs);
    arrayInputs.forEach(input => (
        input.addEventListener('change', function(e) {
            contact[e.target.name] = e.target.value;
            if(e.target.name === 'message') return;
            contact.emailCopy = e.target.value;
        })
    ))
    
    document.querySelector('.contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        console.log(contact);
    })*/
});

//Function to add scroll effect to the On-Page-Link
(function addAnchorEventListeners() {
    //Get anchors and the corresponding sections
    const anchors =  document.querySelectorAll('.nav__links');
    const sections = document.querySelectorAll('.information-sections');
    //Turn our anchors Node variable into an Array
    const anchorsArray = Array.prototype.slice.call(anchors);

    anchorsArray.forEach((element, index)=>{
        //Add the click event listener to every anchor
        element.addEventListener('click', function(e) {
            //Avoid the default behavior on anchors that target inside the page
            e.preventDefault();
            //Add scroll and position
            window.scrollTo({
                'behavior': 'smooth',
                'left': 0,
                'top': sections[index].offsetTop - 70, /*R*/ 
            });
        });
    });
})();

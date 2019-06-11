class UI {
    //Default property values that can be used by a method
    constructor() {
        this.jobDetails = [
            {
                jobOne: 'Auxiliar General',
                jobPlace: 'Office Ddepot de México S.A. de C.V.',
                jobLogo: 'img/officedepot.png'
            },
            {
                jobTwo: 'Practicante Desarrollador Web',
                jobPlace: 'Besser Energy S.A.P.I de C.V.',
                jobLogo: 'img/besserlighting.jpg'
            }
        ]
    }

    //Method to make the word wrap effect in the banner
    async wordWrapEffect(subtitleHeader, subtitleContainer) {
        let i = 0;
        //While i is defferent from -1 (whose never is going to happen) the code is executed
        while(i !== -1) {
            //Get the width value of one of the subtitles elements
            var widthSubtitle = subtitleHeader[i].offsetWidth + 10;
            //Get the value that is going to be subtracted
            let widthSubtract = widthSubtitle/6;
            //The word clean effect as a promise to be able to execute every letter cut until there's no word
            let wordClean = new Promise((resolve, reject) => {
                setTimeout(() => {
                    const cleanId = setInterval(function cleanFrame() {
                        widthSubtitle = widthSubtitle - widthSubtract;
                        subtitleContainer.style.width = `${widthSubtitle}px`
                        
                        if (widthSubtitle < widthSubtract) {
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
                    
                    if (widthContainer >= widthSubtitle) {
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
        
        //Condition to erase the background menu if this one is disable or to appear it if is enable
        /*if (document.querySelector('.desable-full-sidebar')) {
            this.changeDefaultValues();
            setTimeout(() => {
                sidebarMenu.style.backgroundColor = this.sidebarMenuBackground;
            }, 400);
        } else {
            sidebarMenu.style.backgroundColor = this.sidebarMenuBackground;
        }*/

        //After 100 ms we disable or enable the sidebar with the icons to first positionated the element
        setTimeout(() => {
            sidebarIconsMenu.classList.toggle('disable-left-sidebar');
        }, 100)

    }

    //Method to found the exactly position of an element
    foundElementPosition(element, elementPosition) {
        element.style.top = `${elementPosition.top}px`;
    }

    changeDefaultValues() {
        
    }
}

//EVENT LISTENERS
document.addEventListener('DOMContentLoaded', function() {
    //Instance
    const ui = new UI();
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
    const ui = new UI();
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
document.querySelector('.experience-container').addEventListener('mouseover', function(e) {
    e.preventDefault();

    if(e.target.className === 'details-button') {
        e.target.parentElement.addEventListener('mouseenter', function(e) {
            const jobZero = document.getElementById('job-0');
            const jobOne = document.getElementById('job-1');

            if(e.target === jobZero) {
                console.log('office depot');
            } else if(e.target === jobOne) {
                console.log('besser')
            }
        });
    } 
})

//http://127.0.0.1:5500/index.html
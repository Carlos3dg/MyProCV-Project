class UI {
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
                        console.log(widthSubtitle);
                        if (subtitleContainer.offsetWidth < widthSubtract) {
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
                    console.log(widthContainer);
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
}

document.addEventListener('DOMContentLoaded', function() {
    //Get the subtitles from the header and the width from the first element
    const subtitleHeader = document.querySelectorAll('.subtitle');
    const widthSubtitle = subtitleHeader[0].offsetWidth
    //Get the subtitle container and applied a width according to the first element
    const subtitleContainer = document.getElementById('subtitle-container');
    subtitleContainer.style.width = `${widthSubtitle + 10}px`;
    
    const ui = new UI();
    ui.wordWrapEffect(subtitleHeader, subtitleContainer);
});
//http://127.0.0.1:5500/index.html
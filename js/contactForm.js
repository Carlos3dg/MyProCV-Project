class Contact {
    constructor(renderElement, parentContainer, props) {
        this.updateElement = renderElement;
        this.parentContainer = parentContainer;
        this.props = props;
        this.state = {
            contactFields: {
                email: '',
                message: '',
                emailCopy: '',
            },
            fieldErrors: {},
            displayElement: true,
            submitStatus: '',
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.state.fieldErrors = this.validate(this.state.contactFields);

        if(Object.keys(this.state.fieldErrors).length) {
            this.updateElement(this.parentContainer, this.render());
            return;
        };
        this.state.submitStatus = 'PENDING';
        this.updateElement(this.parentContainer, this.render());
        fetch('https://sheet.best/api/sheets/ae88e3ff-7867-4d95-a68b-ccb26a755d9c', {
            method: 'POST',
            body: JSON.stringify(this.state.contactFields),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resp => resp.json())
        .then((resp) => {
            this.state.submitStatus = 'SUCCESS';
            this.updateElement(this.parentContainer, this.render());
        })
        .catch((resp) => {
            this.state.submitStatus = 'ERROR';
            this.updateElement(this.parentContainer, this.render());
        })
    }

    validate = (fields) => {
        const fieldErrors = {};

        const textErrors = this.props.eng ? {
            invalidEmail: '*Please type a valid email',
            emptyEmail: '*Please type an email address',
            emptyMessage: '*Please type a message',
        } : {
            invalidEmail: '*Por favor ingrese un correo electrónico válido',
            emptyEmail: '*Por favor ingrese un correo electrónico',
            emptyMessage: '*Por favor ingrese un mensaje',
        };

        const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(!fields.email.match(mailFormat)) fieldErrors.email = textErrors.invalidEmail;
        if(fields.email === '') fieldErrors.email = textErrors.emptyEmail;
        if(fields.message === '') fieldErrors.message = textErrors.emptyMessage;

        return fieldErrors;
    }

    onChangeInput = (e) => {
        this.state.contactFields[e.target.name] = e.target.value;
        if(e.target.name === 'message') return;
        this.state.contactFields.emailCopy = e.target.value;
    }

    closeElement = (e) => {
        if(e.target.className.match('close-wrapper')) {
            this.state.displayElement = false;
            this.updateElement(this.parentContainer, this.render())
        }
    }

    render() {
            const {
                headerTitle, 
                emailLabel, 
                emailPlaceHolder,
                messageLabel,
                messagePlaceHolder,
                eng,
            } = this.props;
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
                    <form class="contact-form" style="${this.state.submitStatus === '' ? `display:block;` : `display: none`}" data-attr>
                        <div class="input-container">
                            <label for="contact-email" class="label-field">${emailLabel}</label>
                            <input type="text" id='contact-email' name='email' class="contact-field" placeholder="${emailPlaceHolder}">
                            <p style="font-size: 14px; color: red;" data-content>${this.state.fieldErrors.email || ''}</p>
                        </div>
                        <div class="input-container">
                            <label for="contact-message" class="label-field">${messageLabel}</label>
                            <textarea id="" cols="30" rows="10" name='message' class="contact-field" id='contact-message' placeholder="${messagePlaceHolder}"></textarea>
                            <p style="font-size: 14px; color: red;" data-content>${this.state.fieldErrors.message || ''}</p>
                        </div>
                        <div class="input-container">
                            <input type="submit" class="submit" value='${eng ? 'Send' : 'Enviar'}'>
                        </div>
                    </form>
                    <div class='loader-container' style="${this.state.submitStatus === 'PENDING' ? `display: block;` : `display: none;`}" data-attr>
                        <div class='loader'></div>
                        <p class='submit-status'>${eng ? 'Sending...' : 'Enviando...'}</p>
                    </div>
                    <div class='success-container' style="${this.state.submitStatus === 'SUCCESS' ? `display: block;` : `display: none;`}"  data-attr>
                        <span class='success-icon-container'>
                            <i class="fas fa-check"></i>
                        </span>
                        <p>${eng ? 'Thank you!' : 'Gracias'}</p>
                        <p>${eng ? 'Your message has been sent' : 'Tu mensaje ha sido envíado'}</p>
                        <p>${eng ? 'I will reply to you shortly at your email address' : 'En breve lo contactaré a su dirección de correo electrónico'}</p>
                        <div class='success-footer'>
                            <span>
                                Go back
                            </span>
                        </div>
                    </div>
                    <div class='error-container' style="${this.state.submitStatus === 'ERROR' ? `display: block;` : `display: none;`}"  data-attr>
                        <span>
                            <i class="close-wrapper fas fa-times"></i>
                        </span>
                        <span data-content></span>
                    </div>
                </div>
            </div>
            `;

            return this.state.displayElement ? div : '';
    }
}

export default Contact;
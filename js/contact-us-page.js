const workTogetherBtn = document.getElementById("workTogetherBtn");
const assistanceBtn = document.getElementById("assistanceBtn");
const joinBtn = document.getElementById("joinBtn");


workTogetherBtn.addEventListener('click', function() {
    const formType = document.getElementById('form-type');
    formType.value = 'workTogether';
    const formSection = document.getElementById("form-section");
    formSection.classList.remove('hidden-section');
    const formImage = document.getElementById("form-image");
    formImage.setAttribute('src', './images/contact-us/work.png');
    formImage.setAttribute('alt', "Let's work together");
});

assistanceBtn.addEventListener('click', function() {
    const formType = document.getElementById('form-type');
    formType.value = 'assistance';
    const formSection = document.getElementById("form-section");
    formSection.classList.remove('hidden-section');
    const formImage = document.getElementById("form-image");
    formImage.setAttribute('src', './images/contact-us/assistance.jpg');
    formImage.setAttribute('alt', 'Our assistance at your service');
});

joinBtn.addEventListener('click', function() {
    const formType = document.getElementById('form-type');
    formType.value = 'join';
    const formSection = document.getElementById("form-section");
    formSection.classList.remove('hidden-section');
    const formImage = document.getElementById("form-image");
    formImage.setAttribute('src', './images/contact-us/join.jpg');
    formImage.setAttribute('alt', 'Join our team');
});

// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

let validFirstName;
let validLastName;
let validEmail;
let validMessage;
let validForm;

const firstNameInput = document.getElementById("first-name-input");
const lastNameInput = document.getElementById("last-name-input");
const emailInput = document.getElementById("email-input");
const messageTextarea = document.getElementById("message-textarea");

firstNameInput.addEventListener('input', function(event) {
    const firstName = this.value;
    const inputWrapper = document.getElementById("first-name-input-wrapper");
    if (firstName.length > 0) {
        validFirstName = true;
        inputWrapper.classList.remove("invalid-input");
    } else {
        validFirstName = false;
        inputWrapper.classList.add("invalid-input");
    }
    validForm = validFirstName && validLastName && validEmail && validMessage;
    const formButton = document.getElementById("form-button");
    if (validForm === false) {
        formButton.setAttribute("disabled", true);
    } else {
        formButton.setAttribute("disabled", false);
    }
});

lastNameInput.addEventListener('input', function(event) {
    const lastName = this.value;
    const inputWrapper = document.getElementById("last-name-input-wrapper");
    if (lastName.length > 0) {
        validLastName = true;
        inputWrapper.classList.remove("invalid-input");
    } else {
        validLastName = false;
        inputWrapper.classList.add("invalid-input");
    }
    validForm = validFirstName && validLastName && validEmail && validMessage;
    const formButton = document.getElementById("form-button");
    if (validForm === false) {
        formButton.setAttribute("disabled", true);
    } else {
        formButton.setAttribute("disabled", false);
    }
});

emailInput.addEventListener('input', function(event) {
    const email = this.value;
    const inputWrapper = document.getElementById("email-input-wrapper");
    validEmail = validateEmail(email);
    if (validEmail) {
        inputWrapper.classList.remove("invalid-input");
    } else {
        inputWrapper.classList.add("invalid-input");
    }
    validForm = validFirstName && validLastName && validEmail && validMessage;
    const formButton = document.getElementById("form-button");
    if (validForm === false) {
        formButton.setAttribute("disabled", true);
    } else {
        formButton.setAttribute("disabled", false);
    }
});

messageTextarea.addEventListener('input', function(event) {
    const message = this.value;
    const inputWrapper = document.getElementById("message-input-wrapper");
    if (message.length > 0) {
        validMessage = true;
        inputWrapper.classList.remove("invalid-input");
    } else {
        validMessage = false;
        inputWrapper.classList.add("invalid-input");
    }
    validForm = validFirstName && validLastName && validEmail && validMessage;
    const formButton = document.getElementById("form-button");
    if (validForm === false) {
        formButton.disabled = true;
    } else {
        formButton.disabled = false;
    }
});

const formButton = document.getElementById("form-button");
formButton.addEventListener('click', function() {
    const form = document.getElementById('form');
    form.submit();
  });
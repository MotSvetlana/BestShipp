
const formContact = document.querySelector('.contacts__form');
const formInputs = document.querySelectorAll('.form__input');
const formEmail = document.querySelector('.form__input-email');
const erEmail = document.querySelector('.form__error-email');

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

formContact.onsubmit = function (e) {
    e.preventDefault();
    let emailVal = formEmail.value,
        emptyInputs = Array.from(formInputs).filter(input => input.value === '');
        

    formInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error');
            input.nextElementSibling.classList.add('active');
            input.nextElementSibling.innerText = 'This field is required, fill it out.';
        } else {
            input.classList.remove('error');
            input.nextElementSibling.classList.remove('active');
        }
    });

    if (emptyInputs.length !== 0) {
        console.log('inputs not filled');
        
        return false;
    }

    if (!validateEmail(emailVal)) {
        console.log('email not valid');
        erEmail.classList.add('active');
        erEmail.innerText = 'This is an error email, please try again.';
        formEmail.classList.add('error');
        return false;
    } else {
        erEmail.classList.remove('active');
        formEmail.classList.remove('error');
    }
    resetForm();
    showChips('Message successfully sent!', 'We will contact you soon.');

}

formInputs.forEach(function(input){
    if(
    input.addEventListener('focus', function () {
        input.classList.remove('error') || input.nextElementSibling.classList.remove('active'); ;
        // erEmail.classList.remove('active') || formEmail.classList.remove('error');
        
    }));
})

function resetForm() {
    formInputs.forEach(input => input.value = '');
}


function showChips(header, message) {
    let modal = document.getElementById('message');
    let title = document.getElementById('message__title');
    let msg = document.getElementById('message__text');
    title.innerText = header;
    msg.innerText = message;
    modal.classList.add('active');
    console.log(modal);
    setTimeout(function () {
        modal.classList.remove('active');
    }, 4000);
}




const formTop = document.querySelector('.form-top');
const input = document.querySelector('.form-top__email');
const errorMessage = document.querySelector('.form-top__error-message');


function validEmail(email) {
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(String(email).toLowerCase());
}

formTop.onsubmit = function (e) {
    e.preventDefault();
    let emailVal = input.value;
   
    if (input.value === '') {
        formAddError();
        errorMessage.classList.add('active');
        errorMessage.innerText = 'This field is required, fill it out.';
        return false;
    } else {
        formRemoveError()
        errorMessage.classList.remove('active');
        
    }
    
    if (!validEmail(emailVal)) {
        console.log('email not valid');
        formAddError()
        errorMessage.classList.add('active');
        errorMessage.innerText = 'This is an error email, please try again.';
        return false;
    } else {
        formRemoveError()
        errorMessage.classList.remove('active');
    }
    resetInput();
    showChips('Email successfully sent!', 'You subscribed for our news feed.');
}

// input.addEventListener('focus', function () {
//     errorMessage.classList.remove('active');
//     formRemoveError();
//     resetInput();
// });

function formAddError(){
    input.classList.add('error');
    formTop.classList.add('error');
    
}
function formRemoveError(){
    input.classList.remove('error');
    formTop.classList.remove('error');
}

function resetInput() {
    input.value = '';
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



var $ = document.querySelector.bind(document);

var userName = $('#username');
var email = $('#email');
var password = $('#password');
var passwordConfirm = $('#confirm-password');
var form = $('form');

function showError(input, message){
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.add('error');
    small.innerText = message;
}

function showSuccess(input){
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.remove('error');
    small.innerText = '';
}

function checkEmptyError(...input){
    let isEmptyError = false;
    input.forEach( input => {
        let inputValue = input.value.trim();
        if(!inputValue){
            isEmptyError = true;
            showError(input, 'Vui lòng điền đầy đủ thông tin');
        }else{
            showSuccess(input);
        }
    })
    return isEmptyError;
}

function checkEmailError(input){
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let inputValue = input.value.trim();
    let isEmailError = !regexEmail.test(inputValue);
    if(regexEmail.test(inputValue)){
        showSuccess(input);
    }else{
        showError(input,'Email Invalid');
    }
    return isEmailError
}

function checkLengthError(input, min, max){
    let inputValue = input.value.trim();
    if(inputValue.length < min){
        showError(input,  `Phải có ít nhất ${min} ký tự`);
        return true;
    }
    if(inputValue.length > max){
        showError(input,`Không được quá ${max} ký tự`)
        return true;
    }
    showSuccess(input);
    return false;
}


function checkMatchPasswordError(passwordInput, cfPassword) {
    if(passwordInput.value !== cfPassword.value){
        showError(cfPassword, 'Mật khẩu không trùng khớp');
        return true;
    }
    return false;
}


form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let isEmptyError = checkEmptyError(userName, email, password , passwordConfirm);
    let isEmailError = checkEmailError(email);
    let isUsernameLengthError = checkLengthError(userName, 5, 9)
    let isPasswordError = checkLengthError(password, 5, 9)
    let isMatchError = checkMatchPasswordError(password, passwordConfirm);
    console.log(isEmptyError,isEmailError,isUsernameLengthError,isPasswordError,isMatchError);

    if(!isEmptyError && !isEmailError && !isUsernameLengthError && !isPasswordError && !isMatchError){
        alert('Bạn đã đăng ký tài khoản thành công');
    }
});


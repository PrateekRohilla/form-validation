const form = document.getElementById('form');

const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');



form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
    
});

function checkInputs(){

    //get values from inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    
    if(usernameValue === ''){
        //show error & add error class
        setErrorFor(username, 'Username cannot be blank');
    }
    else{
        //add success class
        setSuccessFor(username);
    }



    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blank');
    }
    else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    }
    else{
        setSuccessFor(email);
    }



    if(passwordValue === ''){
        setErrorFor(password, 'Password cannot be blank');
    }
    else{
        setSuccessFor(password);
    }



    if(password2Value === ''){
        setErrorFor(password2, 'Password check cannot be blank');
    }
    else if(passwordValue !== password2Value){
        setErrorFor(password2, 'Passwords does not match');
    }
    else{
        setSuccessFor(password2);
    }

    //last success message
    const btn = document.querySelector('button');
    btn.innerHTML = 'Validated Successfully  ✔';


}


function setErrorFor(input, message){
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    //add error msg inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';

}

function setSuccessFor(input){
    //select the div .form-control
    const formControl = input.parentElement;

    //add sucess class
    formControl.className = 'form-control success';

}


function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
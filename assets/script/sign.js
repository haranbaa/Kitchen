const body = document.querySelector('body');
const container = document.querySelector('.container');

const signup = document.getElementById('signup');
const signupForget = document.getElementById('signupForget');
const logForm = document.getElementById('logForm');

const signIn = document.getElementById('signIn');
const signForm = document.getElementById('signForm');

const forgotLog = document.getElementById('forgotLog');
const signInOut = document.getElementById('signInOut');
const submitForgot = document.getElementById('submitForgot');

const forgotLogSuccess = document.getElementById('forgotLogSuccess');
const submitSave = document.getElementById('submitSave');

const submitRegister = document.getElementById('submitRegister');
const submitLogIn = document.getElementById('submitLogIn');

const passwordOne = document.querySelectorAll('.passwordOne');
const passwordTwo = document.querySelectorAll('.passwordTwo');
const passLengthOne = document.querySelectorAll('.passLengthOne');
const passLengthTwo = document.querySelectorAll('.passLengthTwo');

const modeToggle = document.getElementById('modeToggle');

const inputTxt = document.querySelectorAll('.inputTxt');

function clearInput() {
    for (let i of inputTxt) {
        i.value = '';
    }
}

clearInput();

let colorBg = true;

const colorCheck = () => {
    if (!colorBg) {
        body.style.backgroundColor = '';
    }
};

modeToggle.addEventListener('change', () => {
    if (colorBg) {
        body.style.backgroundColor = '#1e1e1e';
        colorBg = false;
    } else {
        if (logForm.style.display === 'flex') {
            body.style.backgroundColor = '#19704c';
            colorBg = true;
        } else if (signForm.style.display === 'flex') {
            body.style.backgroundColor = '#12595c';
            colorBg = true;
        } else if (forgotLog.style.display === 'flex') {
            body.style.backgroundColor = '#702619';
            colorBg = true;
        } else if (forgotLogSuccess.style.display === 'flex') {
            body.style.backgroundColor = '#5d176b';
            colorBg = true;
        } else {
            body.style.backgroundColor = '';
            colorBg = true;
        }
    }
});

const signupClick = () => {

    logForm.style.display = 'none';
    signForm.style.display = 'flex';
    

    body.style.backgroundColor = colorBg ? '#12595c' : '';
    clearInput();
};

signup.addEventListener('click', signupClick);
signup.addEventListener('click', colorCheck);

const signInClick = () => {

    logForm.style.display = 'flex';
    signForm.style.display = 'none';
    

    body.style.backgroundColor = colorBg ? '#19704c' : '';
    clearInput();
};

signIn.addEventListener('click', signInClick);
signIn.addEventListener('click', colorCheck);

const signupToForget = () => {

    logForm.style.display = 'none';
    signForm.style.display = 'none';
    forgotLog.style.display = 'flex';
    forgotLogSuccess.style.display = 'none';
    

    body.style.backgroundColor = colorBg ? '#702619' : '';
    clearInput();
};

signupForget.addEventListener('click', signupToForget);
signupForget.addEventListener('click', colorCheck);

const signToOut = () => {

    logForm.style.display = 'flex';
    signForm.style.display = 'none';
    forgotLog.style.display = 'none';
    forgotLogSuccess.style.display = 'none';
    

    body.style.backgroundColor = colorBg ? '#19704c' : '';
    clearInput();
};

signInOut.addEventListener('click', signToOut);
signInOut.addEventListener('click', colorCheck);

const submitToNewPassword = (e) => {
    e.preventDefault(); // to work
    forgotLogSuccess.style.display = 'flex';
    logForm.style.display = 'none';
    signForm.style.display = 'none';
    forgotLog.style.display = 'none';
    

    body.style.backgroundColor = colorBg ? '#5d176b' : '';
    clearInput();
};

submitForgot.addEventListener('click', submitToNewPassword);
submitForgot.addEventListener('click', colorCheck);


//password checker
passwordOne.forEach((pw1, index) => {
    pw1.addEventListener('keyup', () => {
        const pw2 = passwordTwo[index];
        const pl1 = passLengthOne[index];
        if (pw1.value.length < 8) {
            pw1.style.borderColor = 'red';
            pl1.style.display = 'block';
        } else {
            pw1.style.borderColor = '';
            pl1.style.display = '';
        }
    });
});

passwordTwo.forEach((pw2, index) => {
    pw2.addEventListener('keyup', () => {
        const pw1 = passwordOne[index];
        const pl2 = passLengthTwo[index];
        if (pw2.value.length < 8 || pw2.value !== pw1.value) {
            pw2.style.borderColor = 'red';
            pl2.style.display = 'block';
        } else {
            pw2.style.borderColor = '';
            pl2.style.display = '';
        }
    });
});


const submitToRegister = (e) => {
    e.preventDefault();

    const userName = document.querySelector('.userName').value;
    const emailName = document.querySelector('.emailName').value;

    if (passwordOne.value !== passwordTwo.value || passwordOne.value.length < 8 || passwordTwo.value.length < 8) {
        return;
    }

    console.log('yes');

    // localStorage.setItem('username', userName);
    // localStorage.setItem('email', emailName);
    // localStorage.setItem('password', passwordOne);

    // console.log('Data saved to localStorage:', { userName, emailName ,passwordOne });
};

submitRegister.addEventListener('click', submitToRegister);
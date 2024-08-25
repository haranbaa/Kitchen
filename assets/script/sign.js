const logIn = localStorage.getItem("logIn");

if (logIn === "true") {
    window.location.href = "index.html";
}

const body = document.querySelector("body");
const container = document.querySelector(".container");

const signup = document.getElementById("signup");
const signupForget = document.getElementById("signupForget");
const logForm = document.getElementById("logForm");

const signIn = document.getElementById("signIn");
const signForm = document.getElementById("signForm");

const forgotLog = document.getElementById("forgotLog");
const signInOut = document.getElementById("signInOut");
const submitForgot = document.getElementById("submitForgot");

const forgotLogSuccess = document.getElementById("forgotLogSuccess");
const submitSave = document.getElementById("submitSave");

const submitRegister = document.getElementById("submitRegister");
const submitLogIn = document.getElementById("submitLogIn");

const passwordOne = document.querySelectorAll(".passwordOne");
const passwordTwo = document.querySelectorAll(".passwordTwo");
const passLengthOne = document.querySelectorAll(".passLengthOne");
const passLengthTwo = document.querySelectorAll(".passLengthTwo");

const modeToggle = document.getElementById("modeToggle");

const inputTxt = document.querySelectorAll(".inputTxt");

logForm.style.display = "flex";
signForm.style.display = "none";
forgotLog.style.display = "none";
forgotLogSuccess.style.display = "none";

function clearInput() {
    for (let i of inputTxt) {
        i.value = "";
    }
}

clearInput();

const currentMode = localStorage.getItem("mode");

if (currentMode === "dark-mode") {
    body.style.backgroundColor = '#121212';
    modeToggle.checked = true;
} else if (currentMode === "light-mode") {
    body.style.backgroundColor = '#19704c';
    modeToggle.checked = false;
}

modeToggle.addEventListener("click", () => {
    if (modeToggle.checked) {
        body.style.backgroundColor = '#121212';
        localStorage.setItem("mode", "dark-mode");
    }
    else {
        if (logForm.style.display === "flex") {
            body.style.backgroundColor = '#19704c';
        } else if (signForm.style.display === "flex") {
            body.style.backgroundColor = '#12595c';
        } else if (forgotLog.style.display === "flex") {
            body.style.backgroundColor = '#7a7547';
        } else {
            body.style.backgroundColor = '#121212';
        }
    }
});

const signupClick = () => {
    const currentMode = localStorage.getItem("mode");
    clearInput();

    logForm.style.display = "none";
    signForm.style.display = "flex";
    forgotLog.style.display = "none";
    forgotLogSuccess.style.display = "none";

    if (currentMode === "light-mode") {
        body.style.backgroundColor = '#12595c';
    }
};

signup.addEventListener("click", signupClick);

const signInClick = () => {
    const currentMode = localStorage.getItem("mode");
    clearInput();

    logForm.style.display = "flex";
    signForm.style.display = "none";
    forgotLog.style.display = "none";
    forgotLogSuccess.style.display = "none";
    
    if (currentMode === "light-mode") {
        body.style.backgroundColor = '#19704c';
    }
};

signIn.addEventListener("click", signInClick);

const signupToForget = () => {
    const currentMode = localStorage.getItem("mode");
    clearInput();
    
    logForm.style.display = "none";
    signForm.style.display = "none";
    forgotLog.style.display = "flex";
    forgotLogSuccess.style.display = "none";
        
    if (currentMode === "light-mode") {
        body.style.backgroundColor = '#7a7547';
    }
};

signupForget.addEventListener("click", signupToForget);

const signToOut = () => {
    const currentMode = localStorage.getItem("mode");
    clearInput();
    
    logForm.style.display = "flex";
    signForm.style.display = "none";
    forgotLog.style.display = "none";
    forgotLogSuccess.style.display = "none";
        
    if (currentMode === "light-mode") {
        body.style.backgroundColor = '#19704c';
    }
};

signInOut.addEventListener("click", signToOut);

//password checker
passwordOne.forEach((pw1, index) => {
    pw1.addEventListener("keyup", () => {
        const pw2 = passwordTwo[index];
        const pl1 = passLengthOne[index];
        if (pw1.value.length < 8) {
        pw1.style.borderColor = "red";
        pl1.style.display = "block";
        } else {
        pw1.style.borderColor = "";
        pl1.style.display = "";
        }
    });
});

passwordTwo.forEach((pw2, index) => {
    pw2.addEventListener("keyup", () => {
        const pw1 = passwordOne[index];
        const pl2 = passLengthTwo[index];
        if (pw2.value.length < 8 || pw2.value !== pw1.value) {
        pw2.style.borderColor = "red";
        pl2.style.display = "block";
        } else {
        pw2.style.borderColor = "";
        pl2.style.display = "";
        }
    });
});

const submitToRegister = (e) => {
    e.preventDefault();

    const MIN_USERNAME_LENGTH = 3;
    const MIN_PASSWORD_LENGTH = 8;
    const MIN_DOMAIN_LENGTH = 3;
    const MIN_EXTENSION_LENGTH = 2;

    const userNameB = document.querySelector(".userName");
    const emailB = document.querySelector(".emailName");
    const userEmailExist = document.querySelector('.userEmailExist');
    const userEmailWrongTxt = document.querySelector('.userEmailWrongTxt');
    const pw1 = document.querySelector(".passwordOne");
    const pw2 = document.querySelector(".passwordTwo");

    const userName = userNameB.value.trim();
    const email = emailB.value.trim();
    const pw1Value = pw1.value;
    const pw2Value = pw2.value;
    const userData = JSON.parse(localStorage.getItem("shippingInfo"));

    userNameB.style.borderColor = "";
    emailB.style.borderColor = "";
    pw1.style.borderColor = "";
    pw2.style.borderColor = "";
    userEmailExist.style.display = "none";
    userEmailWrongTxt.style.display = "none";

    if (userName.length < MIN_USERNAME_LENGTH || !/^[a-zA-Z]+$/.test(userName)) {
        userNameB.style.borderColor = "red";
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailB.style.borderColor = "red";
        userEmailWrongTxt.style.display = "block";
        return;
    }

    if (userData && email === userData.email) {
        emailB.style.borderColor = "red";
        userEmailExist.style.display = "block";
        return;
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (pw1Value !== pw2Value || !passwordRegex.test(pw1Value)) {
        pw1.style.borderColor = "red";
        pw2.style.borderColor = "red";
        return;
    }

    const shippingInfo = {
        userName,
        email,
        passwordOne: pw1.value,
        passwordTwo: pw2.value
    };

    localStorage.setItem("shippingInfo", JSON.stringify(shippingInfo));

    localStorage.setItem('logIn', 'true');
    window.location.href = "index.html";
    
    return shippingInfo;
};


submitRegister.addEventListener("click", submitToRegister);

const submitToLogin = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("shippingInfo"));
    const enteredUsername = document.getElementById("name").value;
    const enteredPassword = document.getElementById("password").value;
    const userDataTxt = document.querySelector('.userDataTxt');

    if (userData) {
        if (enteredUsername === userData.userName && enteredPassword === userData.passwordOne) {
            localStorage.setItem('logIn', 'true');
            window.location.href = 'index.html';
            userDataTxt.style.display = "none";
            inputTxt[0].style.borderColor = "";
            inputTxt[1].style.borderColor = "";
        } else {
            userDataTxt.style.display = "block";
            inputTxt[0].style.borderColor = "red";
            inputTxt[1].style.borderColor = "red";
        }
    }
};

submitLogIn.addEventListener("click", submitToLogin);

const submitToNewPassword = (e) => {
    e.preventDefault();

    const userData = JSON.parse(localStorage.getItem("shippingInfo"));
    const enteredEmailA = document.getElementById("emailForgot");
    const enteredEmail = document.getElementById("emailForgot").value;
    const userDataTxt = document.querySelector('.userEmailTxt');
    userDataTxt.style.display = "block";

    if (userData) {
        if (enteredEmail === userData.email) {
            userDataTxt.style.display = "none";
            enteredEmailA.style.borderColor = "";
            forgotLog.style.display = "none";
            forgotLogSuccess.style.display = "flex";
        } else {
            userDataTxt.style.display = "block";
            enteredEmailA.style.borderColor = "red";
        }
    }
    clearInput();
};

submitForgot.addEventListener("click", submitToNewPassword);

const submitToSave = (e) => {
    e.preventDefault();

    const userData = JSON.parse(localStorage.getItem("shippingInfo"));
    const enteredPassword = document.getElementById("passwordForgot").value;
    const enteredPasswordTwo = document.getElementById("passwordForgotTwo").value;

    if (userData) {
        if (enteredPassword === enteredPasswordTwo && enteredPassword.length >= 8) {
            userData.passwordOne = enteredPassword;
            userData.passwordTwo = enteredPasswordTwo;
            localStorage.setItem("shippingInfo", JSON.stringify(userData));
            localStorage.setItem('logIn', 'true');
            window.location.href = 'index.html';
        }
    }
    clearInput();
}

submitSave.addEventListener("click", submitToSave);




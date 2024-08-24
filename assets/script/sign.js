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

function clearInput() {
    for (let i of inputTxt) {
        i.value = "";
    }
}

clearInput();

let isColor = true;

function changeColorLoad(){
    if (isColor) {
        body.style.backgroundColor = '';
        isColor = false;
    } else {
        changeColor();
        isColor = true;
    }
}
changeColorLoad();

modeToggle.addEventListener('change', () => {
    changeColorLoad();
});

function changeColor() {
    if (signForm.style.display === "flex") { 
        body.style.backgroundColor = '#12595c'
    }
    if (logForm.style.display === "flex") {
        body.style.backgroundColor = '#19704c'
    }
    if (forgotLog.style.display === "flex") {
        body.style.backgroundColor = '#702619'
    }
    if (forgotLogSuccess.style.display === "flex") {
        body.style.backgroundColor = '#5d176b'
    }
    isColor = true;
}

const signupClick = () => {
    const currentMode = localStorage.getItem("mode");

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
    
    logForm.style.display = "none";
    signForm.style.display = "none";
    forgotLog.style.display = "flex";
    forgotLogSuccess.style.display = "none";
        
    if (currentMode === "light-mode") {
        body.style.backgroundColor = '#702619';
    }
};

signupForget.addEventListener("click", signupToForget);

const signToOut = () => {
    const currentMode = localStorage.getItem("mode");
    
    logForm.style.display = "flex";
    signForm.style.display = "none";
    forgotLog.style.display = "none";
    forgotLogSuccess.style.display = "none";
        
    if (currentMode === "light-mode") {
        body.style.backgroundColor = '#19704c';
    }
};

signInOut.addEventListener("click", signToOut);

const submitToNewPassword = (e) => {
    const currentMode = localStorage.getItem("mode");
    
    e.preventDefault(); // to work
    logForm.style.display = "none";
    signForm.style.display = "none";
    forgotLog.style.display = "none";
    forgotLogSuccess.style.display = "flex";
        
    if (currentMode === "light-mode") {
        body.style.backgroundColor = '#5d176b';
    }
};

submitForgot.addEventListener("click", submitToNewPassword);

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

    const userName = document.querySelector(".userName").value;
    const emailName = document.querySelector(".emailName").value;

    if (
        passwordOne.value !== passwordTwo.value ||
        passwordOne.value.length < 8 ||
        passwordTwo.value.length < 8
    ) {
        return;
    }

    console.log("yes");

  // localStorage.setItem('username', userName);
  // localStorage.setItem('email', emailName);
  // localStorage.setItem('password', passwordOne);

  // console.log('Data saved to localStorage:', { userName, emailName ,passwordOne });
};

submitRegister.addEventListener("click", submitToRegister);

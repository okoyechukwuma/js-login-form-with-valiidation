const form = document.querySelector("#form");
const userName = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#pass");
const confirmPassword = document.querySelector("#pass2");
const display = document.querySelector(".click-me");
const remove = document.querySelector(".main-contact");
const removeRemove = document.querySelector(".back-contact");

form.addEventListener('submit', (e) => {
     e.preventDefault();
    verifyInputs();
});

verifyInputs  = () => {
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if (userNameValue === "") {
        setErrorFor(userName, "username can not be blank");
    }else if (userNameValue.length < 5) {
        setErrorFor(userName, "username can not be less than 5 characters");
    }else{
        removeErrorFor(userName);
        setSuccessFor(userName);
    }

    if (emailValue === "") {
        setErrorFor(email, "mail Address can not be blank");
    }else {
        setSuccessFor(email);
    }if (emailValue.length < 5) {
        setErrorFor(email, "email can not be less than 5 characters");
    }else if (!isEmail(emailValue)) {
        setErrorFor(email, "invalid mail address");
    }else{
        removeErrorFor(email);
        setSuccessFor(email);
    }

    if (passwordValue === "") {
        setErrorFor(password, "Password can not be blank");
    }else if (passwordValue.length < 5) {
        setErrorFor(password, "password can not be less than 5 characters");
    }else{
        removeErrorFor(password);
        setSuccessFor(password);
    }

    if (confirmPasswordValue === "") {
        setErrorFor(confirmPassword, "Password can not be blank");
    }else if (passwordValue !== confirmPasswordValue) {
        setErrorFor(confirmPassword, "password did not match");
    }else{
        removeErrorFor(confirmPassword);
        setSuccessFor(confirmPassword);
    }
}

 setErrorFor = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = message;
    formControl.classList.add("error");
}

removeErrorFor = (input) => {
    const formControl = input.parentElement;
    formControl.classList.remove("error");
}

setSuccessFor = (input) => {
    const formControl = input.parentElement;
    formControl.classList.add("success");
}

isEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

display.addEventListener('click', () => {
    display.classList.add("remove");
    remove.classList.add("add");
});

removeRemove.addEventListener('click', () => {
    display.classList.remove("remove");
    remove.classList.remove("add");
});

let x = new Date().getHours();
if (x < 12) {
    document.querySelector(".demo").innerHTML = "Good Morning Guest :)";
}else if (x < 16) {
    document.querySelector(".demo").innerHTML = "Good Afternoon Guest :)";
}else if (x < 18.30) {
    document.querySelector(".demo").innerHTML = "Good Evening Guest :)";
}else{
     document.querySelector(".demo").innerHTML = "Good Night Guest :)";
}

let day = new Date().getDay();
switch (day) {
    case 0:
        document.querySelector(".demo1").innerHTML = "Today is Sunday"
        break;
     case 1:
        document.querySelector(".demo1").innerHTML = "Today is Monday"
        break;
    case 2:
        document.querySelector(".demo1").innerHTML = "Today is Tuesday"
        break;
    case 3:
        document.querySelector(".demo1").innerHTML = "Today is Wednessday"
        break;
    case 4:
        document.querySelector(".demo1").innerHTML = "Today is Thursday"
        break;
    case 5:
        document.querySelector(".demo1").innerHTML = "Today is Friday"
        break;
    case 6:
        document.querySelector(".demo1").innerHTML = "Today is Saturday"
        break;
}

{
    // var a = 1;
    // for(;a<6;a+=2){
    //     // a*=a;
    // }
    // console.log(a);
}
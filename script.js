const emailButton = document.querySelector(".email-button");

function submitEmail(){
    const email = document.querySelector(".email");
    const message = document.querySelector(".error-message");
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

 if(email.value == ''){
        message.innerText = "Oops! Please enter your email!";
    } else if(!emailRegex.test(email.value)){
        message.innerText = "Oops! Please check your email!";
    } else if(emailRegex.test(email.value)){
        message.innerText = "";
    }
};

emailButton.addEventListener("click", submitEmail);
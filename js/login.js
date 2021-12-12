const loginform = document.querySelector("#login-form");
const input = loginform.querySelector("input");
const h1 = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginform.classList.add(HIDDEN_CLASSNAME);
    const username = input.value;    
    localStorage.setItem(USERNAME_KEY, username);
    h1.innerText = `Hello ${username}`; 
    h1.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings(username){
    h1.innerText = `Hello ${username}`; 
    h1.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    loginform.classList.remove(HIDDEN_CLASSNAME);
    loginform.addEventListener("submit", onLoginSubmit);
}
else{
    paintGreetings(savedUsername);
}


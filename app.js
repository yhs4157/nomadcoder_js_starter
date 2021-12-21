const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input"); 
const loginButton = loginForm.querySelector("button"); 

/*
# 4.0 Input value
위와 동일
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
*/

function handleLoginBtnClick() {
    console.log("hello", loginInput.value); 
}

/*
# 4.0 Input value
input.value는 default로 들어가게 되는 값이다. 
*/

loginButton.addEventListener("click", handleLoginBtnClick); 


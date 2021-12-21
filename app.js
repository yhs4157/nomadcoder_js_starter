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
    const username = loginInput.value; 
    console.log(username); 
}

/*
# 4.0 Input value
input.value는 default로 들어가게 되는 값이다. 
*/

/*
if(username === "") {
        alert("Please write your name"); 
    } else if(username.length > 15) {
        alert("Your name is too long.");
    }
}
로 처리할 수 있지만 좋은 방법은 아니다. 
이미 있는 기능을 사용하는 것이 좋다. 
*/

/*
# 4.1 Form Submission 
loginButton.addEventListener("click", handleLoginBtnClick); 
- HTML에서 처리하였기에 필요로 하지 않음. 
*/

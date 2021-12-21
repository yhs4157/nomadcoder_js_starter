const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input"); 
const greeting = document.querySelector("#greeting"); 

const HIDDEN_CLASSNAME = "hidden"; 

/*
# 4.0 Input value
위와 동일
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
*/

function handleLoginSubmit(e) {
    e.preventDefault(); 
    loginForm.classList.add(HIDDEN_CLASSNAME); 
    const username = loginInput.value; 
    //greeting.innerText = "Hello " + username; 
    // 조금 더 간소화하는 방법
    // 대신 ``(백틱)을 사용. option + ₩, 혹은 영어상태에서 ₩
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME); 
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

loginForm.addEventListener("submit", handleLoginSubmit); 

/*
# 4.2 Events
    handleLoginSubmit -> 자동 실행을 의미하지 않음. 
    handleLoginSubmit() -> 자동 실행을 의미함. 

    아무것도 없는 것처럼 보이더라도 handleLoginSubmit에는 argument를 넘겨주고 있음. 
    함수에 필요한 데이터를 argument로 보내줌. 
    ex) 이것의 html 주체, timestemp 등등. 

    e.preventDefault(); 
    -> 특정 부분이 제출 후에는 새로고침을 동작하게 만든다. 
*/

/*
function handleLinkClick(event) {
    event.preventDefault(); 
    console.log(event); 
    alert("clicked!!"); 
}

const link = document.querySelector("a"); 

# 4.3 
    결국 중요한 것은 handleLinkClick은 단순히 작동하는 것이 아니라
    브라우저가 특정 과정을 거쳐서 작동시킨다는 것. 
*/


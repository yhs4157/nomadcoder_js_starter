const clock = document.querySelector("h2#clock"); 

function getClock() {
    const date = new Date(); 
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock(); 
setInterval(getClock, 1000); 

/*
5.0 
    setinterval(sayHello, 5000);
*/

//  setTimeout(sayHello, 5000); 

/*
5.1 
    Date를 사용할 것임. 
*/


let randomNumber = parseInt(Math.random() * 100 + 1);

const sayDate = function(){
    console.log(Date.now());
}
let intervalID=0
document.querySelector('#start').addEventListener('click', function(){
    console.log("event started.");
    intervalID  = setInterval(sayDate, 1000, "hi")//isme sirf functions he pass hote hain variables or constants pass nahi hote hain.
})

document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(intervalID);
    console.log("event stopped")
})

//this is the all necessary things you need to understand the setInterval function in jS which is used to run a specefic peice of code after a several period of time co
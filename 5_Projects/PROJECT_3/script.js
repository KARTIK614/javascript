//it is a simple project yet it is used to discribe the time's importance in the development field.
/**
 * in it some of the things are needed to be in the sight of the developer they are as follows:-
 * you can get the tags by one more method instead of queryselector you can use getElementById as well in it.
 * to run a function after a specefic time interval you can use the setInterval function in JS which is predefined.
 * and put the code inside this function you want to execute on your own.
 * toLocaleTimeString gives you the required time to display.
 */
//code
const clock = document.getElementById('clock');
setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();

}, 1000);//1000 refers to run the function every second.

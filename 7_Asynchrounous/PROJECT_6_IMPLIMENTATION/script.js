const hex = '123456789ABCDEF';

const randomColorHex = function () {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}


function changeColor() {
    document.body.style.background = randomColorHex();
}
let stopColorChanger;
document.querySelector('#start').addEventListener('click', function () {
    if (stopColorChanger == null) {//this is a fail safe because if a persone clicks the start multiple time then the button clutters the work and makes an efficient script of JS.
        stopColorChanger = setInterval(changeColor, 1000)
    }
})


document.querySelector('#stop').addEventListener('click', function () {
    clearInterval(stopColorChanger)
    stopColorChanger = null;
})

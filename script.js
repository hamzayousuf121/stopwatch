var min = 00;
var sec = 00;
var msec = 00;
var hours = 00;

var hoursHeading = document.getElementById('hoursValue');
var minHeading = document.getElementById('minValue');
var secHeading = document.getElementById('secValue');
var mSecHeading = document.getElementById('msecValue');


var start = document.getElementById('start');
var stopcounter = document.getElementById('stop');
var interval;

const timer = () => {
    msec++
    mSecHeading.innerHTML = msec;
    if (msec >= 100) {
        sec++
        secHeading.innerHTML = sec;
        msec = 00;
    }
    else if (sec >= 60) {
        min++
        sec = 00;
        minHeading.innerHTML = min
    }
    else if(min >= 60){
        hours++;
        min = 00;
        hoursHeading.innerHTML = hours
    }
}

const startCounter = () => {

    interval = setInterval(timer, 10);
    start.setAttribute("disabled", "true")
    stopcounter.removeAttribute("disabled")

}

const stopCounter = () => {
    start.removeAttribute("disabled")
    clearInterval(interval);
    stopcounter.setAttribute("disabled", "true")

}

const resetCounter = () => {
    hoursHeading.innerHTML = 00;
    minHeading.innerHTML = 00;
    secHeading.innerHTML = 00;
    mSecHeading.innerHTML = 00;
    clearInterval(interval);
    start.removeAttribute("disabled")
    stopcounter.removeAttribute("disabled")
}
